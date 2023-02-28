using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

public class EditorField : TrinityField<EditorField, string?>
{
    public override string ComponentName => "EditorField";

    public EditorField(string columnName) : base(columnName)
    {
    }

    public string Height { get; protected set; } = "200px";

    public EditorField SetHeight(string height)
    {
        Height = height;
        return this;
    }

    public string[]? HeaderButtons { get; protected set; }

    public EditorField SetHeaderButtons(params string[] headerButtonsClasses)
    {
        HeaderButtons = headerButtonsClasses;
        return this;
    }

    public object? Modules { get; protected set; }

    public EditorField SetModules(object modules)
    {
        Modules = modules;
        return this;
    }

    public int? MaxLength { get; protected set; }

    public EditorField SetMaxLength(int maxLength)
    {
        MaxLength = maxLength;
        return this;
    }
}