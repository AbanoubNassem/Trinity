using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

public class SwitchInputField<T> : TrinityField<SwitchInputField<T>, T>
{
    public override string ComponentName => "SwitchInputField";

    public SwitchInputField(string columnName) : base(columnName)
    {
    }

    public T? TrueValue { get; protected set; }

    public T? FalseValue { get; protected set; }

    public SwitchInputField<T> SetTrueFalseValue(T trueValue, T falseValue)
    {
        TrueValue = trueValue;
        FalseValue = falseValue;
        return this;
    }
}

public class SwitchInputField : SwitchInputField<int>
{
    public SwitchInputField(string columnName) : base(columnName)
    {
        SetTrueFalseValue(1, 0);
    }

    public SwitchInputField SetDefaultValue(bool value)
    {
        DefaultValue = value ? 1 : 0;
        return this;
    }
}