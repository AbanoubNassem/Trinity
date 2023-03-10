using System.Reflection;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Pages;
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

    public Dictionary<string, KeyValuePair<Type, object>> Resources { get; } = new();
    public Dictionary<string, KeyValuePair<Type, object>> Pages { get; } = new();

    public TrinityManager(TrinityConfigurations configurations, IServiceCollection serviceProvider)
    {
        _configurations = configurations;
        _serviceProvider = serviceProvider;
    }

    public void LoadPages()
    {
        var trinityPageType = typeof(TrinityPage);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => trinityPageType.IsAssignableFrom(p) && !p.IsAbstract &&
                        p.Namespace != "AbanoubNassem.Trinity.Pages")
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
                pageType.GetProperty("Logger", Flags)!
                    .SetValue(page, httpContext.RequestServices
                        .GetRequiredService(typeof(ILogger<>)
                            .MakeGenericType(pageType))
                    );

                var modelState = httpContext.RequestServices.GetRequiredService<IActionContextAccessor>()
                    .ActionContext!.ModelState;

                pageType.GetProperty("ModelState", Flags)!.SetValue(page, modelState);

                return page;
            });

            var page = (TrinityPage)Activator.CreateInstance(pageType)!;
            
            Pages.TryAdd(page.PageName.ToLower(), new KeyValuePair<Type, object>(pageType, new
            {
                page.PageName,
                page.Label,
                page.Icon,
            }));
        }
    }

    public void LoadResources()
    {
        var trinityResourceType = typeof(TrinityResource);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => trinityResourceType.IsAssignableFrom(p) && !p.IsAbstract);


        foreach (var resourceType in types)
        {
            var name = resourceType.Name.Replace("Resource", "").ToLower();
            var label = name.Titleize();
            var plural = label.Pluralize();

            _serviceProvider.TryAddScoped(resourceType, provider =>
            {
                var httpContextAccessor = provider.GetRequiredService<IHttpContextAccessor>();
                var httpContext = httpContextAccessor.HttpContext!;

                var resource = CreateResource(trinityResourceType, resourceType, plural);


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

                return resource;
            });


            var resource = CreateResource(trinityResourceType, resourceType, plural);
       
            Resources.Add(plural.ToLower(),
                new KeyValuePair<Type, object>(resourceType,
                    new
                    {
                        resource.Icon,
                        resource.Label,
                        resource.Name,
                        resource.PluralLabel,
                        resource.PrimaryKeyColumn,
                        resource.ShowGridlines,
                        resource.StripedRows,
                        resource.Table,
                        resource.TitleColumn
                    }
                )
            );
        }
    }

    private TrinityResource CreateResource(IReflect trinityResourceType, Type resourceType, string plural)
    {
        var resource = (TrinityResource)Activator.CreateInstance(resourceType)!;

        trinityResourceType.GetProperty("Name", Flags)!
            .SetValue(resource, plural.ToLower());

        if (resource.Label == null)
        {
            trinityResourceType.GetField("_label", Flags)!
                .SetValue(resource, plural);
        }

        if (resource.PluralLabel == null)
        {
            trinityResourceType.GetField("_pluralLabel", Flags)!
                .SetValue(resource, plural);
        }

        if (resource.Table == null)
        {
            trinityResourceType.GetField("_table", Flags)!
                .SetValue(resource, plural.ToLower());
        }

        resourceType.GetProperty("Configurations", Flags)!
            .SetValue(resource, _configurations);

        return resource;
    }
}