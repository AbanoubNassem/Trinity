using AbanoubNassem.Trinity.Components.TrinityColumn;

namespace AbanoubNassem.Trinity.Columns;

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
/// Represents a column of badge components.
/// </summary>
/// <typeparam name="T">The type of the values stored in the column.</typeparam>
public class BadgeColumn<T> : TrinityColumn<BadgeColumn<T>, string>
{
    /// <inheritdoc />
    public BadgeColumn(string columnName) : base(columnName)
    {
        Size = "normal";
    }

    /// <inheritdoc />
    public override string ComponentName => "BadgeColumn";

    /// <summary>
    /// Gets or sets the list of options for the badge column.
    /// </summary>
    public List<object>? Options { get; protected set; }

    /// <summary>
    /// Sets the options for the badge column.
    /// </summary>
    /// <param name="options">A collection of option values and their corresponding severity types.</param>
    /// <example> SetOptions( ("G", BadgeSeverityType.Info) )</example>
    /// <returns>This <see cref="BadgeColumn{T}"/> instance.</returns>
    public BadgeColumn<T> SetOptions(params (T?, BadgeSeverityType)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                value = item.Item1,
                severity = item.Item2 == BadgeSeverityType.None ? null : Enum.GetName(item.Item2)?.ToLower(),
            });
        }

        return this;
    }

    /// <summary>
    /// Sets the options for the badge column.
    /// </summary>
    /// <param name="options">A collection of option values, their corresponding severity types, and their icons.</param>
    /// <example> SetOptions( ("G", BadgeSeverityType.Info, "pi pi-eraser") )</example>
    /// <returns>This <see cref="BadgeColumn{T}"/> instance.</returns>
    public BadgeColumn<T> SetOptions(params (T?, BadgeSeverityType, string?)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                value = item.Item1,
                severity = item.Item2 == BadgeSeverityType.None ? null : Enum.GetName(item.Item2)?.ToLower(),
                icon = item.Item3,
            });
        }

        return this;
    }

    /// <summary>
    /// Sets the size of the badge column.
    /// </summary>
    /// <param name="size">The size of the badge column.</param>
    /// <returns>This <see cref="BadgeColumn{T}"/> instance.</returns>
    public BadgeColumn<T> SetSize(BadgeSizeType size)
    {
        Size = Enum.GetName(size)?.ToLower() ?? "normal";
        return this;
    }
}

/// <inheritdoc />
public class BadgeColumn : BadgeColumn<string>
{
    /// <inheritdoc />
    public BadgeColumn(string columnName) : base(columnName)
    {
    }
}