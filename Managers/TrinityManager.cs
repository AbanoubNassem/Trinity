using System.Reflection;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Resources;
using Humanizer;

namespace AbanoubNassem.Trinity.Managers;

public class TrinityManager
{
    private readonly TrinityConfigurations _configurations;

    private readonly Dictionary<string, object> _resources = new();
    private readonly Dictionary<string, Tuple<Type, Dictionary<string, PropertyInfo>>> _resourcesTypes = new();

    public TrinityManager(TrinityConfigurations configurations)
    {
        _configurations = configurations;
        LoadResources();
    }

    private void LoadResources()
    {
        var type = typeof(ITrinityResource);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => type.IsAssignableFrom(p) && !p.IsAbstract);

        const BindingFlags flags = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public;

        foreach (var resourceType in types)
        {
            var name = resourceType.Name[..^8].Titleize();
            var plural = name.Pluralize();

            var properties = new Dictionary<string, PropertyInfo>();

            var resource = (ITrinityResource)Activator.CreateInstance(resourceType)!;


            resource.Label ??= name;

            resource.PluralLabel ??= plural;

            if (resource.Table == null)
            {
                resourceType.GetProperty("Table", flags)!
                    .SetValue(resource, plural.ToLower());
            }

            properties.Add("ServiceProvider",
                resourceType.GetProperty("ServiceProvider", flags)!
            );

            properties.Add("Request",
                resourceType.GetProperty("Request", flags)!
            );

            properties.Add("Response",
                resourceType.GetProperty("Response", flags)!
            );

            resourceType.GetProperty("ConnectionFactory", flags)!
                .SetValue(resource, _configurations.ConnectionFactory);

            _resources.Add(plural, resource);
            _resourcesTypes.Add(plural, new Tuple<Type, Dictionary<string, PropertyInfo>>(resourceType, properties));
        }
    }

    public Dictionary<string, object> Resources => _resources;

    public Dictionary<string, Tuple<Type, Dictionary<string, PropertyInfo>>> ResourcesTypes => _resourcesTypes;
}