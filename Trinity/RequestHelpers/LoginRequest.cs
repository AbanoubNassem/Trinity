using System.ComponentModel.DataAnnotations;

namespace AbanoubNassem.Trinity.RequestHelpers;

/// <summary>
/// Represents a request to log in to the Trinity application with a specific email and password.
/// </summary>
public class LoginRequest
{
    /// <summary>
    /// Initializes a new instance of the <see cref="LoginRequest"/> class with the specified email, password, and remember value.
    /// </summary>
    /// <param name="email">The email address to use for the login request.</param>
    /// <param name="password">The password to use for the login request.</param>
    /// <param name="remember">A value indicating whether the user's login should be remembered.</param>
    public LoginRequest(string email, string password, bool remember)
    {
        Email = email;
        Password = password;
        Remember = remember;
    }

    /// <summary>
    /// Gets or sets the email address associated with the login request.
    /// </summary>
    /// <value>The email address associated with the login request.</value>
    [Required]
    [EmailAddress]
    [StringLength(255, MinimumLength = 8)]
    public string Email { get; set; }

    /// <summary>
    /// Gets or sets the password associated with the login request.
    /// </summary>
    /// <value>The password associated with the login request.</value>
    [Required]
    [StringLength(255, MinimumLength = 8)]
    public string Password { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether the user's login should be remembered.
    /// </summary>
    /// <value>True if the user's login should be remembered; otherwise, false.</value>
    public bool Remember { get; set; }
}