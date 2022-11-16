using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Resources;
using Humanizer;
using InertiaAdapter;
using InertiaAdapter.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

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
        if (!_trinityManager.Resources.TryGetValue(resourceName, out var resource))
        {
            return NotFound(name);
        }

        InjectServices(resourceName, resource);

        await resource.Setup();


        if (!Request.IsInertiaRequest())
        {
            return Inertia.Render(view, new
                {
                    configs = _configurations,
                    resources = _trinityManager.Resources,
                    resource,
                    data = await resource.GetIndexData()
                }
            );
        }


        return Inertia.Render(view, new
        {
            resource,
            data = await resource.GetIndexData()
        });
    }

    private void InjectServices(string resourceName, ITrinityResource resource)
    {
        _trinityManager.ResourcesTypes[resourceName].Item2["ServiceProvider"]
            .SetValue(resource, HttpContext.RequestServices);

        _trinityManager.ResourcesTypes[resourceName].Item2["Request"].SetValue(resource, Request);
        _trinityManager.ResourcesTypes[resourceName].Item2["Response"].SetValue(resource, Response);

        var dbCtx = HttpContext.RequestServices.GetRequiredService(_trinityManager.DbContextType);

        _trinityManager.ResourcesTypes[resourceName].Item2["DbContext"].SetValue(resource, dbCtx);

        _trinityManager.ResourcesTypes[resourceName].Item2["DbSet"]
            .SetValue(resource,
                _trinityManager.DbContextType
                    .GetProperty(resource.DbSetName ?? resource.PluralLabel!)
                    ?.GetValue(dbCtx)
            );
    }
}