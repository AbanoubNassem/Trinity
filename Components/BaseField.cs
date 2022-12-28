using AbanoubNassem.Trinity.Validators;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Components;

public interface IBaseField : IBaseComponent
{
    public string ColumnName { get; set; }

    public void Format(IDictionary<string, object?> record);

    public void Fill(ref IDictionary<string, object?> record);

    public void SelectQuery(FluentQueryBuilder query);

    public void FilterQuery(Filters filters, string globalSearch);

    public bool IsGloballySearchable { get; set; }

    public void AddValidator(ResourceValidator validator);

    public void Validate();

    Type GetDeserializationType();
}

public abstract partial class BaseField<T, TDeserialization> : BaseComponent<T>, IBaseField
    where T : BaseField<T, TDeserialization>
{
    protected BaseField(string columnName)
    {
        ColumnName = columnName;
        SetLabel(ColumnName.Titleize());
        Title = columnName;
    }

    public override string Type => "Field";

    public Type GetDeserializationType()
    {
        return typeof(TDeserialization);
    }

    public virtual void SelectQuery(FluentQueryBuilder query)
    {
        query.Select($"t.{ColumnName:raw}");
    }

    public virtual void FilterQuery(Filters filters, string globalSearch)
    {
        filters.Add(new Filter($@"LOWER(t.{ColumnName:raw}) LIKE {globalSearch}"));
    }


    public delegate void ActionWithRecord(IDictionary<string, object?> record);

    public delegate object? ActionWithRecordProperty(TDeserialization? property);

    public delegate Task AsyncActionWithRecord(IDictionary<string, object?> record);

    public string ColumnName { get; set; }

    public T SetColumnName(string value)
    {
        ColumnName = value;
        return (this as T)!;
    }


    public string Title { get; protected set; }

    public T SetTitle(string value)
    {
        Title = value;
        return (this as T)!;
    }


    private ActionWithRecord? _formatUsing;

    public T FormatUsing(ActionWithRecord formatUsing)
    {
        _formatUsing = formatUsing;
        return (this as T)!;
    }


    public void Format(IDictionary<string, object?> record)
    {
        _formatUsing?.Invoke(record);
    }

    private ActionWithRecord? _fillUsing;

    private ActionWithRecordProperty? _fillUsingProperty;

    public T FillUsing(ActionWithRecord fillUsing)
    {
        _fillUsing = fillUsing;
        return (this as T)!;
    }

    public T FillUsing(ActionWithRecordProperty fillUsingProperty)
    {
        _fillUsingProperty = fillUsingProperty;
        return (this as T)!;
    }

    public virtual void Fill(ref IDictionary<string, object?> record)
    {
        if (record.ContainsKey(ColumnName) && _fillUsingProperty != null)
            record[ColumnName] = _fillUsingProperty((TDeserialization?)record[ColumnName]);
        _fillUsing?.Invoke(record);
    }


    public bool Sortable { get; protected set; }

    public T SetAsSortable(bool sortable = true)
    {
        Sortable = sortable;
        return (this as T)!;
    }

    public bool Searchable { get; protected set; }

    public bool IsGloballySearchable { get; set; }

    public T SetAsSearchable(bool searchable = true, bool globallySearchable = true)
    {
        Searchable = searchable;
        IsGloballySearchable = globallySearchable;
        return (this as T)!;
    }

    public string? SearchPlaceholder { get; protected set; }

    public T SetSearchPlaceholder(string searchPlaceholder)
    {
        SearchPlaceholder = searchPlaceholder;
        return (this as T)!;
    }

    public bool Exportable { get; protected set; }

    public T SetAsExportable(bool exportable = true)
    {
        Exportable = exportable;
        return (this as T)!;
    }

    public string? Placeholder { get; protected set; }

    public T SetPlaceholder(string placeholder)
    {
        Placeholder = placeholder;
        return (this as T)!;
    }

    public string? ToolTip { get; protected set; }

    public T SetToolTip(string toolTip)
    {
        ToolTip = toolTip;
        return (this as T)!;
    }

    public string? HelperText { get; protected set; }

    public T SetHelperText(string helperText)
    {
        HelperText = helperText;
        return (this as T)!;
    }

    public bool Disabled { get; protected set; }

    public T SetAsDisabled(bool value = true)
    {
        Disabled = value;
        return (this as T)!;
    }


    public string? Locale { get; protected set; }

    public T SetLocale(string locale)
    {
        Locale = locale;
        return (this as T)!;
    }
    
    public bool Hidden { get; protected set; }

    public T SetAsHidden(bool value = true)
    {
        Hidden = value;
        return (this as T)!;
    }

}