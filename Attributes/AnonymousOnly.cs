using AbanoubNassem.Trinity.Configurations;
using InertiaAdapter;
using InertiaAdapter.Extensions;
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

        context.Result = context.HttpContext.Request.IsInertiaRequest()
            ? Inertia.Location($"/{configs.Prefix}/")
            : new RedirectResult($"/{configs.Prefix}/");
    }
}