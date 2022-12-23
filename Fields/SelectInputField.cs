using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Fields;

public class SelectField : BaseField<SelectField>
{
    public override string ComponentName => "SelectInputField";

    public SelectField(string columnName) : base(columnName)
    {
    }

    public Dictionary<string, string>? Options { get; protected set; }

    public SelectField SetOptions(Dictionary<string, string> options)
    {
        Options = options;
        return this;
    }

    public string OptionLabel { get; protected set; } = "name";

    public SelectField SetOptionLabel(string optionLabel)
    {
        OptionLabel = optionLabel;
        return this;
    }

    public string OptionValue { get; protected set; } = "value";

    public SelectField SetOptionValue(string optionValue)
    {
        OptionValue = optionValue;
        return this;
    }
}