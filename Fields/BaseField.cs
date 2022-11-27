using AbanoubNassem.Trinity.Components;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Fields;

public abstract class BaseField : BaseComponent
{
    protected BaseField(string columnName)
    {
        _columnName = columnName;
        _label = _columnName.Titleize();
        _title = columnName;
    }

    protected virtual void SetUp(string propertyName, Type propertyType)
    {
    }

    public virtual void SelectQuery(FluentQueryBuilder query)
    {
        query.Select($"{ColumnName:raw}");
    }


    private string _columnName;
    public string ColumnName => _columnName;

    public BaseField SetColumnName(string value)
    {
        _columnName = value;
        return this;
    }


    private string _label;
    public string Label => _label;

    public BaseField SetLabel(string value)
    {
        _label = value;
        return this;
    }

    private string _title;
    public string Title => _title;

    public BaseField SetTitle(string value)
    {
        _title = value;
        return this;
    }

    private Action<IDictionary<string, object>>? _formatUsing;

    public BaseField FormatUsing(Action<IDictionary<string, dynamic>> formatUsing)
    {
        _formatUsing = formatUsing;
        return this;
    }

    public void Format(IDictionary<string, object?> record)
    {
        _formatUsing?.Invoke(record);
    }
}