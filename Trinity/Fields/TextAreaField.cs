using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a text area input field in Trinity.
/// </summary>
public class TextAreaField : TrinityField<TextAreaField, string?>
{
    /// <inheritdoc />
    public override string ComponentName => "TextAreaField";

    /// <inheritdoc />
    public TextAreaField(string columnName) : base(columnName)
    {
    }

    /// <summary>
    /// Gets or sets a value indicating whether the text area should auto-resize based on the content.
    /// </summary>
    public bool AutoResize { get; protected set; }

    /// <summary>
    /// Gets or sets the number of rows to display in the text area.
    /// </summary>
    public int Rows { get; protected set; } = 5;

    /// <summary>
    /// Gets or sets the number of columns to display in the text area.
    /// </summary>
    public int Cols { get; protected set; } = 30;

    /// <summary>
    /// Sets the properties of the text area.
    /// </summary>
    /// <param name="autoResize">A value indicating whether the text area should auto-resize based on the content.</param>
    /// <param name="rows">The number of rows to display in the text area.</param>
    /// <param name="cols">The number of columns to display in the text area.</param>
    /// <returns>The current instance of the <see cref="TextAreaField"/> class.</returns>
    public TextAreaField SetTextAreaProperties(bool autoResize = false, int rows = 5, int cols = 30)
    {
        AutoResize = autoResize;
        Rows = rows;
        Cols = cols;
        return this;
    }
}