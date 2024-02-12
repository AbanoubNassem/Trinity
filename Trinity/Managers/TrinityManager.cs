using System.Collections.Concurrent;
using System.Reflection;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Notifications;
using AbanoubNassem.Trinity.Pages;
using AbanoubNassem.Trinity.Plugins;
using AbanoubNassem.Trinity.Providers;
using AbanoubNassem.Trinity.Resources;
using Humanizer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using StackExchange.Profiling;

namespace AbanoubNassem.Trinity.Managers;

/// <summary>
/// TrinityManager is responsible for Loading all the Trinity Resources,Pages and plugins
/// </summary>
public class TrinityManager
{
    private const BindingFlags Flags = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public;
    private readonly TrinityConfigurations _configurations;
    private readonly IServiceCollection _serviceProvider;
    private readonly TrinityLocalizer _trinityLocalizer;

    /// <summary>
    /// A Dictionary of the registered/loaded <see cref="ITrinityResource"/>.
    /// </summary>
    public Dictionary<string, Type> Resources { get; } = new();

    /// <summary>
    /// A Dictionary of the registered/loaded <see cref="TrinityPage"/>.
    /// </summary>
    public Dictionary<string, Type> Pages { get; } = new();

    /// <summary>
    /// Creating a new instance of <see cref="TrinityManager"/>.
    /// </summary>
    /// <param name="configurations">The singleton of <see cref="TrinityConfigurations"/> registered in the app.</param>
    /// <param name="serviceProvider">The current <see cref="IServiceCollection"/>.</param>
    /// <param name="trinityLocalizer">The singleton of <see cref="TrinityLocalizer"/> registered in the app.</param>
    public TrinityManager(TrinityConfigurations configurations, IServiceCollection serviceProvider,
        TrinityLocalizer trinityLocalizer)
    {
        _configurations = configurations;
        _serviceProvider = serviceProvider;
        _trinityLocalizer = trinityLocalizer;
    }

    /// <summary>
    /// Initialize Trinity by loading all the <see cref="TrinityPage"/>s , <see cref="ITrinityResource"/>s and
    /// <see cref="TrinityPlugin"/>s .
    /// </summary>
    public void Init()
    {
        LoadPages();
        LoadResources();
    }

    private readonly ConcurrentDictionary<Type, IDictionary<string, PropertyInfo>> _propertyInfoCache = new();

