using System.Globalization;
using System.Reflection;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Hubs;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.Providers;
using AbanoubNassem.Trinity.Utilities;
using InertiaCore;
using InertiaCore.Extensions;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using StackExchange.Profiling;
using Vite.AspNetCore.Extensions;

#if !DEBUG
using System.Reflection;
#endif

namespace AbanoubNassem.Trinity.Extensions;

/// <summary>
/// Add the ability for Trinity to register itself.
/// </summary>
public static class AppExtensions
{
    /// <summary>
    /// Add Trinity services and configurations to the specified <see cref="IServiceCollection" />. 
    /// </summary>
    /// <param name="services">The <see cref="IServiceCollection" /> to add services to.</param>
    /// <param name="configure">An <see cref="Action{TrinityConfigurations}"/> to configure the provided <see cref="TrinityConfigurations"/>.</param>
    /// <returns>The <see cref="IServiceCollection"/> so that additional calls can be chained.</returns>
    public static IServiceCollection AddTrinity(this IServiceCollection services,
        Action<TrinityConfigurations>? configure = null)
    {
        var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production";

        var isDevelopment = env == Environments.Development;

        var configs = new TrinityConfigurations(isDevelopment);

        configure?.Invoke(configs);
        if (configs.ConnectionFactory == null) throw new Exception("Connection Factory must be configured!");

        services.AddSingleton(configs);

        services.AddMvc(opt => { opt.Conventions.Insert(0, new RoutePrefixConvention($"{configs.Prefix}")); })
            .AddApplicationPart(typeof(TrinityConfigurations).Assembly);

        services.AddHttpContextAccessor();
        services.AddSingleton<IActionContextAccessor, ActionContextAccessor>();

        services.AddScoped<IUrlHelper>(x =>
        {
            var actionContext = x.GetRequiredService<IActionContextAccessor>().ActionContext;
            var factory = x.GetRequiredService<IUrlHelperFactory>();
            return factory.GetUrlHelper(actionContext!);
        });

        services.AddDirectoryBrowser();

        var localizer = new TrinityLocalizer(configs);
        services.TryAddSingleton(localizer);
        var trinityManager = new TrinityManager(configs, services, localizer);
        services.AddSingleton(trinityManager);

        services.AddAuthorization();
        services.AddAuthentication("Trinity")
            .AddCookie("Trinity", ops =>
            {
                ops.LoginPath = $"/{configs.Prefix}/login";
                ops.LogoutPath = $"/{configs.Prefix}/logout";
                ops.Cookie.Name = "Trinity";
            });

        services.AddAntiforgery(options =>
        {
            options.HeaderName = "X-XSRF-TOKEN";
            options.Cookie.Name = "Trinity.Antiforgery";
        });

        services.AddViteServices();
        services.AddInertia(opts => { opts.RootView = "~/Views/TrinityApp.cshtml"; });

        if (isDevelopment)
            services.AddMiniProfiler(conf =>
            {
                conf.PopupRenderPosition = RenderPosition.BottomLeft;
                conf.ColorScheme = ColorScheme.Auto;
                conf.ShowControls = true;
                conf.PopupMaxTracesToShow = 4;
                configs.MiniProfilerConfigures?.Invoke(conf);
            });

        services.AddSignalR();
        services.AddSingleton<TrinityNotificationsManager>();
        services.AddSingleton<TrinityPushNotificationsManager>();
        trinityManager.Init();
        return services;
    }

    /// <summary>
    /// Adds Trinity to the specified <see cref="IApplicationBuilder"/>, which enables Trinity {Admin Panel,Forms,Tables} capabilities.
    /// </summary>
    /// <param name="app">The <see cref="IApplicationBuilder"/> to add Trinity to.</param>
    public static void UseTrinity(this WebApplication app)
    {
        var configs = app.Services.GetRequiredService<TrinityConfigurations>();
        var manager = app.Services.GetRequiredService<TrinityManager>();
        var antiforgery = app.Services.GetRequiredService<IAntiforgery>();

        if (app.Environment.IsDevelopment())
        {
            app.UseStatusCodePages();
            app.UseDeveloperExceptionPage();
            app.UseMiniProfiler();
        }
        else
        {
            app.UseExceptionHandler(new ExceptionHandlerOptions
            {
                ExceptionHandler = async (context) =>
                {
                    await Inertia.Render("Error", new
                    {
                        statusCode = context.Response.StatusCode,
                        reasonPhrase = ReasonPhrases.GetReasonPhrase(context.Response.StatusCode)
                    }).ExecuteResultAsync(new ActionContext(context, context.GetRouteData(), new ActionDescriptor()));
                }
            });
        }


        app.MapRazorPages();
        app.UseDefaultFiles();

#if DEBUG
        app.UseViteDevMiddleware();
#else
        var assembly = typeof(Controllers.TrinityController).GetTypeInfo().Assembly;
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new EmbeddedFileProvider(
                assembly,
                "AbanoubNassem.Trinity.wwwroot"
            ),
            RequestPath = $"/{configs.Prefix}/trinity",
        });

#endif

        manager.LoadPlugins(app);

        app.UseStaticFiles();

        var basePath = Path.Combine("wwwroot", "trinity_temp");
        if (!Directory.Exists(basePath))
            Directory.CreateDirectory(basePath);

        TrinityUtils.ClearTrinityTempDirectory();


        app.UseInertia();
        app.UseRouting();
        app.UseAuthentication();
        app.UseAuthorization();
        app.SetupLocales();

        app.MapHub<TrinityNotificationsHub>($"{configs.Prefix}/trinity-notifications-hub");

        app.Use((context, next) =>
        {
            var requestPath = context.Request.Path.Value;

            if (requestPath == null ||
                !requestPath.StartsWith($"/{configs.Prefix}", StringComparison.OrdinalIgnoreCase))
                return next(context);

            var tokenSet = antiforgery.GetAndStoreTokens(context);
            context.Response.Cookies.Append("XSRF-TOKEN", tokenSet.RequestToken!,
                new CookieOptions { HttpOnly = false });

            return next(context);
        });
    }

    private static void SetupLocales(this IApplicationBuilder app)
    {
        var supportedCultures = new Dictionary<string, CultureInfo>();
        var resourceDirectory = new DirectoryInfo(Path.Combine(AppContext.BaseDirectory, "Locales"));

        var jsonFiles = resourceDirectory.GetFiles("*.json", SearchOption.AllDirectories);

        foreach (var fileInfo in jsonFiles)
        {
            try
            {
                var cultureName = Path.GetFileNameWithoutExtension(fileInfo.Name).Split('.').Last().Split('-').First();
                if (supportedCultures.ContainsKey(cultureName)) continue;

                supportedCultures.Add(cultureName, new CultureInfo(cultureName));
            }
            catch (CultureNotFoundException)
            {
                // Ignore cultures that are not supported by the framework
            }
        }


        var defaultCulture = new CultureInfo("en");

        var requestLocalizationOptions = new RequestLocalizationOptions
        {
            DefaultRequestCulture = new RequestCulture(defaultCulture),
            SupportedCultures = supportedCultures.Values.ToList(),
            SupportedUICultures = supportedCultures.Values.ToList(),
            FallBackToParentCultures = true,
            RequestCultureProviders = new List<IRequestCultureProvider>
            {
                new QueryStringRequestCultureProvider { QueryStringKey = "locale", UIQueryStringKey = "locale" },
                new CookieRequestCultureProvider { CookieName = ".Trinity.Locale" },
                new AcceptLanguageHeaderRequestCultureProvider()
            }
        };

        app.UseRequestLocalization(requestLocalizationOptions);
    }
}