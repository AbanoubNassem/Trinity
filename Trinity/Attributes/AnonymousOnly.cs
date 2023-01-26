using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Extensions;
using InertiaCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace AbanoubNassem.Trinity.Attributes;

public class AnonymousOnly : Attribute, IAuthorizationFilter

{
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        if (context.HttpContext.User.Identity is not { IsAuthenticated: true }) return;

        var configs =
            (TrinityConfigurations)context.HttpContext.RequestServices.GetService(typeof(TrinityConfigurations))!;

        context.Result = context.HttpContext.IsInertiaRequest()
            ? Inertia.Location($"/{configs.Prefix}/")
            : new RedirectResult($"/{configs.Prefix}/");
    }
}