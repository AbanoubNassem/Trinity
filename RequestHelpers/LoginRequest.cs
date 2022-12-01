using System.ComponentModel.DataAnnotations;

namespace AbanoubNassem.Trinity.RequestHelpers;

public class LoginRequest
{
    public LoginRequest(string email, string password, bool remember)
    {
        Email = email;
        Password = password;
        Remember = remember;
    }

    [Required]
    [EmailAddress]
    [StringLength(255, MinimumLength = 8)]
    public string Email { get; set; }

    [Required]
    [StringLength(255, MinimumLength = 8)]
    public string Password { get; set; }

    public bool Remember { get; set; }
}