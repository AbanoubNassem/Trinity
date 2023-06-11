namespace AbanoubNassem.Trinity.Models;

/// <summary>
/// Defines an enumeration of badge severity types.
/// </summary>
public enum BadgeSeverityType : byte
{
    /// <summary>
    /// Indicates no severity.
    /// </summary>
    None,

    /// <summary>
    /// Indicates a success severity.
    /// </summary>
    Success,

    /// <summary>
    /// Indicates an info severity.
    /// </summary>
    Info,

    /// <summary>
    /// Indicates a warning severity.
    /// </summary>
    Warning,

    /// <summary>
    /// Indicates a danger severity.
    /// </summary>
    Danger
}

/// <summary>
/// Defines an enumeration of badge size types.
/// </summary>
public enum BadgeSizeType
{
    /// <summary>
    /// Indicates a normal size badge.
    /// </summary>
    Normal,

    /// <summary>
    /// Indicates a large size badge.
    /// </summary>
    Large,

    /// <summary>
    /// Indicates an extra large size badge.
    /// </summary>
    XLarge
}

/// <summary>
/// Represents a badge in the Trinity system.
/// </summary>
public class TrinityBadge
{
    /// <summary>
    /// Initializes a new instance of the <see cref="TrinityBadge"/> class.
    /// </summary>
    /// <param name="value">The value of the badge.</param>
    /// <param name="severity">The severity type of the badge, default is <see cref="BadgeSeverityType.None"/>.</param>
    /// <param name="size">The size type of the badge, default is <see cref="BadgeSizeType.Normal"/>.</param>
    public TrinityBadge(string value, BadgeSeverityType severity = BadgeSeverityType.None,
        BadgeSizeType size = BadgeSizeType.Normal)
    {
        Value = value;
        Severity = severity == BadgeSeverityType.None ? null : Enum.GetName(severity)?.ToLower();
        Size = Enum.GetName(size)?.ToLower();
    }

    /// <summary>
    /// Gets or sets the value of the badge.
    /// </summary>
    public string Value { get; set; }

    /// <summary>
    /// Gets or sets the severity of the badge. Null if severity is <see cref="BadgeSeverityType.None"/>.
    /// </summary>
    public string? Severity { get; set; }

    /// <summary>
    /// Gets or sets the size of the badge.
    /// </summary>
    public string? Size { get; set; }
}