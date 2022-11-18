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

    public TrinityManager(TrinityConfigurations configurations, Type dbContextType)
    {
        _configurations = configurations;
        DbContextType = dbContextType;
        LoadResources();
    }

    private void LoadResources()
    {
        var type = typeof(ITrinityResource);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => type.IsAssignableFrom(p) && !p.IsAbstract);


        foreach (var resourceType in types)
        {
            var name = resourceType.Name[..^8].Titleize();
            var plural = name.Pluralize();

            var properties = new Dictionary<string, PropertyInfo>();

            var resource = (ITrinityResource)Activator.CreateInstance(resourceType)!;

            resource.Label ??= name;

            resource.PluralLabel ??= plural;


            properties.Add("ServiceProvider",
                resourceType.GetProperty("ServiceProvider", BindingFlags.NonPublic | BindingFlags.Instance)!
            );
            
            properties.Add("Request",
                resourceType.GetProperty("Request", BindingFlags.NonPublic | BindingFlags.Instance)!
            );
            
            properties.Add("Response",
                resourceType.GetProperty("Response", BindingFlags.NonPublic | BindingFlags.Instance)!
            );
            
            properties.Add("DbContext",
                resourceType.GetProperty("DbContext", BindingFlags.NonPublic | BindingFlags.Instance)!
            );

            properties.Add("DbSet",
                resourceType.GetProperty("DbSet", BindingFlags.NonPublic | BindingFlags.Instance)!
            );

            _resources.Add(plural, resource);
            _resourcesTypes.Add(plural, new Tuple<Type, Dictionary<string, PropertyInfo>>(resourceType, properties));
        }
    }

    public Dictionary<string, object> Resources => _resources;

    public Dictionary<string, Tuple<Type, Dictionary<string, PropertyInfo>>> ResourcesTypes => _resourcesTypes;

    public Type DbContextType { get; }
}