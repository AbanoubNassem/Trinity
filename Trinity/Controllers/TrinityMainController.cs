using System.Security.Claims;
using System.Text.Json;
using AbanoubNassem.Trinity.Attributes;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Components.TrinityAction;
using AbanoubNassem.Trinity.Components.TrinityField;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.Notifications;
using AbanoubNassem.Trinity.Pages;
using AbanoubNassem.Trinity.Providers;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Resources;
using Humanizer;
using InertiaCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace AbanoubNassem.Trinity.Controllers;

/// <summary>
/// Controller for the main pages of the application.
/// </summary>
/// <remarks>
/// Handles the rendering of the dashboard and login pages, as well as handling user authentication and authorization.
/// </remarks>
public sealed class TrinityMainController : TrinityController
{
    private readonly TrinityConfigurations _configurations;
    private readonly TrinityManager _trinityManager;
    private readonly TrinityLocalizer _localizer;
    private readonly TrinityNotifications _trinityNotifications;

    /// <summary>
    /// Initializes a new instance of the <see cref="TrinityMainController"/> class.
    /// </summary>
    /// <param name="configurations">The <see cref="TrinityConfigurations"/> object to use.</param>
    /// <param name="trinityManager">The <see cref="TrinityManager"/> object to use.</param>
    /// <param name="localizer">The <see cref="TrinityLocalizer"/> object to use.</param>
    /// <param name="trinityNotifications">The <see cref="TrinityNotifications"/> object to use.</param>
    public TrinityMainController(TrinityConfigurations configurations, TrinityManager trinityManager,
        TrinityLocalizer localizer, TrinityNotifications trinityNotifications)
    {
        _configurations = configurations;
        _trinityManager = trinityManager;
        _localizer = localizer;
        _trinityNotifications = trinityNotifications;
    }

    /// <summary>
    /// Renders the dashboard page.
    /// </summary>
    /// <returns>The rendered page as an <see cref="IActionResult"/>.</returns>
    [HttpGet]
    public async Task<IActionResult> Index()
    {
        return await RenderPage("dashboard");
    }

    /// <summary>
    /// Renders the login page.
    /// </summary>
    /// <returns>The rendered page as an <see cref="IActionResult"/>.</returns>
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

    /// <summary>
    /// Handles user login requests.
    /// </summary>
    /// <param name="loginRequest">The <see cref="LoginRequest"/> object containing the user's login information.</param>
    /// <param name="returnUrl">The URL to return the user to after logging in.</param>
    /// <returns>The rendered page as an <see cref="IActionResult"/>.</returns>
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
            new(ClaimTypes.NameIdentifier, loggedIn.Identifier),
            new(ClaimTypes.Email, loggedIn.Email),
            new(ClaimTypes.Name, loggedIn.Name),
            new(ClaimTypes.Role, loggedIn.Role),
            new("avatar", loggedIn.Avatar ?? ""),
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

    /// <summary>
    /// Logs out the current user.
    /// </summary>
    [HttpPost]
    [Route("/logout")]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync("Trinity");