    private PropertyInfo? GetPropertyInfo(Type type, string propertyName)
    {
        var properties = _propertyInfoCache.GetOrAdd(type, t => t.GetProperties(Flags).ToDictionary(p => p.Name));
        return properties.TryGetValue(propertyName, out var propertyInfo) ? propertyInfo : null;
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
                var modelState = httpContext.RequestServices.GetRequiredService<IActionContextAccessor>()
                    .ActionContext!.ModelState;

                var page = (TrinityPage)Activator.CreateInstance(pageType)!;

                GetPropertyInfo(pageType, "Configurations")?.SetValue(page, _configurations);
                GetPropertyInfo(pageType, "ServiceProvider")?.SetValue(page, httpContext.RequestServices);
                GetPropertyInfo(pageType, "Request")?.SetValue(page, httpContext.Request);
                GetPropertyInfo(pageType, "Response")?.SetValue(page, httpContext.Response);
                GetPropertyInfo(pageType, "User")?.SetValue(page, httpContext.User);
                GetPropertyInfo(pageType, "Logger")?.SetValue(page, httpContext.RequestServices
                    .GetRequiredService(typeof(ILogger<>)
                        .MakeGenericType(pageType))
                );

                GetPropertyInfo(pageType, "Localizer")?.SetValue(page, _trinityLocalizer);
                GetPropertyInfo(pageType, "ModelState")?.SetValue(page, modelState);
                GetPropertyInfo(pageType, "TrinityNotifications")?.SetValue(page,
                    httpContext.RequestServices.GetRequiredService<TrinityNotificationsManager>()
                );
                GetPropertyInfo(pageType, "TrinityPushNotifications")?.SetValue(page,
                    httpContext.RequestServices.GetRequiredService<TrinityPushNotificationsManager>()
                );
                return page;
            });

            var page = (TrinityPage)Activator.CreateInstance(pageType)!;
            GetPropertyInfo(pageType, "Localizer")?.SetValue(page, _trinityLocalizer);

            Pages.TryAdd(page.Slug.ToLower(), pageType);
        }
    }

    private void LoadResources()
    {
        var trinityResourceType = typeof(ITrinityResource);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => trinityResourceType.IsAssignableFrom(p) &&
                        p is { IsAbstract: false, IsInterface: false } &&
                        p.Namespace != "AbanoubNassem.Trinity.Resources"
            )
            .ToList();


        if (!types.Any(x => x.Name is "User" or "UserResource"))
        {
            types.Add(typeof(UserResource));
        }

        foreach (var resourceType in types)
        {
            var name = resourceType.Name.Replace("Resource", "").ToLower();
            var label = name.Titleize();
            var plural = label.Pluralize();

            _serviceProvider.TryAddScoped(resourceType, provider =>
            {
                var resource = (ITrinityResource)Activator.CreateInstance(resourceType)!;

                var httpContextAccessor = provider.GetRequiredService<IHttpContextAccessor>();
                var httpContext = httpContextAccessor.HttpContext!;
                var request = httpContext.Request;
                var modelState = httpContext.RequestServices.GetRequiredService<IActionContextAccessor>()
                    .ActionContext!.ModelState;

                GetPropertyInfo(resourceType, "Configurations")?.SetValue(resource, _configurations);
                GetPropertyInfo(resourceType, "Localizer")?.SetValue(resource, _trinityLocalizer);
                GetPropertyInfo(resourceType, "Name")?.SetValue(resource, plural.ToLower());


                if (resource.Label == null)
                {
                    GetPropertyInfo(resourceType, "Label")?.SetValue(resource, plural);
                }

                if (resource.PluralLabel == null)
                {
                    GetPropertyInfo(resourceType, "PluralLabel")?.SetValue(resource, plural);
                }

                var table = _propertyInfoCache[resourceType]["Table"];

                if (table.GetValue(resource) == null)
                {
                    table.SetValue(resource, plural.ToLower());
                }

                GetPropertyInfo(resourceType, "ServiceProvider")?.SetValue(resource, httpContext.RequestServices);

                GetPropertyInfo(resourceType, "Logger")?.SetValue(resource,
                    httpContext.RequestServices.GetRequiredService(typeof(ILogger<>)
                        .MakeGenericType(resourceType))
                );


                GetPropertyInfo(resourceType, "ModelState")?.SetValue(resource, modelState);

                GetPropertyInfo(resourceType, "Request")?.SetValue(resource, httpContext.Request);
                GetPropertyInfo(resourceType, "Response")?.SetValue(resource, httpContext.Response);
                GetPropertyInfo(resourceType, "User")?.SetValue(resource, httpContext.User);

                if (_configurations.IsDevelopment)
                {
                    GetPropertyInfo(resourceType, "ConnectionFactory")?.SetValue(resource,
                        () => new StackExchange.Profiling.Data.ProfiledDbConnection(
                            _configurations.ConnectionFactory(),
                            MiniProfiler.Current)
                    );
                }
                else
                {
                    GetPropertyInfo(resourceType, "ConnectionFactory")?.SetValue(resource,
                        _configurations.ConnectionFactory);
                }

                GetPropertyInfo(resourceType, "TrinityNotifications")?.SetValue(resource,
                    httpContext.RequestServices.GetRequiredService<TrinityNotificationsManager>()
                );

                GetPropertyInfo(resourceType, "TrinityPushNotifications")?.SetValue(resource,
                    httpContext.RequestServices.GetRequiredService<TrinityPushNotificationsManager>()
                );

                switch (request.Method)
                {
                    case "GET" or "PUT" when
                        (string?)request.RouteValues["view"] == "edit":
                        GetPropertyInfo(resourceType, "IsUpdateRequest")?.SetValue(resource, true);
                        break;
                    case "GET" or "POST" when
                        (string?)request.RouteValues["view"] == "create":
                        GetPropertyInfo(resourceType, "IsCreateRequest")?.SetValue(resource, true);
                        break;
                }


                return resource;
            });


            Resources.Add(plural.ToLower(), resourceType);
        }
    }


    /// <summary>
    /// Load and prepare the found Trinity Plugins assemblies.
    /// </summary>
    /// <param name="app"><see cref="WebApplication"/></param>
    public void LoadPlugins(WebApplication app)
    {
        var trinityPluginType = typeof(TrinityPlugin);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => trinityPluginType.IsAssignableFrom(p) && !p.IsAbstract);


        foreach (var pluginType in types)
        {
            var plugin = (TrinityPlugin)Activator.CreateInstance(pluginType)!;

            var name = pluginType.Name.Titleize().Replace(' ', '-').ToLower();
            var baseName = pluginType.Namespace + ".wwwroot";
            var path = $"/{_configurations.Prefix}/trinity/plugins/{name}";

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new EmbeddedFileProvider(
                    pluginType.Assembly,
                    baseName
                ),
                RequestPath = path
            });

            _configurations.ExtraJavaScriptSources.AddRange(plugin.GetScriptSources()
                .Select(x => x.StartsWith("http") ? x : $"{path}/dist{x}")
            );
            _configurations.ExtraStyleSources.AddRange(plugin.GetStyleSources()
                .Select(x => x.StartsWith("http") ? x : $"{path}/dist{x}")
            );

            // Plugins.Add(plugin);
        }
    }

    /// <summary>
    /// Dynamically inject required services in the Notification
    /// </summary>
    /// <param name="serviceProvider"><see cref="IServiceProvider"/></param>
    /// <param name="notification"><see cref="TrinityNotification"/></param>
    public void SetupNotification(IServiceProvider serviceProvider, TrinityNotification notification)
    {
        var httpContextAccessor = serviceProvider.GetRequiredService<IHttpContextAccessor>();
        var httpContext = httpContextAccessor.HttpContext!;
        var modelState = httpContext.RequestServices.GetRequiredService<IActionContextAccessor>()
            .ActionContext!.ModelState;

        var notificationType = notification.GetType();

        GetPropertyInfo(notificationType, "Configurations")?.SetValue(notification, _configurations);
        GetPropertyInfo(notificationType, "ServiceProvider")?.SetValue(notification, httpContext.RequestServices);
        GetPropertyInfo(notificationType, "Request")?.SetValue(notification, httpContext.Request);
        GetPropertyInfo(notificationType, "Response")?.SetValue(notification, httpContext.Response);
        GetPropertyInfo(notificationType, "User")?.SetValue(notification, httpContext.User);
        GetPropertyInfo(notificationType, "Logger")?.SetValue(notification, httpContext.RequestServices
            .GetRequiredService(typeof(ILogger<>)
                .MakeGenericType(notificationType))
        );

        GetPropertyInfo(notificationType, "Localizer")?.SetValue(notification, _trinityLocalizer);
        GetPropertyInfo(notificationType, "ModelState")?.SetValue(notification, modelState);
        GetPropertyInfo(notificationType, "TrinityNotifications")?.SetValue(notification,
            httpContext.RequestServices.GetRequiredService<TrinityNotificationsManager>()
        );
        GetPropertyInfo(notificationType, "TrinityPushNotifications")?.SetValue(notification,
            httpContext.RequestServices.GetRequiredService<TrinityPushNotificationsManager>()
        );
    }
}