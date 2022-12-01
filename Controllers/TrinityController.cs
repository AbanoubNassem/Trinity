using System.Security.Claims;
using AbanoubNassem.Trinity.Attributes;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Resources;
using Humanizer;
using InertiaAdapter;
using InertiaAdapter.Extensions;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Controllers;

[Authorize]
[AutoValidateAntiforgeryToken]
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

    [AllowAnonymous]
    [AnonymousOnly]
    [HttpGet]
    public IActionResult Login()
    {
        return Inertia.Render("Login", new { configs = _configurations });
    }

    [AllowAnonymous]
    [AnonymousOnly]
    [HttpPost]
    public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest, [FromQuery] string? returnUrl = null)
    {
        if (!ModelState.IsValid)
        {
            return Inertia.Render("Login", new { configs = _configurations, errors = BadRequest(ModelState) });
        }

        if (_configurations.AuthenticateUser == null)
        {
            throw new Exception("Trinity.Configurations.AuthenticateUser Must be configured!");
        }

        var loggedIn = await _configurations.AuthenticateUser(HttpContext, loginRequest.Email, loginRequest.Password);

        if (loggedIn == null)
        {
            ModelState.AddModelError(string.Empty, "Invalid login attempt.");

            return Inertia.Render("Login", new { configs = _configurations, errors = BadRequest(ModelState) });
        }

        var claims = new List<Claim>
        {
            new(ClaimTypes.Email, loggedIn.Email),
            new(ClaimTypes.Name, loggedIn.Name),
            new(ClaimTypes.Role, loggedIn.Role),
        };
        claims.AddRange(loggedIn.ExtraClaims);

        var claimsIdentity = new ClaimsIdentity(
            claims, CookieAuthenticationDefaults.AuthenticationScheme);

        var authProperties = new AuthenticationProperties
        {
            IsPersistent = loginRequest.Remember,
        };

        await HttpContext.SignInAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new ClaimsPrincipal(claimsIdentity),
            authProperties);


        return Inertia.Location(returnUrl ?? $"/{_configurations.Prefix}/");
    }
    
    [HttpPost]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

        return HttpContext.IsInertiaRequest()
            ? Inertia.Location($"/{_configurations.Prefix}/")
            : Redirect($"/{_configurations.Prefix}/");
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