        return HttpContext.IsInertiaRequest()
            ? Inertia.Location($"/{_configurations.Prefix}/login?returnUrl={Request.Headers.Referer}")
            : Redirect($"/{_configurations.Prefix}/login?returnUrl={Request.Headers.Referer}");
    }

    /// <summary>
    /// Handles the request for a resource based on HTTP method and view.
    /// </summary>
    /// <param name="name">The name of the resource to handle.</param>
    /// <param name="view">The view to handle (defaults to 'index').</param>
    [HttpGet]
    [HttpPost]
    [HttpPut]
    [HttpDelete]
    [Route("/{name}/{view=index}/{id?}")]
    public async Task<IActionResult> HandleResource(string name, string view)
    {
        var resource = await GetResource(name);

        if (resource == null) return NotFound();

        if (!resource.CanView)
            return UnAuthorised();

        var responseData = CreateResponse();

        responseData.Resource = resource;


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

        responseData.Notifications = _trinityNotifications.Flush();
        return Inertia.Render(view, responseData);
    }

    /// <summary>
    /// Handles file uploads for a resource.
    /// </summary>
    /// <param name="file">The file to upload.</param>
    /// <param name="resourceName">The name of the resource for which to upload a file.</param>
    /// <param name="fieldName">The name of the field on the resource for which to upload a file.</param>
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
            notifications = _trinityNotifications.Flush(),
        });
    }

    /// <summary>
    /// Deletes a file from a resource.
    /// </summary>
    /// <param name="request">The request containing information about the file to delete.</param>
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
                _trinityNotifications.NotifyError(_localizer["nothing_to_delete_revert"]);
                return await Task.FromResult<IActionResult>(BadRequest(_localizer["nothing_to_delete_revert"]));
            }

            Parallel.ForEach(filesToDelete, System.IO.File.Delete);
        }


        return await Task.FromResult<IActionResult>(Ok(new
        {
            data,
            notifications = _trinityNotifications.Flush(),
        }));
    }

    /// <summary>
    /// Renders a page based on the provided slug.
    /// </summary>
    /// <param name="slug">The slug of the page to render.</param>
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

    /// <summary>
    /// Handles an action on a resource.
    /// </summary>
    /// <param name="resourceName">The name of the resource on which to handle the action.</param>
    /// <param name="actionName">The name of the action to handle.</param>
    [HttpPost]
    [Route("/actions/{resourceName}/{actionName}")]
    public async Task<IActionResult> HandleAction(string resourceName, string actionName)
    {
        var resource = await GetResource(resourceName);

        if (resource == null) return NotFound();

        if (!resource.CanView)
            return UnAuthorised();

        var actionObj = resource.Actions.SingleOrDefault(x => ((ITrinityAction)x).ActionName == actionName) ??
                        resource.BulkActions.SingleOrDefault(x => ((ITrinityAction)x).ActionName == actionName);

        if (actionObj == null)
            return NotFound();

        var action = (ITrinityAction)actionObj;

        if (!action.Visible || action.Hidden)
            return UnAuthorised();

        var body = await Request.ReadFromJsonAsync<Dictionary<string, JsonElement>>() ??
                   new Dictionary<string, JsonElement>();

        var primaryKeys = body["primaryKeys"].Deserialize<List<string>>() ?? new List<string>();

        var validated = new Dictionary<string, object?>(0);

        if (action.Fields != null)
        {
            var form = body["form"].Deserialize<Dictionary<string, JsonElement>>() ??
                       new Dictionary<string, JsonElement>();

            validated = await resource.ValidateRequest(form, action.Fields);
        }

        if (validated == null)
        {
            return Ok(TrinityAction.Errors(_trinityNotifications.Flush(),
                ModelState.ToDictionary(k => k.Key.Camelize(),
                    v => v.Value?.Errors.FirstOrDefault()?.ErrorMessage ?? ""
                ))
            );
        }

        return Ok(await resource.HandleAction(action, validated, primaryKeys));
    }

    private async Task<ITrinityResource?> GetResource(string resourceName)
    {
        if (!_trinityManager.Resources.TryGetValue(resourceName, out var resourceValue))
        {
            return null;
        }

        var resource = (ITrinityResource)HttpContext.RequestServices.GetRequiredService(resourceValue);

        await resource.Setup();

        return resource;
    }

    private TrinityResponse CreateResponse()
    {
        var response = new TrinityResponse();

        if (Request.IsInertiaRequest()) return response;

        response.User = new
        {
            id = User.FindFirstValue(ClaimTypes.NameIdentifier)!,
            name = User.FindFirstValue(ClaimTypes.Name)!,
            role = User.FindFirstValue(ClaimTypes.Role)!,
            avatar = User.FindFirstValue("avatar")!,
        };

        response.Configs = _configurations;

        response.Resources = HttpContext.RequestServices
            .GetRequiredServices(_trinityManager.Resources.Values)
            .Where(x => ((ITrinityResource)x).CanView);

        response.Pages = HttpContext.RequestServices
            .GetRequiredServices(_trinityManager.Pages.Values)
            .Where(x => ((TrinityPage)x).CanView)
            .ToDictionary(x => ((TrinityPage)x).Slug, x => x);

        response.Locale = _localizer.GetAllStrings().ToDictionary(x => x.Name, x => x.Value);

        if (Thread.CurrentThread.CurrentCulture.TwoLetterISOLanguageName != _configurations.FallbackLocale)
        {
            response.FallbackLocale = _localizer.GetAllStrings(_configurations.FallbackLocale)
                .ToDictionary(x => x.Name, x => x.Value);
        }

        response.IsRtl = Thread.CurrentThread.CurrentCulture.TextInfo.IsRightToLeft;

        return response;
    }
}