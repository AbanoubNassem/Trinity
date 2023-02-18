using AbanoubNassem.Trinity.Components.Interfaces;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Components.BaseField;

public abstract partial class BaseField<T, TDeserialization> : BaseComponent<T, TDeserialization>,
    IBaseField,
    IFormComponent
    where T : BaseField<T, TDeserialization>, IBaseField
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

    protected Action<FluentQueryBuilder>? SelectQueryUsing { get; set; }

    public virtual void SelectQuery(FluentQueryBuilder query)
    {
        if (SelectQueryUsing != null)
            SelectQueryUsing(query);
        else
        {
            query.Select($"t.{ColumnName:raw}");
        }
    }

    public void SetSelectQueryUsing(Action<FluentQueryBuilder> query)
    {
        SelectQueryUsing = query;
    }

    protected Action<Filters, string>? FilterQueryUsing { get; set; }

    public virtual void FilterQuery(Filters filters, string globalSearch)
    {
        if (FilterQueryUsing != null)
            FilterQueryUsing(filters, globalSearch);
        else
        {
            filters.Add(new Filter($@"LOWER(t.{ColumnName:raw}) LIKE {globalSearch}"));
        }
    }

    public void SetFilterQueryUsing(Action<Filters, string> filter)
    {
        FilterQueryUsing = filter;
    }


    public delegate void ActionFormWithRecord(IDictionary<string, object?> form,
        IReadOnlyDictionary<string, object?>? record = null);

    public delegate object? ActionWithRecordProperty(TDeserialization? property);

    public delegate object? ActionWithRecordProperties(TDeserialization? property,
        IReadOnlyDictionary<string, object?>? record = null);

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


    private ActionFormWithRecord? _formatUsing;

    public T FormatUsing(ActionFormWithRecord formatUsing)
    {
        _formatUsing = formatUsing;
        return (this as T)!;
    }


    public void Format(IDictionary<string, object?> record)
    {
        _formatUsing?.Invoke(record);
    }

    protected ActionFormWithRecord? FillUsing;
    protected ActionWithRecordProperty? FillUsingProperty;
    protected ActionWithRecordProperties? FillUsingProperties;

    public T SetFillUsing(ActionFormWithRecord fillUsing)
    {
        FillUsing = fillUsing;
        return (this as T)!;
    }

    public T SetFillUsingProperty(ActionWithRecordProperty fillUsingProperty)
    {
        FillUsingProperty = fillUsingProperty;
        return (this as T)!;
    }

    public T SetFillUsingProperties(ActionWithRecordProperties fillUsingProperties)
    {
        FillUsingProperties = fillUsingProperties;
        return (this as T)!;
    }

    public virtual void Fill(ref IDictionary<string, object?> form, IReadOnlyDictionary<string, object?>? record = null)
    {
        if (form.TryGetValue(ColumnName, out var value))
        {
            if (FillUsingProperties != null)
                form[ColumnName] = FillUsingProperties((TDeserialization?)value, record);

            if (FillUsingProperty != null)
                form[ColumnName] = FillUsingProperty((TDeserialization?)value);
        }

        FillUsing?.Invoke(form);
    }


    public string? Placeholder { get; protected set; }

    public T SetPlaceholder(string placeholder)
    {
        Placeholder = placeholder;
        return (this as T)!;
    }

    public string? HelperText { get; protected set; }

    public T SetHelperText(string helperText)
    {
        HelperText = helperText;
        return (this as T)!;
    }


    public string? Locale { get; protected set; }

    public T SetLocale(string locale)
    {
        Locale = locale;
        return (this as T)!;
    }
}