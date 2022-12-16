namespace AbanoubNassem.Trinity.Fields;

public class IdField : BaseField
{
    public IdField(string columnName = "id") : base(columnName)
    {
        SetAsToggleable();
        SetAsSortable();
    }

    public override string ComponentName { get; } = "IdField";
}