using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Fields;

public class TextAreaField : BaseField<TextAreaField>
{
    public override string ComponentName => "TextAreaField";

    public TextAreaField(string columnName) : base(columnName)
    {
    }
    
    public bool AutoResize { get; protected set; }

    public int Rows { get; protected set; } = 5;

    public int Cols { get; protected set; } = 30;

    public TextAreaField SetTextAreaProperties(bool autoResize = false, int rows = 5, int cols = 30)
    {
        AutoResize = autoResize;
        Rows = rows;
        Cols = cols;
        return this;
    }
}