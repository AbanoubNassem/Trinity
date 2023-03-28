using System.Security.Claims;

namespace AbanoubNassem.Trinity.Extensions;

/// <summary>
/// Add IsTrinityAdmin to the <see cref="ClaimsPrincipal" />.
/// </summary>
public static class ClaimsPrincipalExtensions
{
    /// <summary>
    /// Check whether the use is an Admin or not.
    /// </summary>
    /// <param name="user">an instance of <see cref="ClaimsPrincipal"/>.</param>
    /// <returns>Boolean value indicating if the User is admin.</returns>
    public static bool IsTrinityAdmin(this ClaimsPrincipal user)
    {
        return user.IsInRole("admin") || user.IsInRole("administrator");
    }
}