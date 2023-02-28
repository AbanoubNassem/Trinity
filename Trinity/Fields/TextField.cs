using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

public class TextField : TrinityField<TextField, string?>
{
    public override string ComponentName => "TextField";
    public TextField(string columnName) : base(columnName)
    {
    }
}