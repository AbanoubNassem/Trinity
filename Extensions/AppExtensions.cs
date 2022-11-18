using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Controllers;
using AbanoubNassem.Trinity.Managers;
using InertiaAdapter.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;

namespace AbanoubNassem.Trinity.Extensions;

public static class AppExtensions
{
    public static IServiceCollection AddTrinity<TContext>(this IServiceCollection services,
        Action<TrinityConfigurations>? configure = null)
    {
        services.AddRazorPages();

        services.AddControllersWithViews()
            .AddApplicationPart(typeof(TrinityConfigurations).Assembly);

        services.AddDirectoryBrowser();

        var configs = new TrinityConfigurations();
        configure?.Invoke(configs);
        services.AddSingleton(configs);

        services.AddSingleton(new TrinityManager(configs, typeof(TContext)));

        services.AddInertia();

        return services;
    }


    public static WebApplication UseTrinity(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.UseStatusCodePages();
            app.UseDeveloperExceptionPage();
        }

        // var assembly = typeof(Controllers.TrinityController).GetTypeInfo().Assembly;
        // var embeddedFileProvider = new EmbeddedFileProvider(
        //     assembly,
        //     "AbanoubNassem.Trinity.wwwroot"
        // );
        app.MapRazorPages();
        app.UseDefaultFiles();
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(
                Path.Combine(Directory.GetCurrentDirectory(), "../Trinity/wwwroot")),
            RequestPath = "/trinity"
        });
        // app.UseStaticFiles(new StaticFileOptions
        // {
        //     FileProvider = embeddedFileProvider,
        //     RequestPath = "/trinity"
        // });
        app.UseInertia();
        app.UseRouting();

        var configs = app.Services.GetService<TrinityConfigurations>();
        var trinityManager = app.Services.GetService<TrinityManager>();

        app.UseEndpoints(endpoints =>
        {
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


        return app;
    }
}