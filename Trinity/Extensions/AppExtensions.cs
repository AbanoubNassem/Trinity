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

        var configs = new TrinityConfigurations();
        configure?.Invoke(configs);
        if (configs.ConnectionFactory == null) throw new Exception("Connection Factory must be configured!");

        services.AddSingleton(configs);

        services.AddSingleton(new TrinityManager(configs));

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

        services.AddMiniProfiler(conf =>
        {
            conf.PopupRenderPosition = RenderPosition.BottomLeft;
            conf.ColorScheme = ColorScheme.Auto;
            conf.ShowControls = true;
            conf.PopupMaxTracesToShow = 4;

            configs.MiniProfilerConfigures?.Invoke(conf);
        });

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

        var basePath = Path.Combine(app.Environment.WebRootPath, "trinity_temp");
        if (!Directory.Exists(basePath))
            Directory.CreateDirectory(basePath);

        TrinityTemp.ClearTrinityTempDirectory(app.Environment);

        app.UseInertia();

        app.UseRouting();
        app.UseAuthentication();
        app.UseAuthorization();


        var configs = app.Services.GetService<TrinityConfigurations>()!;
        var trinityManager = app.Services.GetService<TrinityManager>()!;


        var antiforgery = app.Services.GetRequiredService<IAntiforgery>();

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
                pattern: configs.Prefix + "/login",
                defaults: new { controller = "Trinity", action = "Login" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-logout",
                pattern: configs.Prefix + "/logout",
                defaults: new { controller = "Trinity", action = "Logout" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-upload",
                pattern: configs.Prefix + "/upload/file",
                defaults: new { controller = "Trinity", action = "UploadFile" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-delete",
                pattern: configs.Prefix + "/delete/file",
                defaults: new { controller = "Trinity", action = "DeleteFile" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-initial",
                pattern: configs.Prefix + "/{controller=Trinity}/{action=Index}"
            );

            endpoints.MapControllerRoute(
                name: "trinity-resources",
                pattern: configs.Prefix + "/{name}/{view=index}/{id?}",
                defaults: new { controller = "Trinity", action = "Handle" }
            );

            // endpoints.MapControllerRoute(
            //     name: "trinity-create",
            //     pattern: configs?.Prefix + "/{name}/create",
            //     defaults: new { controller = "Trinity", action = "Create" }
            // );
        });


        trinityManager.LoadResources(app.Environment.IsDevelopment());

        return app;
    }
}