using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

public class MaskField : TrinityField<MaskField, string>
{
    public override string ComponentName => "MaskField";

    public MaskField(string columnName) : base(columnName)
    {
    }

    public bool AutoClear { get; protected set; }
    public string? InputMask { get; protected set; }

    public string? SlotChar { get; protected set; }

    public MaskField SetInputMask(string mask, string? slotChar = null, bool autoClear = false)
    {
        InputMask = mask;
        SlotChar = slotChar;
        AutoClear = autoClear;
        return this;
    }
}