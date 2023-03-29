using AbanoubNassem.Trinity.Extensions;
using InertiaCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;

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
}