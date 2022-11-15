using System.Dynamic;
using AbanoubNassem.Trinity.Configurations;
using Humanizer;
using InertiaAdapter;
using InertiaAdapter.Extensions;
using Microsoft.AspNetCore.Mvc;

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

    public IActionResult Handle(string resource, string view, int? id)
    {
        if (!_trinityManager.Resources.TryGetValue(resource.Titleize(), out var res))
        {
            return NotFound(resource);
        }

        dynamic json = new ExpandoObject();

        if (!Request.IsInertiaRequest())
        {
            json.configs = _configurations;
            json.resources = _trinityManager.Resources;
        }

        json.resource = res;
        return Inertia.Render(view, json);
    }
}