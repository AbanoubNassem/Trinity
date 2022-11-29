using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.Resources;
using Humanizer;
using InertiaAdapter;
using InertiaAdapter.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Controllers;

public class TrinityController : Controller
{
    private readonly TrinityConfigurations _configurations;
    private readonly TrinityManager _trinityManager;


    public TrinityController(TrinityConfigurations configurations, TrinityManager trinityManager)
    {
        _configurations = configurations;
        _trinityManager = trinityManager;
    }

    public IActionResult Index()
    {
        return Inertia.Render("Home", new { configs = _configurations, _trinityManager.Resources });
    }

    public async Task<IActionResult> Handle(string name, string view, int? id)
    {
        var resourceName = name.Titleize();
        if (!_trinityManager.Resources.TryGetValue(resourceName, out var resourceObject))
        {
            return NotFound(name);
        }

        //to serialize the public properties of TrinityResource class not ITrinityResource the interface.
        var resource = (resourceObject as ITrinityResource)!;


        InjectServices(resourceName, resource);

        await resource.Setup();

        if (!Request.IsInertiaRequest())
        {
            return Inertia.Render(view, new
                {
                    configs = _configurations,
                    resources = _trinityManager.Resources,
                    resource = resourceObject,
                    paginator = await resource.GetIndexData(),
                    fields = resource.Fields
                }
            );
        }


        return Inertia.Render(view, new
        {
            resource = resourceObject,
            paginator = await resource.GetIndexData(),
            fields = resource.Fields
        });
    }

    private void InjectServices(string resourceName, ITrinityResource resource)
    {
        _trinityManager.ResourcesTypes[resourceName].Item2["ServiceProvider"]
            .SetValue(resource, HttpContext.RequestServices);


        _trinityManager.ResourcesTypes[resourceName].Item2["Logger"]
            .SetValue(resource,
                HttpContext.RequestServices.GetRequiredService(
                    typeof(ILogger<>).MakeGenericType(resource.GetType())
                )
            );

        _trinityManager.ResourcesTypes[resourceName].Item2["Request"].SetValue(resource, Request);
        _trinityManager.ResourcesTypes[resourceName].Item2["Response"].SetValue(resource, Response);
    }
}