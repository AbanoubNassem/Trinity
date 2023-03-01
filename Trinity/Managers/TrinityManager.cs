using System.Reflection;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Pages;
using AbanoubNassem.Trinity.Resources;
using Humanizer;
using StackExchange.Profiling;

namespace AbanoubNassem.Trinity.Managers;

public class TrinityManager
{
    private const BindingFlags Flags = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public;
    private readonly TrinityConfigurations _configurations;
    private readonly Dictionary<string, object> _resources = new();
    private readonly Dictionary<string, Tuple<Type, Dictionary<string, PropertyInfo>>> _resourcesTypes = new();

    public TrinityManager(TrinityConfigurations configurations)
    {
        _configurations = configurations;
    }

    private readonly Dictionary<string, object> _pages = new();
    public Dictionary<string, object> Pages => _pages;

    public void LoadPages()
    {
        var trinityPageType = typeof(TrinityPage);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => trinityPageType.IsAssignableFrom(p) && !p.IsAbstract &&
                        p.Namespace != "AbanoubNassem.Trinity.Pages");


        foreach (var pageType in types)
        {
            var page = (TrinityPage)Activator.CreateInstance(pageType)!;

            pageType.GetProperty("Configurations")?.SetValue(page, _configurations);

            Pages.TryAdd(page.PageName.ToLower(), page);
        }

        Pages.TryAdd("dashboard", new DashboardPage { Configurations = _configurations });
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

            var properties = new Dictionary<string, PropertyInfo>();

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

            properties.Add("ServiceProvider",
                resourceType.GetProperty("ServiceProvider", Flags)!
            );

            properties.Add("Logger",
                resourceType.GetProperty("Logger", Flags)!
            );

            properties.Add("ModelState",
                resourceType.GetProperty("ModelState", Flags)!
            );

            properties.Add("Request",
                resourceType.GetProperty("Request", Flags)!
            );

            properties.Add("Response",
                resourceType.GetProperty("Response", Flags)!
            );

            if (_configurations.IsDevelopment)
            {
                resourceType.GetProperty("ConnectionFactory", Flags)!
                    .SetValue(resource,
                        () => new StackExchange.Profiling.Data.ProfiledDbConnection(_configurations.ConnectionFactory(),
                            MiniProfiler.Current));
            }
            else
            {
                resourceType.GetProperty("ConnectionFactory", Flags)!
                    .SetValue(resource, _configurations.ConnectionFactory);
            }

            _resources.TryAdd(plural.ToLower(), resource);
            _resourcesTypes.TryAdd(plural.ToLower(),
                new Tuple<Type, Dictionary<string, PropertyInfo>>(resourceType, properties));
        }
    }

    public Dictionary<string, object> Resources => _resources;

    public Dictionary<string, Tuple<Type, Dictionary<string, PropertyInfo>>> ResourcesTypes => _resourcesTypes;
}