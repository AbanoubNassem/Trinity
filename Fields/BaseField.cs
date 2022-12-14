using AbanoubNassem.Trinity.Components;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Fields;

public abstract class BaseField : BaseComponent
{
    protected BaseField(string columnName)
    {
        ColumnName = columnName;
        Label = ColumnName.Titleize();
        Title = columnName;
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


    public string ColumnName { get; protected set; }

    public BaseField SetColumnName(string value)
    {
        ColumnName = value;
        return this;
    }


    public string Label { get; protected set; }

    public BaseField SetLabel(string value)
    {
        Label = value;
        return this;
    }

    public string Title { get; protected set; }

    public BaseField SetTitle(string value)
    {
        Title = value;
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

    public bool Sortable { get; protected set; }

    public BaseField SetAsSortable(bool sortable = true)
    {
        Sortable = sortable;
        return this;
    }

    public bool Searchable { get; protected set; }

    public bool IsGloballySearchable { get; protected set; }

    public BaseField SetAsSearchable(bool searchable = true, bool globallySearchable = true)
    {
        Searchable = searchable;
        IsGloballySearchable = globallySearchable;
        return this;
    }

    public bool Toggleable { get; protected set; }

    public bool IsToggledHiddenByDefault { get; protected set; }

    public BaseField SetAsToggleable(bool toggleable = true, bool isToggledHiddenByDefault = true)
    {
        Toggleable = toggleable;
        IsToggledHiddenByDefault = isToggledHiddenByDefault;
        return this;
    }
}