using AbanoubNassem.Trinity.Components.TrinityAction;

namespace AbanoubNassem.Trinity.Models;

/// <summary>
/// Represents data for Trinity notifications.
/// </summary>
public class TrinityNotificationData
{
    /// <summary>
    /// Gets or sets the title of the notification.
    /// </summary>
    public string Title { get; set; } = null!;

    /// <summary>
    /// Gets or sets the body text of the notification.
    /// </summary>
    public string Body { get; set; } = null!;

    /// <summary>
    /// Gets or sets the optional color for the notification body.
    /// </summary>
    public string? BodyColor { get; set; }

    /// <summary>
    /// Gets or sets the optional icon for the notification.
    /// </summary>
    public string? Icon { get; set; }

    /// <summary>
    /// Gets or sets the optional color for the notification icon.
    /// </summary>
    public string? IconColor { get; set; }

    /// <summary>
    /// Gets or sets the optional image for the notification.
    /// </summary>
    public string? Image { get; set; }

    /// <summary>
    /// Gets or sets the optional action associated with the notification.
    /// </summary>
    public TrinityAction? Action { get; set; }
}
