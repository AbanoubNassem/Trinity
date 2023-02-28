using AbanoubNassem.Trinity.Components.TrinityColumn;

namespace AbanoubNassem.Trinity.Columns;

public class IdColumn<T> : TrinityColumn<IdColumn<T>, T>
{
    public override string ComponentName => "IdField";

    public IdColumn(string columnName = "id") : base(columnName)
    {
        SetAsToggleable();
        SetAsSortable();
    }
}

public class IdColumn : IdColumn<string>
{
    public IdColumn(string columnName = "id") : base(columnName)
    {
    }
}