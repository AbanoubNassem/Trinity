using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Fields;

public class IdField : BaseField<IdField>
{
    public IdField(string columnName = "id") : base(columnName)
    {
        SetAsToggleable();
        SetAsSortable();
    }

    public override string ComponentName => "IdField";
}