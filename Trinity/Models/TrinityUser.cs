using System.Security.Claims;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Configurations;

namespace AbanoubNassem.Trinity.Models;

/// <summary>
/// The logged-in Trinity user.
/// </summary>
public record TrinityUser
{
    /// <summary>
    /// The TrinityUser that should be returned from <see cref="TrinityConfigurations.AuthenticateUser"/>.
    /// </summary>
    /// <param name="name">The name of the user.</param>
    /// <param name="email">The email of the user.</param>
    /// <param name="role">The role of the user.</param>
    /// <param name="avatar">The avatar of the user, if any.</param>
    /// <param name="extraClaims">Any extra claims to be added.</param>
    public TrinityUser(string name, string email, string role, string? avatar = null,
        IEnumerable<Claim>? extraClaims = null)
    {
        Name = name;
        Email = email;
        Role = role;
        Avatar = avatar;
        ExtraClaims = extraClaims ?? new List<Claim>();
    }

    /// <summary>
    /// The name of the user.
    /// </summary>
    public string Name { get; }

    /// <summary>
    /// The email of the user.
    /// </summary>
    public string Email { get; }

    /// <summary>
    /// The role of the user.
    /// </summary>
    public string Role { get; }

    /// <summary>
    /// The avatar of the user.
    /// </summary>
    public string? Avatar { get; }

    /// <summary>
    /// Any extra claims. 
    /// </summary>
    [JsonIgnore]
    public IEnumerable<Claim> ExtraClaims { get; }
}