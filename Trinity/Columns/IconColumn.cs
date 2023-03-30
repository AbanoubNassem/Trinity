using AbanoubNassem.Trinity.Components.TrinityColumn;

namespace AbanoubNassem.Trinity.Columns;

/// <summary>
/// Represents a column that displays icons.
/// </summary>
/// <typeparam name="T">The type of the value displayed in the column.</typeparam>
public class IconColumn<T> : TrinityColumn<IconColumn<T>, T>
{
    /// <inheritdoc />
    public IconColumn(string columnName) : base(columnName)
    {
        SetSize(SizeTypes.Lg);
    }

    /// <inheritdoc />
    public override string ComponentName => "IconColumn";

    /// <summary>
    /// Gets or sets the list of options for the column.
    /// </summary>
    public List<object>? Options { get; protected set; }

    /// <summary>
    /// Sets the list of options for the column with the specified values and icons.
    /// </summary>
    /// <param name="options">The list of options.</param>
    /// <returns>The current instance of the <see cref="IconColumn{T}"/> class.</returns>
    public IconColumn<T> SetOptions(params (T?, string)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                value = item.Item1,
                icon = item.Item2
            });
        }

        return this;
    }

    /// <summary>
    /// Sets the list of options for the column with the specified values, icons and colors.
    /// </summary>
    /// <param name="options">The list of options.</param>
    /// <returns>The current instance of the <see cref="IconColumn{T}"/> class.</returns>
    public IconColumn<T> SetOptions(params (T?, string, string)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                value = item.Item1,
                icon = item.Item2,
                color = item.Item3
            });
        }

        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the column is a boolean column.
    /// </summary>
    public bool IsBoolean { get; protected set; }

    /// <summary>
    /// Sets the column as a boolean column.
    /// </summary>
    /// <param name="isBoolean">A value indicating whether the column is a boolean column.</param>
    /// <returns>The current instance of the <see cref="IconColumn{T}"/> class.</returns>
    public IconColumn<T> SetAsBoolean(bool isBoolean = true)
    {
        IsBoolean = isBoolean;
        return this;
    }

    /// <summary>
    /// Gets or sets the value used for true in the boolean column.
    /// </summary>
    public T? TrueValue { get; protected set; }

    /// <summary>
    /// Sets the value used for true in the boolean column.
    /// </summary>
    /// <param name="value">The value used for true.</param>
    /// <returns>The current instance of the <see cref="IconColumn{T}"/> class.</returns>
    public IconColumn<T> SetTrueValue(T value)
    {
        TrueValue = value;
        return this;
    }

    /// <summary>
    /// Gets or sets the icon used for true in the boolean column.
    /// </summary>
    public string? TrueIcon { get; protected set; }

    /// <summary>
    /// Gets or sets the true color of the icon column.
    /// </summary>
    public string? TrueColor { get; protected set; }

    /// <summary>
    /// Sets the icon and color for the true value of the icon column.
    /// </summary>
    /// <param name="trueIcon">The icon for the true value.</param>
    /// <param name="trueColor">The color for the true value. Default is "green".</param>
    /// <returns>The current instance of the <see cref="IconColumn{T}"/> class.</returns>
    public IconColumn<T> SetTrueIcon(string trueIcon, string trueColor = "green")
    {
        TrueIcon = trueIcon;
        TrueColor = trueColor;
        return this;
    }

    /// <summary>
    /// Gets or sets the value used for false in the boolean column.
    /// </summary>
    public T? FalseValue { get; protected set; }

    /// <summary>
    /// Sets the value used for false in the boolean column.
    /// </summary>
    /// <param name="value">The value used for false.</param>
    /// <returns>The current instance of the <see cref="IconColumn{T}"/> class.</returns>
    public IconColumn<T> SetFalseValue(T value)
    {
        FalseValue = value;
        return this;
    }

    /// <summary>
    /// Gets or sets the icon used for false in the boolean column.
    /// </summary>
    public string? FalseIcon { get; protected set; }

    /// <summary>
    /// Gets or sets the color used for false in the boolean column.
    /// </summary>
    public string? FalseColor { get; protected set; }

    /// <summary>
    /// Sets the icon and color for the false value of the icon column.
    /// </summary>
    /// <param name="falseIcon">The icon for the false value.</param>
    /// <param name="falseColor">The color for the false value. Default is "red".</param>
    /// <returns>The current instance of the <see cref="IconColumn{T}"/> class.</returns>
    public IconColumn<T> SetFalseIcon(string falseIcon, string falseColor = "red")
    {
        FalseIcon = falseIcon;
        FalseColor = falseColor;
        return this;
    }
}

/// <inheritdoc />
public class IconColumn : IconColumn<string>
{
    /// <inheritdoc />
    public IconColumn(string columnName) : base(columnName)
    {
    }
}