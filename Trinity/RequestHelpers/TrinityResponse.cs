using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Providers;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.RequestHelpers;

/// <summary>
/// Represents a response class for the Trinity application.
/// </summary>
public class TrinityResponse
{
    /// <summary>
    /// Gets or sets the Trinity configurations object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public TrinityConfigurations? Configs { get; set; }

    /// <summary>
    /// Gets or sets the collection of resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public IEnumerable<object>? Resources { get; set; }

    /// <summary>
    /// Gets or sets the collection of pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public Dictionary<string, object>? Pages { get; set; }

    /// <summary>
    /// Gets or sets the current resource object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public object? Resource { get; set; }

    /// <summary>
    /// Gets or sets the current page object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public object? Page { get; set; }

    /// <summary>
    /// Gets or sets the data object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public object? Data { get; set; }

    /// <summary>
    /// Gets or sets the collection of error messages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public BadRequestObjectResult? Errors { get; set; }

    /// <summary>
    /// Gets or sets the collection of notifications.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public List<object>? Notifications { get; set; }
    
    /// <summary>
    /// Gets the database notifications count.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public int? DatabaseNotificationsCount { get; set; }

    /// <summary>
    /// Gets or sets the current locale strings <see cref="TrinityLocalizer.GetAllStrings(string)"/>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public Dictionary<string, string>? Locale { get; set; }
    
    /// <summary>
    /// Gets or sets the fallback locale strings/>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public Dictionary<string, string>? FallbackLocale { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether the text is right-to-left (RTL).
    /// </summary>
    public bool IsRtl { get; set; }

    /// <summary>
    /// Gets or sets the current logged-in user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public object? User { get; set; }
    

}