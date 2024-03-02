using System.Security.Claims;
using AbanoubNassem.Trinity.Attributes;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Models;
using AbanoubNassem.Trinity.Pages;
using AbanoubNassem.Trinity.RequestHelpers;
using InertiaCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Controllers;

/// <summary>
/// 
/// </summary>
public sealed class TrinityAuthController : TrinityController
{
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
                Configs = Configurations,
                Locale = Localizer.GetAllStrings().ToDictionary(x => x.Name, x => x.Value),
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
            return Inertia.Render("Login", new { configs = Configurations, errors = BadRequest(ModelState) });
        }

        if (Configurations.AuthenticateUser == null)
        {
            throw new Exception(Localizer["auth_configurations"]);
        }

        TrinityUser? loggedIn;
        try
        {
            loggedIn =
                await Configurations.AuthenticateUser(HttpContext, loginRequest.Email, loginRequest.Password);

            if (loggedIn == null)
            {
                ModelState.AddModelError("login", Localizer["invalid_login_attempt"]);

                return Inertia.Render("Login", new { configs = Configurations, errors = BadRequest(ModelState) });
            }
        }
        catch (Exception ex)
        {
            ModelState.AddModelError("login", ex.Message);
            return Inertia.Render("Login", new { configs = Configurations, errors = BadRequest(ModelState) });
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

        return Inertia.Render("Login", new { Data = returnUrl ?? $"{Configurations.Prefix}/" });
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
            ? Inertia.Location($"{Configurations.Prefix}/login?returnUrl={Request.Headers.Referer}")
            : Redirect($"{Configurations.Prefix}/login?returnUrl={Request.Headers.Referer}");
    }
}