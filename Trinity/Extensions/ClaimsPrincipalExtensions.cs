using System.Security.Claims;

namespace AbanoubNassem.Trinity.Extensions;

public static class ClaimsPrincipalExtensions
{
    public static bool IsAdmin(this ClaimsPrincipal user)
    {
        return user.IsInRole("admin") || user.IsInRole("administrator");
    }
}