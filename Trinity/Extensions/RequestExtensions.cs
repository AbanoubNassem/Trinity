using Microsoft.AspNetCore.Http;

namespace AbanoubNassem.Trinity.Extensions;

/// <summary>
/// Adds extra functionality to <see cref="HttpRequest" /> and <see cref="HttpContext" />.
/// </summary>
public static class RequestExtensions
{
    /// <summary>
    /// Check whether the request is coming form an Inertia app or not.
    /// </summary>
    /// <param name="request">The <see cref="HttpRequest" /> to add the check to.</param>
    /// <returns>A boolean value indicating whether the request is coming form an Inertia app or not.</returns>
    public static bool IsInertiaRequest(this HttpRequest request) =>
        bool.TryParse(request.Headers["X-Inertia"], out _);

    /// <summary>
    /// Check whether the request is coming form an Inertia app or not.
    /// </summary>
    /// <param name="context">The <see cref="HttpContext" /> to add the check to.</param>
    /// <returns>A boolean value indicating whether the request is coming form an Inertia app or not.</returns>
    public static bool IsInertiaRequest(this HttpContext context) => context.Request.IsInertiaRequest();
}