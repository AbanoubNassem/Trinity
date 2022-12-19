using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Fields;

public class SelectField : BaseField<SelectField>
{
    public override string ComponentName => "SelectField";

    public SelectField(string columnName) : base(columnName)
    {
    }

    public Dictionary<string, string>? Options { get; set; }

    public SelectField SetOptions(Dictionary<string, string> options)
    {
        Options = options;
        return this;
    }
}