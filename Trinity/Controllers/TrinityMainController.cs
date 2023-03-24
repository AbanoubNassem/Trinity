using System.Security.Claims;
using AbanoubNassem.Trinity.Attributes;
using AbanoubNassem.Trinity.Components.TrinityField;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.Pages;
using AbanoubNassem.Trinity.Providers;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Resources;
using AbanoubNassem.Trinity.Utilities;
using InertiaCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace AbanoubNassem.Trinity.Controllers;

public sealed class TrinityMainController : TrinityController
{
    private readonly TrinityConfigurations _configurations;
    private readonly TrinityManager _trinityManager;
    private readonly TrinityLocalizer _localizer;

    public TrinityMainController(TrinityConfigurations configurations, TrinityManager trinityManager,
        TrinityLocalizer localizer)
    {
        _configurations = configurations;
        _trinityManager = trinityManager;
        _localizer = localizer;
    }

    [HttpGet]
    public async Task<IActionResult> Index()
    {
        return await RenderPage("dashboard");
    }

    [AllowAnonymous]
    [AnonymousOnly]
    [HttpGet]
    [Route("/login")]
    public IActionResult Login()
    {
        return Inertia.Render("Login",
            new
            {
                configs = _configurations, Locale = _localizer.GetAllStrings().ToDictionary(x => x.Name, x => x.Value)
            });
    }

    [AllowAnonymous]
    [AnonymousOnly]
    [HttpPost]
    [Route("/login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest, [FromQuery] string? returnUrl = null)
    {
        if (!ModelState.IsValid)
        {
            return Inertia.Render("Login", new { configs = _configurations, errors = BadRequest(ModelState) });
        }

        if (_configurations.AuthenticateUser == null)
        {
            throw new Exception(_localizer["auth_configurations"]);
        }

        var loggedIn = await _configurations.AuthenticateUser(HttpContext, loginRequest.Email, loginRequest.Password);

        if (loggedIn == null)
        {
            ModelState.AddModelError(string.Empty, _localizer["invalid_login_attempt"]);

            return Inertia.Render("Login", new { configs = _configurations, errors = BadRequest(ModelState) });
        }

        var claims = new List<Claim>
        {
            new(ClaimTypes.Email, loggedIn.Email),
            new(ClaimTypes.Name, loggedIn.Name),
            new(ClaimTypes.Role, loggedIn.Role),
        };
        claims.AddRange(loggedIn.ExtraClaims);

        var claimsIdentity = new ClaimsIdentity(claims, "Trinity");

        var authProperties = new AuthenticationProperties
        {
            IsPersistent = loginRequest.Remember,
            
        };

        await HttpContext.SignInAsync(
            "Trinity",
            new ClaimsPrincipal(claimsIdentity),
            authProperties
        );

        return Inertia.Render("Login", new { Data = returnUrl ?? $"/{_configurations.Prefix}/" });
    }

    [HttpPost]
    [Route("/logout")]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync("Trinity");

        return HttpContext.IsInertiaRequest()
            ? Inertia.Location($"/{_configurations.Prefix}/login?returnUrl={Request.Headers.Referer}")
            : Redirect($"/{_configurations.Prefix}/login?returnUrl={Request.Headers.Referer}");
    }

    [HttpGet]
    [HttpPost]
    [HttpPut]
    [HttpDelete]
    [Route("/{name}/{view=index}/{id?}")]
    public async Task<IActionResult> HandleResource(string name, string view)
    {
        if (!_trinityManager.Resources.TryGetValue(name, out var resourceValue))
        {
            return NotFound(name);
        }

        var resourceObject = HttpContext.RequestServices.GetRequiredService(resourceValue);
        //to serialize the public properties of TrinityResource class not ITrinityResource the interface.
        var resource = (resourceObject as ITrinityResource)!;

        if (!resource.CanView)
            return UnAuthorised();

        await resource.Setup();

        var responseData = CreateResponse();

        responseData.Resource = resourceObject;


        switch (Request.Method)
        {
            case "GET" when view == "index":
                if (!resource.CanView) return UnAuthorised();

                responseData.Data = await resource.GetTableData();
                break;
            case "GET" when view == "create":
                if (!resource.CanCreate) return UnAuthorised();

                break;
            case "GET" when view == "edit":
                if (!resource.CanUpdate) return UnAuthorised();

                responseData.Data = await resource.GetEditData();
                if (responseData.Data == null)
                {
                    return NotFound();
                }

                break;
            case "GET" when view == "relationship":
                return await resource.GetRelationData();
            case "POST" when view == "create":
                if (!resource.CanCreate) return UnAuthorised();

                responseData.Data = await resource.Create();
                break;
            case "PUT" when view == "edit":
                if (!resource.CanUpdate) return UnAuthorised();

                responseData.Data = await resource.Update();
                break;
            case "DELETE" when view is "delete" or "index" or "edit":
                if (!resource.CanDelete) return UnAuthorised();

                responseData.Data = await resource.Delete();
                break;
        }

        responseData.Notifications = TrinityNotifications.Flush();
        return Inertia.Render(view, responseData);
    }

    [HttpPost]
    [Route("/upload/file")]
    public async Task<IActionResult> UploadFile(IFormFile? file, [FromForm] string resourceName,
        [FromForm] string fieldName)
    {
        if (!_trinityManager.Resources.TryGetValue(resourceName, out var resourceValue))
        {
            return NotFound(resourceName);
        }

        var resourceObject = HttpContext.RequestServices.GetRequiredService(resourceValue);
        var resource = (resourceObject as ITrinityResource)!;
        var field = resource.Fields[fieldName];

        if (field is not ICanUploadField uploadField) return UnprocessableEntity();

        if (file == null)
            return BadRequest(_localizer["no_file_selected"]);

        return Ok(new
        {
            data = await uploadField.Upload(file),
            notifications = TrinityNotifications.Flush(),
        });
    }

    [HttpPost]
    [Route("/delete/file")]
    public async Task<IActionResult> DeleteFile([FromBody] DeleteFileRequest request)
    {
        if (!_trinityManager.Resources.TryGetValue(request.ResourceName, out var resourceValue))
        {
            return await Task.FromResult<IActionResult>(NotFound(request.ResourceName));
        }

        var resourceObject = HttpContext.RequestServices.GetRequiredService(resourceValue);
        var resource = (resourceObject as ITrinityResource)!;
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
                TrinityNotifications.NotifyError(_localizer["nothing_to_delete_revert"]);
                return await Task.FromResult<IActionResult>(BadRequest(_localizer["nothing_to_delete_revert"]));
            }

            Parallel.ForEach(filesToDelete, System.IO.File.Delete);
        }


