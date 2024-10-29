using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a field for inputting content with a mask.
/// </summary>
public class MaskField : TrinityField<MaskField, string>
{
    /// <inheritdoc />
    public override string ComponentName => "MaskField";

    /// <inheritdoc />
    public MaskField(string columnName) : base(columnName)
    {
    }

    /// <summary>
    /// Gets or sets a value indicating whether the field should be automatically cleared when focused and unfocused.
    /// </summary>
    public bool AutoClear { get; protected set; }

    /// <summary>
    /// Gets or sets the input mask for the field.
    /// </summary>
    public string? InputMask { get; protected set; }

    /// <summary>
    /// Gets or sets the slot character for the field.
    /// </summary>
    public char? SlotChar { get; protected set; }

    /// <summary>
    /// Sets the input mask, slot character, and auto clear value of the field and returns the instance of the <see cref="MaskField"/> class.
    /// </summary>
    /// <param name="mask">The input mask of the field.</param>
    /// <param name="slotChar">The slot character of the field.</param>
    /// <param name="autoClear">A value indicating whether the field should be automatically cleared when focused and unfocused.</param>
    /// <returns>The instance of the <see cref="MaskField"/> class.</returns>
    public MaskField SetInputMask(string mask, char? slotChar = null, bool autoClear = false)
    {
        InputMask = mask;
        SlotChar = slotChar;
        AutoClear = autoClear;
        return this;
    }
}