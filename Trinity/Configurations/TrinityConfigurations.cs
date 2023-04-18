using System.Data.Common;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Models;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Http;
using StackExchange.Profiling;

namespace AbanoubNassem.Trinity.Configurations;

/// <summary>
/// Provides programmatic configuration for the Trinity framework.
/// </summary>
public class TrinityConfigurations
{
    /// <summary>
    /// Creates a new instance of <see cref="TrinityConfigurations"/>.
    /// </summary>
    /// <param name="isDevelopment">Whether the build is in development or production.</param>
    public TrinityConfigurations(bool isDevelopment)
    {
        IsDevelopment = isDevelopment;
    }

    /// <summary>
    /// A delegate to provide a way for Trinity to Authenticate a user.
    /// </summary>
    public delegate Task<TrinityUser?> Authenticate(HttpContext httpContext, string email, string password);

    /// <summary>
    /// Whether the build is in development or production.
    /// </summary>
    [JsonIgnore]
    public bool IsDevelopment { get; init; }

    /// <summary>
    /// A factory to create a new connection, to perform queries when needed.
    /// </summary>
    [JsonIgnore]
    public Func<DbConnection> ConnectionFactory { get; set; } = null!;

    /// <summary>
    /// An <see cref="Action{MiniProfilerOptions}"/> to configure the provided <see cref="MiniProfilerOptions"/>.
    /// </summary>
    [JsonIgnore]
    public Action<MiniProfilerOptions>? MiniProfilerConfigures { get; set; }

    /// <summary>
    /// A <see cref="Authenticate"/> to provide a way for Trinity to Authenticate a user.
    /// </summary>
    [JsonIgnore]
    public Authenticate? AuthenticateUser { get; set; }

    /// <summary>
    /// The prefix is used to prefix all the Trinity routes.
    /// </summary>
    public string Prefix { get; set; } = "admin";

    /// <summary>
    /// The website title.
    /// </summary>
    public string Title { get; set; } = "Trinity";

    /// <summary>
    /// The fallback locale.
    /// </summary>
    public string FallbackLocale { get; set; } = "en";

    /// <summary>
    /// The front-end request loading indicator.
    /// </summary>
    public ProgressConfigurations ProgressSettings { get; set; } = new();

    /// <summary>
    /// Define what is the Max pagination is allowed per resource.
    /// </summary>
    public int MaxPaginationPerPageCount { get; set; } = 250;

    /// <summary>
    /// Define a list of pagination options.
    /// </summary>
    public List<int> RowsPerPageOptions { get; set; } = new() { 10, 50, 150, 250 };

    /// <summary>
    /// Define your Brand white logo.
    /// </summary>
    public string? WhiteLogo { get; set; }

    /// <summary>
    /// Define your Brand dark logo.
    /// </summary>
    public string? DarkLogo { get; set; }

    /// <summary>
    /// Define your Brand FavIcon.
    /// </summary>
    public string? FavIcon { get; set; }

    /// <summary>
    ///  Define your Brand Footer.
    /// </summary>
    public HtmlString? Footer { get; set; }

    /// <summary>
    /// Register Extra CSS style sources to be included in the admin panel.
    /// </summary>
    public List<string> ExtraStyleSources { get; } = new()
    {
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    };

    /// <summary>
    /// Register Extra Javascript sources to be included in the admin panel.
    /// </summary>
    public List<string> ExtraJavaScriptSources { get; } = new();
}

/// <summary>
/// Provides configurations for the frontend loading indicator.
/// </summary>
public class ProgressConfigurations
{
    /// <summary>
    /// Define the delay before showing the indicator.
    /// </summary>
    public int Delay { get; set; } = 250;

    /// <summary>
    /// Define the loading indicator color , should be the Brand color.
    /// </summary>
    public string Color { get; set; } = "#4F46E5";

    /// <summary>
    /// Whether to show a loading a spinner or not.
    /// </summary>
    public bool ShowSpinner { get; set; } = true;
}