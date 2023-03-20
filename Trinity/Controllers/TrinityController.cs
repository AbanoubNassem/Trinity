using AbanoubNassem.Trinity.Extensions;
using InertiaCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;

namespace AbanoubNassem.Trinity.Controllers;

[Authorize]
[AutoValidateAntiforgeryToken]
public abstract class TrinityController : Controller
{
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