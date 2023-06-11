using AbanoubNassem.Trinity.Components.TrinityColumn;
using AbanoubNassem.Trinity.Models;

namespace AbanoubNassem.Trinity.Columns;

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
    /// <remarks> SetOptions( (columnValue, LabelToDisplay) )</remarks>
    /// <example> SetOptions( ("draft", "Draft") )</example>
    /// <returns>This <see cref="BadgeColumn{T}"/> instance.</returns>
    public BadgeColumn<T> SetOptions(params (T?, string)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                key = item.Item1,
                value = item.Item2,
            });
        }

        return this;
    }

    /// <summary>
    /// Sets the options for the badge column.
    /// </summary>
    /// <param name="options">A collection of option values and their corresponding severity types.</param>
    /// <remarks> SetOptions( (columnValue, LabelToDisplay, Severity) )</remarks>
    /// <example> SetOptions( ("draft", "Draft", BadgeSeverityType.Info) )</example>
    /// <returns>This <see cref="BadgeColumn{T}"/> instance.</returns>
    public BadgeColumn<T> SetOptions(params (T?, string, BadgeSeverityType)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                key = item.Item1,
                value = item.Item2,
                severity = item.Item3 == BadgeSeverityType.None ? null : Enum.GetName(item.Item3)?.ToLower(),
            });
        }

        return this;
    }

    /// <summary>
    /// Sets the options for the badge column.
    /// </summary>
    /// <param name="options">A collection of option values, their corresponding severity types, and their icons.</param>
    /// <remarks> SetOptions( (columnValue, LabelToDisplay, Severity, Icon) )</remarks>
    /// <example> SetOptions( ("draft", "Draft", BadgeSeverityType.Info, "pi pi-eraser") )</example>
    /// <returns>This <see cref="BadgeColumn{T}"/> instance.</returns>
    public BadgeColumn<T> SetOptions(params (T?, string, BadgeSeverityType, string?)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                key = item.Item1,
                value = item.Item2,
                severity = item.Item3 == BadgeSeverityType.None ? null : Enum.GetName(item.Item3)?.ToLower(),
                icon = item.Item4,
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