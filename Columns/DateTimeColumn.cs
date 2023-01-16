using AbanoubNassem.Trinity.Components.BaseColumn;
using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Columns;

public class DateTimeColumn<T> : BaseColumn<DateTimeColumn<T>, T>
{
    public override string ComponentName => "DateTimeColumn";

    public DateTimeColumn(string columnName) : base(columnName)
    {
    }

    public override void Filter(Filters filters, string search)
    {
        if (SearchCallback != null)
        {
            SearchCallback.Invoke(filters, search);
            return;
        }
        
        filters.Add(new Filter($@" t.{ColumnName:raw} => {search} "));
    }
}

public class DateTimeColumn : DateTimeColumn<string>
{
    public DateTimeColumn(string columnName = "id") : base(columnName)
    {
    }
}