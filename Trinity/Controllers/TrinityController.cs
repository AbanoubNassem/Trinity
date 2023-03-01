using System.Security.Claims;
using AbanoubNassem.Trinity.Attributes;
using AbanoubNassem.Trinity.Components.TrinityField;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.Pages;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Resources;
using AbanoubNassem.Trinity.Utilities;
using InertiaCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

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
        var page = HttpContext.RequestServices.GetRequiredService(_trinityManager.Pages["dashboard"].Key);
        var dashboard = (TrinityPage)page;

        dashboard.Setup();

        var response = CreateResponse();

        response.Data = dashboard.Schema;

        return Inertia.Render("Home", response);
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

        var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

        var authProperties = new AuthenticationProperties
        {
            IsPersistent = loginRequest.Remember,
        };

        await HttpContext.SignInAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new ClaimsPrincipal(claimsIdentity),
            authProperties
        );

        return Inertia.Render("Login", new { Data = returnUrl ?? $"/{_configurations.Prefix}/" });
    }

    [HttpPost]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

        return HttpContext.IsInertiaRequest()
            ? Inertia.Location($"/{_configurations.Prefix}/login?returnUrl={Request.Headers.Referer}")
            : Redirect($"/{_configurations.Prefix}/login?returnUrl={Request.Headers.Referer}");
    }

    public async Task<IActionResult> Handle(string name, string view)
    {
        if (!_trinityManager.Resources.TryGetValue(name, out var resourceKv))
        {
            return NotFound(name);
        }

        var resourceObject = HttpContext.RequestServices.GetRequiredService(resourceKv.Key);
        //to serialize the public properties of TrinityResource class not ITrinityResource the interface.
        var resource = (resourceObject as TrinityResource)!;

        await resource.Setup();

        var responseData = CreateResponse();

        responseData.Resource = resourceObject;


        switch (Request.Method)
        {
            case "GET" when view == "index":
                responseData.Data = await resource.GetTableData();
                break;
            case "GET" when view == "edit":
                responseData.Data = await resource.GetEditData();
                if (responseData.Data == null)
                {
                    return NotFound();
                }

                break;
            case "GET" when view == "relationship":
                return await resource.GetRelationData();
            case "POST" when view == "create":
                responseData.Data = await resource.Create();
                break;
            case "PUT" when view == "edit":
                responseData.Data = await resource.Update();
                break;
            case "DELETE" when view is "delete" or "index" or "edit":
                responseData.Data = await resource.Delete();
                break;
        }

        responseData.Notifications = TrinityNotifications.Flush();
        return Inertia.Render(view, responseData);
    }

    [HttpPost]
    public async Task<IActionResult> UploadFile(IFormFile? file, [FromForm] string resourceName,
        [FromForm] string fieldName)
    {
        if (!_trinityManager.Resources.TryGetValue(resourceName, out var resourceKv))
        {
            return NotFound(resourceName);
        }

        var resourceObject = HttpContext.RequestServices.GetRequiredService(resourceKv.Key);
        var resource = (resourceObject as TrinityResource)!;
        var field = resource.Fields[fieldName];

        if (field is not ICanUploadField uploadField) return UnprocessableEntity();

        if (file == null)
            return BadRequest("file not selected");

        return Ok(new
        {
            data = await uploadField.Upload(file),
            notifications = TrinityNotifications.Flush(),
        });
    }

    [HttpPost]
    public async Task<IActionResult> DeleteFile([FromBody] DeleteFileRequest request)
    {
        if (!_trinityManager.Resources.TryGetValue(request.ResourceName, out var resourceKv))
        {
            return await Task.FromResult<IActionResult>(NotFound(request.ResourceName));
        }

        var resourceObject = HttpContext.RequestServices.GetRequiredService(resourceKv.Key);
        var resource = (resourceObject as TrinityResource)!;
        var field = resource.Fields[request.FieldName];

        if (field is not ICanUploadField) return await Task.FromResult<IActionResult>(UnprocessableEntity());

        dynamic? data = null;

        if (request.Reverting is true)
        {
            var basePath = Path.Combine("wwwroot", "trinity_temp");

            var filesToDelete = Directory.EnumerateFiles(basePath)
                .Where(file => Path.GetFileName(file).StartsWith(request.UniqueFileIdOrUrl))
                .ToArray();

            if (!filesToDelete.Any())
            {
                TrinityNotifications.NotifyError("Nothing to delete/revert!");
                return await Task.FromResult<IActionResult>(BadRequest("Nothing to delete/revert!"));
            }

            Parallel.ForEach(filesToDelete, System.IO.File.Delete);
        }


        return await Task.FromResult<IActionResult>(Ok(new
        {
            data,
            notifications = TrinityNotifications.Flush(),
        }));
    }


    public IActionResult RenderPage(string pageName)
    {
        if (!_trinityManager.Pages.TryGetValue(pageName, out var pageKv)) return NotFound();

        var pageObj = HttpContext.RequestServices.GetRequiredService(pageKv.Key);
        var page = (TrinityPage)pageObj;


        page.Setup();

        var response = CreateResponse();
        response.Page = pageObj;

        return Inertia.Render(pageName, response);
    }

    private TrinityResponse CreateResponse()
    {
        var response = new TrinityResponse();

        if (Request.IsInertiaRequest()) return response;

        response.Configs = _configurations;
        response.Resources = _trinityManager.Resources.Values.Select(x => x.Value);
        response.Pages = _trinityManager.Pages.ToDictionary(x => x.Key, v => v.Value.Value);

        return response;
    }
}