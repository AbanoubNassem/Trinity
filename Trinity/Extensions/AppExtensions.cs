using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.Utilities;
using InertiaCore;
using InertiaCore.Extensions;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using StackExchange.Profiling;

#if !DEBUG
using System.Reflection;
#endif

namespace AbanoubNassem.Trinity.Extensions;

public static class AppExtensions
{
    public static IServiceCollection AddTrinity(this IServiceCollection services,
        Action<TrinityConfigurations>? configure = null)
    {
        var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production";

        var isDevelopment = env == Environments.Development;

        var configs = new TrinityConfigurations(isDevelopment);

        configure?.Invoke(configs);
        if (configs.ConnectionFactory == null) throw new Exception("Connection Factory must be configured!");

        services.AddSingleton(configs);

        services.AddMvc()
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


        var trinityManager = new TrinityManager(configs, services);
        services.AddSingleton(trinityManager);

        services.AddAuthorization();
        services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, ops =>
            {
                ops.LoginPath = $"/{configs.Prefix}/login";
                ops.LogoutPath = $"/{configs.Prefix}/logout";
                ops.Cookie.Name = "Trinity";
            });

        services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");

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


        trinityManager.Init();
        return services;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="app"></param>
    /// <param name="physicalTrinityWwwRootPath">
    ///     Used to point to the Trinity wwwroot directory, while development ,
    ///     to be able to load the new bundled Javascript files, on page refresh
    /// </param>
    /// <returns></returns>
    public static WebApplication UseTrinity(this WebApplication app, string? physicalTrinityWwwRootPath = null)
    {
        var configs = app.Services.GetRequiredService<TrinityConfigurations>();
        var trinityManager = app.Services.GetRequiredService<TrinityManager>();
        var antiforgery = app.Services.GetRequiredService<IAntiforgery>();

        app.UsePathBase(new PathString($"/{configs.Prefix}"));

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
        if (physicalTrinityWwwRootPath != null)
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(physicalTrinityWwwRootPath),
                RequestPath = "/trinity"
            });
#else
        var assembly = typeof(Controllers.TrinityController).GetTypeInfo().Assembly;
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new EmbeddedFileProvider(
                assembly,
                "AbanoubNassem.Trinity.wwwroot"
            ),
            RequestPath = "/trinity"
        });

#endif

        var basePath = Path.Combine("wwwroot", "trinity_temp");
        if (!Directory.Exists(basePath))
            Directory.CreateDirectory(basePath);

        TrinityTemp.ClearTrinityTempDirectory(app.Environment);


        app.UseInertia();

        app.UseRouting();
        app.UseAuthentication();
        app.UseAuthorization();


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


        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllerRoute(
                name: "trinity-login",
                pattern: "/login",
                defaults: new { controller = "TrinityMain", action = "Login" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-logout",
                pattern: "/logout",
                defaults: new { controller = "TrinityMain", action = "Logout" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-upload",
                pattern: "/upload/file",
                defaults: new { controller = "TrinityMain", action = "UploadFile" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-delete",
                pattern: "/delete/file",
                defaults: new { controller = "TrinityMain", action = "DeleteFile" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-initial",
                pattern: "/{controller=TrinityMain}/{action=Index}"
            );

            endpoints.MapControllerRoute(
                name: "trinity-pages",
                pattern: "/pages/{slug}/",
                defaults: new { controller = "TrinityMain", action = "RenderPage" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-resources",
                pattern: "/{name}/{view=index}/{id?}",
                defaults: new { controller = "TrinityMain", action = "HandleResource" }
            );

            foreach (var plugin in trinityManager.Plugins)
            {
                plugin.RegisterEndPoints(endpoints);
            }
        });


        return app;
    }
}