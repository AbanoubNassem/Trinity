using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Fields;

public class IdField<T> : BaseField<IdField<T>, T>
{
    public IdField(string columnName = "id") : base(columnName)
    {
        SetAsToggleable();
        SetAsSortable();
    }

    public override string ComponentName => "IdField";
}