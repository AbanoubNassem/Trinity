using AbanoubNassem.Trinity.Components.BaseField;

namespace AbanoubNassem.Trinity.Fields;

public class SelectField<T> : BaseField<SelectField<T> , T>
{
    public override string ComponentName => "SelectInputField";

    public SelectField(string columnName) : base(columnName)
    {
    }

    public List<KeyValuePair<string, string>>? Options { get; protected set; }

    public SelectField<T> SetOptions(List<KeyValuePair<string, string>> options)
    {
        Options = options;
        return this;
    }
    
}