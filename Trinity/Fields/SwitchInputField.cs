using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a switch input field in Trinity.
/// </summary>
/// <typeparam name="T">The type of the value to be stored in the switch input field.</typeparam>
public class SwitchInputField<T> : TrinityField<SwitchInputField<T>, T>
{
    /// <inheritdoc />
    public override string ComponentName => "SwitchInputField";

    /// <inheritdoc />
    public SwitchInputField(string columnName) : base(columnName)
    {
    }

    /// <summary>
    /// Gets or sets the value to be stored in the switch input field when the switch is turned on.
    /// </summary>
    public T? TrueValue { get; protected set; }

    /// <summary>
    /// Gets or sets the value to be stored in the switch input field when the switch is turned off.
    /// </summary>
    public T? FalseValue { get; protected set; }

    /// <summary>
    /// Sets the values to be stored in the switch input field when the switch is turned on and off, respectively.
    /// </summary>
    /// <param name="trueValue">The value to be stored when the switch is turned on.</param>
    /// <param name="falseValue">The value to be stored when the switch is turned off.</param>
    /// <returns>The <see cref="SwitchInputField{T}"/> instance.</returns>
    public SwitchInputField<T> SetTrueFalseValue(T trueValue, T falseValue)
    {
        TrueValue = trueValue;
        FalseValue = falseValue;
        return this;
    }
}

/// <inheritdoc />
public class SwitchInputField : SwitchInputField<int>
{
    /// <inheritdoc />
    public SwitchInputField(string columnName) : base(columnName)
    {
        SetTrueFalseValue(1, 0);
    }

    /// <summary>
    /// Set the component default value.
    /// </summary>
    /// <param name="value">Set the default value of the component.</param>
    /// <returns>The current <see cref="SwitchInputField"/>. for further chaining.</returns>
    public SwitchInputField SetDefaultValue(bool value)
    {
        DefaultValue = value ? 1 : 0;
        return this;
    }
}