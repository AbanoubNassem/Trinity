using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a text field in Trinity Framework.
/// </summary>
public class TextField : TrinityField<TextField, string?>
{
    /// <inheritdoc />
    public override string ComponentName => "TextField";

    /// <inheritdoc />
    public TextField(string columnName) : base(columnName)
    {
    }
    
    /// <summary>
    /// Gets or sets the minimum length of the input field.
    /// </summary>
    public int? MinLength { get; protected set; }

    /// <summary>
    /// Sets the minimum length of the input field
    /// </summary>
    /// <param name="min">The minimum length to be set.</param>
    /// <returns>The current <see cref="TextField"/> instance.</returns>
    public TextField SetMinLength(int min)
    {
        MinLength = min;
        return this;
    }
    
    /// <summary>
    /// Gets or sets the maximum length of the input field.
    /// </summary>
    public int? MaxLength { get; protected set; }

    /// <summary>
    /// Sets the maximum length of the input field
    /// </summary>
    /// <param name="max">The maximum length to be set.</param>
    /// <returns>The current <see cref="TextField"/> instance.</returns>
    public TextField SetMaxLength(int max)
    {
        MaxLength = max;
        return this;
    }
}