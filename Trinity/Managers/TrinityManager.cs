using System.Reflection;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Pages;
using AbanoubNassem.Trinity.Plugins;
using AbanoubNassem.Trinity.Providers;
using AbanoubNassem.Trinity.Resources;
using Humanizer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using StackExchange.Profiling;

namespace AbanoubNassem.Trinity.Managers;

public class TrinityManager
{
    private const BindingFlags Flags = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public;
    private readonly TrinityConfigurations _configurations;
    private readonly IServiceCollection _serviceProvider;
    private readonly TrinityLocalizer _trinityLocalizer;
    public Dictionary<string, Type> Resources { get; } = new();

    public Dictionary<string, Type> Pages { get; } = new();
    // public List<TrinityPlugin> Plugins { get; } = new();

    public TrinityManager(TrinityConfigurations configurations, IServiceCollection serviceProvider,
        TrinityLocalizer trinityLocalizer)
    {
        _configurations = configurations;
        _serviceProvider = serviceProvider;
        _trinityLocalizer = trinityLocalizer;
    }

    public void Init()
    {
        LoadPages();
        LoadResources();
        LoadPlugins();
    }

    private void LoadPages()
    {
        var trinityPageType = typeof(TrinityPage);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => trinityPageType.IsAssignableFrom(p)
                        && p is { IsAbstract: false, IsInterface: false }
                        && p.Namespace != "AbanoubNassem.Trinity.Pages"
            )
            .ToList();

        if (!types.Any(x => x.Name is "Dashboard" or "DashboardPage"))
        {
            types.Add(typeof(TrinityDashboardPage));
        }

        foreach (var pageType in types)
        {
            _serviceProvider.TryAddScoped(pageType, provider =>
            {
                var httpContextAccessor = provider.GetRequiredService<IHttpContextAccessor>();
                var httpContext = httpContextAccessor.HttpContext!;

                var page = (TrinityPage)Activator.CreateInstance(pageType)!;

                pageType.GetProperty("Configurations", Flags)!.SetValue(page, _configurations);
                pageType.GetProperty("ServiceProvider", Flags)!.SetValue(page, httpContext.RequestServices);
                pageType.GetProperty("Request", Flags)!.SetValue(page, httpContext.Request);
                pageType.GetProperty("Response", Flags)!.SetValue(page, httpContext.Response);
                pageType.GetProperty("User", Flags)!.SetValue(page, httpContext.User);
                pageType.GetProperty("Logger", Flags)!
                    .SetValue(page, httpContext.RequestServices
                        .GetRequiredService(typeof(ILogger<>)
                            .MakeGenericType(pageType))
                    );

                pageType.GetProperty("Localizer", Flags)!.SetValue(page, _trinityLocalizer);

                var modelState = httpContext.RequestServices.GetRequiredService<IActionContextAccessor>()
                    .ActionContext!.ModelState;

                pageType.GetProperty("ModelState", Flags)!.SetValue(page, modelState);

                return page;
            });

            var page = (TrinityPage)Activator.CreateInstance(pageType)!;
            pageType.GetProperty("Localizer", Flags)!
                .SetValue(page, _trinityLocalizer);

            Pages.TryAdd(page.Slug.ToLower(), pageType);
        }
    }

    private void LoadResources()
    {
        var trinityResourceType = typeof(ITrinityResource);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => trinityResourceType.IsAssignableFrom(p) && p is { IsAbstract: false, IsInterface: false });


        foreach (var resourceType in types)
        {
            var name = resourceType.Name.Replace("Resource", "").ToLower();
            var label = name.Titleize();
            var plural = label.Pluralize();

            _serviceProvider.TryAddScoped(resourceType, provider =>
            {
                var resource = (ITrinityResource)Activator.CreateInstance(resourceType)!;
                resourceType.GetProperty("Configurations", Flags)!
                    .SetValue(resource, _configurations);

                resourceType.GetProperty("Localizer", Flags)!.SetValue(resource, _trinityLocalizer);

                var httpContextAccessor = provider.GetRequiredService<IHttpContextAccessor>();
                var httpContext = httpContextAccessor.HttpContext!;
                var request = httpContext.Request;


                resourceType.GetProperty("Name", Flags)!
                    .SetValue(resource, plural.ToLower());

                if (resource.Label == null)
                {
                    resourceType.GetProperty("Label", Flags)!
                        .SetValue(resource, plural);
                }

                if (resource.PluralLabel == null)
                {
                    resourceType.GetProperty("PluralLabel", Flags)!
                        .SetValue(resource, plural);
                }

                var table = resourceType.GetProperty("Table", Flags)!;

                if (table.GetValue(resource) == null)
                {
                    table.SetValue(resource, plural.ToLower());
                }


                resourceType.GetProperty("ServiceProvider", Flags)!.SetValue(resource, httpContext.RequestServices);


                resourceType.GetProperty("Logger", Flags)!.SetValue(resource,
                    httpContext.RequestServices.GetRequiredService(typeof(ILogger<>)
                        .MakeGenericType(resourceType)
                    ));

                var modelState = httpContext.RequestServices.GetRequiredService<IActionContextAccessor>()
                    .ActionContext!.ModelState;

                resourceType.GetProperty("ModelState", Flags)!.SetValue(resource, modelState);


                resourceType.GetProperty("Request", Flags)!.SetValue(resource, httpContext.Request);

                resourceType.GetProperty("Response", Flags)!.SetValue(resource, httpContext.Response);

                resourceType.GetProperty("User", Flags)!.SetValue(resource, httpContext.User);

                if (_configurations.IsDevelopment)
                {
                    resourceType.GetProperty("ConnectionFactory", Flags)!
                        .SetValue(resource,
                            () => new StackExchange.Profiling.Data.ProfiledDbConnection(
                                _configurations.ConnectionFactory(),
                                MiniProfiler.Current));
                }
                else
                {
                    resourceType.GetProperty("ConnectionFactory", Flags)!
                        .SetValue(resource, _configurations.ConnectionFactory);
                }

                switch (request.Method)
                {
                    case "GET" or "PUT" when
                        (string?)request.RouteValues["view"] == "edit":
                        resourceType.GetProperty("IsUpdateRequest", Flags)!.SetValue(resource, true);
                        break;
                    case "GET" or "POST" when
                        (string?)request.RouteValues["view"] == "create":
                        resourceType.GetProperty("IsCreateRequest", Flags)!.SetValue(resource, true);
                        break;
                }


                return resource;
            });


            Resources.Add(plural.ToLower(), resourceType);
        }
    }


    private void LoadPlugins()
    {
        var trinityPluginType = typeof(TrinityPlugin);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => trinityPluginType.IsAssignableFrom(p) && !p.IsAbstract);


        foreach (var pluginType in types)
        {
            var plugin = (TrinityPlugin)Activator.CreateInstance(pluginType)!;

            _configurations.ExtraJavaScriptSources.AddRange(plugin.GetScriptSources());
            _configurations.ExtraStyleSources.AddRange(plugin.GetStyleSources());

            // Plugins.Add(plugin);
        }
    }
}