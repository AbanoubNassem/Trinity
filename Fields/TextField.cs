using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Fields;

public class TextField : BaseField<TextField>
{
    public override string ComponentName => "TextField";

    public TextField(string columnName) : base(columnName)
    {
    }

    public string? InputMask { get; protected set; }

    public string? SlotChar { get; protected set; }

    public TextField SetInputMask(string mask, string? slotChar = null)
    {
        InputMask = mask;
        SlotChar = slotChar;
        return this;
    }
}