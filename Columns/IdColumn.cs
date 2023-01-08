using AbanoubNassem.Trinity.Components.BaseColumn;

namespace AbanoubNassem.Trinity.Columns;

public class IdColumn<T> : BaseColumn<IdColumn<T>, T>
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