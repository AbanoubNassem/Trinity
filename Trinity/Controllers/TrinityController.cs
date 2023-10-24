using System.Security.Claims;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.Pages;
using AbanoubNassem.Trinity.Providers;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Resources;
using InertiaCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.DependencyInjection;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Controllers;

/// <summary>
/// Base controller for the Trinity application.
/// </summary>
/// <remarks>
/// This controller provides common functionality for all controllers in the Trinity application, including authorization and antiforgery token validation.
/// </remarks>
[Authorize]
[AutoValidateAntiforgeryToken]
public abstract class TrinityController : Controller
{
    private TrinityConfigurations? _configurations;

    /// <summary>
    /// A reference <see cref="TrinityConfigurations"/> object to use.
    /// </summary>
    protected TrinityConfigurations Configurations => _configurations ??=
        HttpContext.RequestServices.GetRequiredService<TrinityConfigurations>();

    private TrinityManager? _trinityManager;

    /// <summary>
    /// A reference <see cref="TrinityManager"/> object to use.
    /// </summary>
    protected TrinityManager TrinityManager => _trinityManager ??=
        HttpContext.RequestServices.GetRequiredService<TrinityManager>();

    private TrinityLocalizer? _localizer;

    /// <summary>
    /// A reference <see cref="TrinityLocalizer"/> object to use.
    /// </summary>
    protected TrinityLocalizer Localizer => _localizer ??=
        HttpContext.RequestServices.GetRequiredService<TrinityLocalizer>();

    private TrinityNotificationsManager? _trinityNotificationsManager;

    /// <summary>
    /// A reference <see cref="TrinityNotificationsManager"/> object to use.
    /// </summary>
    protected TrinityNotificationsManager TrinityNotificationsManager => _trinityNotificationsManager ??=
        HttpContext.RequestServices.GetRequiredService<TrinityNotificationsManager>();

    /// <summary>
    /// Returns an HTTP 401 Unauthorized response with an optional error message, suitable for use in an Inertia request.
    /// </summary>
    /// <returns>The HTTP response to return.</returns>
    protected IActionResult UnAuthorised()
    {
        return Request.IsInertiaRequest()
            ? Inertia.Render("Error", new
            {
                statusCode = StatusCodes.Status401Unauthorized,
                reasonPhrase = ReasonPhrases.GetReasonPhrase(StatusCodes.Status401Unauthorized)
            })
            : Unauthorized();
    }

    /// <summary>
    /// Retrieves an <see cref="ITrinityResource"/> object based on the specified resource name.
    /// </summary>
    /// <param name="resourceName">The name of the resource to retrieve.</param>
    /// <returns>An ITrinityResource object if found; otherwise, null.</returns>
    protected async Task<ITrinityResource?> GetResource(string resourceName)
    {
        // Check if the resource exists in the TrinityManager.Resources dictionary
        if (!TrinityManager.Resources.TryGetValue(resourceName, out var resourceValue))
        {
            return null;
        }

        // Get the resource from the HttpContext RequestServices and cast it to ITrinityResource
        var resource = (ITrinityResource)HttpContext.RequestServices.GetRequiredService(resourceValue);

        // Perform any necessary setup for the resource
        await resource.Setup();

        return resource;
    }

    /// <summary>
    /// Creates a TrinityResponse object based on the current request and user information.
    /// </summary>
    /// <returns>The created TrinityResponse object.</returns>
    protected async Task<TrinityResponse> CreateResponse()
    {
        var response = new TrinityResponse();
        // If the request is an Inertia request, return the response without further processing
        if (Request.IsInertiaRequest()) return response;

        // Set the user information in the response
        response.User = new
        {
            id = User.FindFirstValue(ClaimTypes.NameIdentifier)!,
            name = User.FindFirstValue(ClaimTypes.Name)!,
            role = User.FindFirstValue(ClaimTypes.Role)!,
            avatar = User.FindFirstValue("avatar")!,
        };

        // Set the configurations in the response
        response.Configs = Configurations;

        // Get the resources from the HttpContext RequestServices and filter them based on CanView property
        response.Resources = HttpContext.RequestServices
            .GetRequiredServices(TrinityManager.Resources.Values)
            .Where(x => ((ITrinityResource)x).CanView);

        // Get the pages from the HttpContext RequestServices and filter them based on CanView property
        response.Pages = HttpContext.RequestServices
            .GetRequiredServices(TrinityManager.Pages.Values)
            .Where(x => ((TrinityPage)x).CanView)
            .ToDictionary(x => ((TrinityPage)x).Slug, x => x);

        // Set the localized strings in the response
        response.Locale = Localizer.GetAllStrings().ToDictionary(x => x.Name, x => x.Value);

        // If the current culture is different from the fallback locale, set the fallback localized strings
        if (Thread.CurrentThread.CurrentCulture.TwoLetterISOLanguageName != Configurations.FallbackLocale)
        {
            response.FallbackLocale = Localizer.GetAllStrings(Configurations.FallbackLocale)
                .ToDictionary(x => x.Name, x => x.Value);
        }

        // Set the IsRtl property based on the current culture
        response.IsRtl = Thread.CurrentThread.CurrentCulture.TextInfo.IsRightToLeft;

        if (_configurations?.DatabaseNotifications != null)
        {
            response.DatabaseNotificationsCount = await _configurations.ConnectionFactory()
                .Query(_configurations.DatabaseNotifications.NotificationsTable)
                .Select("*")
                .Where("user_id", User.FindFirstValue(ClaimTypes.NameIdentifier)!)
                .WhereNull("read_at")
                .CountAsync<int>();
        }

        return response;
    }
}