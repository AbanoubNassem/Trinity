using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Extensions;

public static class RequestExtensions
{
    public static bool IsInertiaRequest(this HttpRequest request) =>
        bool.TryParse(request.Headers["X-Inertia"], out _);

    public static bool IsInertiaRequest(this HttpContext context) => context.Request.IsInertiaRequest();

    public static bool IsInertiaRequest(this ActionContext context) => context.HttpContext.IsInertiaRequest();
}