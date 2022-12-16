using System.Reflection;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Resources;
using Humanizer;
using Microsoft.Extensions.Logging;
using StackExchange.Profiling;

namespace AbanoubNassem.Trinity.Managers;

public class TrinityManager
{
    private readonly TrinityConfigurations _configurations;
    private readonly Dictionary<string, object> _resources = new();
    private readonly Dictionary<string, Tuple<Type, Dictionary<string, PropertyInfo>>> _resourcesTypes = new();

    public TrinityManager(TrinityConfigurations configurations)
    {
        _configurations = configurations;
    }

    public void LoadResources(bool isDevelopment)
    {
        var trinityResourceType = typeof(TrinityResource);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => trinityResourceType.IsAssignableFrom(p) && !p.IsAbstract);

        const BindingFlags flags = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public;

        foreach (var resourceType in types)
        {
            var name = resourceType.Name.Replace("Resource", "").Titleize();
            var plural = name.Pluralize();

            var properties = new Dictionary<string, PropertyInfo>();

            var resource = (TrinityResource)Activator.CreateInstance(resourceType)!;
            

            if (resource.Label == null)
            {
                trinityResourceType.GetField("_label", flags)!
                    .SetValue(resource, plural);
            }
            
            if (resource.PluralLabel == null)
            {
                trinityResourceType.GetField("_pluralLabel", flags)!
                    .SetValue(resource, plural);
            }
            
            if (resource.Table == null)
            {
                trinityResourceType.GetField("_table", flags)!
                    .SetValue(resource, plural.ToLower());
            }

            resourceType.GetProperty("Configurations", flags)!
                .SetValue(resource, _configurations);

            properties.Add("ServiceProvider",
                resourceType.GetProperty("ServiceProvider", flags)!
            );

            properties.Add("Logger",
                resourceType.GetProperty("Logger", flags)!
            );

            properties.Add("Request",
                resourceType.GetProperty("Request", flags)!
            );

            properties.Add("Response",
                resourceType.GetProperty("Response", flags)!
            );

            if (isDevelopment)
            {
                resourceType.GetProperty("ConnectionFactory", flags)!
                    .SetValue(resource,
                        () => new StackExchange.Profiling.Data.ProfiledDbConnection(_configurations.ConnectionFactory(),
                            MiniProfiler.Current));
            }
            else
            {
                resourceType.GetProperty("ConnectionFactory", flags)!
                    .SetValue(resource, _configurations.ConnectionFactory);
            }

            _resources.Add(plural, resource);
            _resourcesTypes.Add(plural, new Tuple<Type, Dictionary<string, PropertyInfo>>(resourceType, properties));
        }
    }

    public Dictionary<string, object> Resources => _resources;

    public Dictionary<string, Tuple<Type, Dictionary<string, PropertyInfo>>> ResourcesTypes => _resourcesTypes;
}