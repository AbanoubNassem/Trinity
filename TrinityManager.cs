using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Resources;
using Humanizer;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity;

public class TrinityManager
{
    private readonly TrinityConfigurations _configurations;

    private readonly Dictionary<string, TrinityResource> _resources = new();

    public TrinityManager(TrinityConfigurations configurations)
    {
        _configurations = configurations;
        LoadResources();
    }

    private void LoadResources()
    {
        var type = typeof(TrinityResource);
        var types = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(s => s.GetTypes())
            .Where(p => type.IsAssignableFrom(p) && !p.IsAbstract);

        foreach (var resourceType in types)
        {
            var name = resourceType.Name[..^8].Titleize();
            var plural = name.Pluralize();
            
            var resource = (TrinityResource)Activator.CreateInstance(resourceType)!;

            resource.Label ??= name;
            
            resource.PluralLabel ??= plural;

            _resources.Add(plural, resource);
        }
    }

    public JsonResult ToJson()
    {
        return new JsonResult(_resources.Values);
    }

    public Dictionary<string, TrinityResource> Resources => _resources;
}