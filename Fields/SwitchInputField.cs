using AbanoubNassem.Trinity.Components.BaseField;

namespace AbanoubNassem.Trinity.Fields;

public class SwitchInputField<T> : BaseField<SwitchInputField<T>, T>
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

public class SwitchInputField : SwitchInputField<bool>
{
    public SwitchInputField(string columnName) : base(columnName)
    {
    }
}