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
        query.Select($"t.{ColumnName:raw}");
    }

    public virtual void FilterQuery(Filters filters, string globalSearch)
    {
        filters.Add(new Filter($@"LOWER(t.{ColumnName:raw}) LIKE {globalSearch}"));
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

    private Action<IDictionary<string, object?>>? _formatUsing;

    public BaseField FormatUsing(Action<IDictionary<string, object?>> formatUsing)
    {
        _formatUsing = formatUsing;
        return this;
    }

    public void Format(IDictionary<string, object?> record)
    {
        _formatUsing?.Invoke(record);
    }

    private bool _sortable;
    public bool Sortable => _sortable;

    public BaseField SetAsSortable(bool sortable = true)
    {
        _sortable = sortable;
        return this;
    }

    private bool _searchable;
    private bool _isGloballySearchable;

    public bool Searchable => _searchable;
    public bool IsGloballySearchable => _isGloballySearchable;

    public BaseField SetAsSearchable(bool searchable = true, bool globallySearchable = true)
    {
        _searchable = searchable;
        _isGloballySearchable = globallySearchable;
        return this;
    }
}