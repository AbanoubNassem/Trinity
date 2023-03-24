using System.Security.Claims;
using System.Text.Json.Serialization;

namespace AbanoubNassem.Trinity.Models;

public class TrinityUser
{
    public TrinityUser(string name, string email, string role)
    {
        Name = name;
        Email = email;
        Role = role;
    }

    public string Name { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }

    public string? Avatar { get; set; }
    [JsonIgnore] public IEnumerable<Claim> ExtraClaims { get; } = new List<Claim>();
}