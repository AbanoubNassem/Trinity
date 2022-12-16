using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Fields;

public class TextField : BaseField
{
    public override string ComponentName => "TextField";
    
    public TextField(string columnName) : base(columnName)
    {
    }
}