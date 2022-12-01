using System.Reflection;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Managers;
using InertiaAdapter.Extensions;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using StackExchange.Profiling;

namespace AbanoubNassem.Trinity.Extensions;

public static class AppExtensions
{
    public static IServiceCollection AddTrinity(this IServiceCollection services,
        Action<TrinityConfigurations>? configure = null)
    {
        services.AddRazorPages();

        services.AddControllersWithViews()
            .AddApplicationPart(typeof(TrinityConfigurations).Assembly);

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

        services.AddInertia();

        services.AddMiniProfiler(conf =>
        {
            conf.PopupRenderPosition = RenderPosition.BottomRight;
            conf.ColorScheme = ColorScheme.Auto;
            conf.ShowControls = true;
            conf.PopupMaxTracesToShow = 4;

            configs.MiniProfilerConfigures?.Invoke(conf);
        });

        return services;
    }


    public static WebApplication UseTrinity(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.UseStatusCodePages();
            app.UseDeveloperExceptionPage();
            app.UseMiniProfiler();
        }


        app.MapRazorPages();
        app.UseDefaultFiles();

        if (app.Environment.IsDevelopment())
        {
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(Directory.GetCurrentDirectory(), "../Trinity/wwwroot")),
                RequestPath = "/trinity"
            });
        }
        else
        {
            var assembly = typeof(Controllers.TrinityController).GetTypeInfo().Assembly;
            var embeddedFileProvider = new EmbeddedFileProvider(
                assembly,
                "AbanoubNassem.Trinity.wwwroot"
            );
            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = embeddedFileProvider,
                RequestPath = "/trinity"
            });
        }


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
                pattern: configs?.Prefix + "/login",
                defaults: new { controller = "Trinity", action = "Login" }
            );

            endpoints.MapControllerRoute(
                name: "trinity-initial",
                pattern: configs?.Prefix + "/{controller=Trinity}/{action=Index}"
            );

            endpoints.MapControllerRoute(
                name: "trinity-resources",
                pattern: configs?.Prefix + "/{name}/{view=Index}/{id?}",
                defaults: new { controller = "Trinity", action = "Handle" }
            );
        });


        trinityManager.LoadResources(app.Environment.IsDevelopment());

        return app;
    }
}