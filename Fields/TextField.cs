using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Fields;

public class TextField : BaseField
{
    public override string ComponentName => "TextField";

    // public override void SelectQuery(FluentQueryBuilder query)
    // {
    //     query.Select($"{Attribute:raw}");
    // }
    public TextField(string columnName) : base(columnName)
    {
    }
}