        return await Task.FromResult<IActionResult>(Ok(new
        {
            data,
            notifications = TrinityNotifications.Flush(),
        }));
    }

    [HttpGet]
    [Route("/pages/{slug}/")]
    public async Task<IActionResult> RenderPage(string slug)
    {
        if (!_trinityManager.Pages.TryGetValue(slug, out var pageV)) return NotFound();

        var pageObj = HttpContext.RequestServices.GetRequiredService(pageV);
        var page = (TrinityPage)pageObj;

        if (!page.CanView)
            return UnAuthorised();

        await page.Setup();

        var response = CreateResponse();
        response.Page = pageObj;

        response.Data = page.GetData();

        return Inertia.Render(page.PageView, response);
    }

    private TrinityResponse CreateResponse()
    {
        var response = new TrinityResponse();
        if (Request.IsInertiaRequest()) return response;


        response.Configs = _configurations;
        response.Resources = HttpContext.RequestServices
            .GetRequiredServices(_trinityManager.Resources.Values)
            .Where(x => ((ITrinityResource)x).CanView);
        response.Pages = HttpContext.RequestServices
            .GetRequiredServices(_trinityManager.Pages.Values)
            .Where(x => ((TrinityPage)x).CanView)
            .ToDictionary(x => ((TrinityPage)x).Slug, x => x);
        response.Locale = _localizer.GetAllStrings().ToDictionary(x => x.Name, x => x.Value);
        response.IsRtl = Thread.CurrentThread.CurrentCulture.TextInfo.IsRightToLeft;
        return response;
    }
}