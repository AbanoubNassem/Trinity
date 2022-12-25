using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Fields;

public class TextField : BaseField<TextField, string?>
{
    public override string ComponentName => "TextField";
    public TextField(string columnName) : base(columnName)
    {
    }
}