using System.Security.Claims;

namespace AbanoubNassem.Trinity.Concerns;

public class LoginConcern
{
    public LoginConcern(string name, string email, string role)
    {
        Name = name;
        Email = email;
        Role = role;
    }

    public string Name { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }

    public string? Avatar { get; set; }
    public List<Claim> ExtraClaims { get; } = new();
}