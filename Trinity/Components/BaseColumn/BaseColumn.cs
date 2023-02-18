using AbanoubNassem.Trinity.Components.Interfaces;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Components.BaseColumn;

public interface IBaseColumn : IBaseComponent
{
    public string ColumnName { get; set; }
    bool IsGloballySearchable { get; set; }
    void SelectQuery(FluentQueryBuilder query);
    void Filter(Filters filters, string globalSearch);
    void Format(IDictionary<string, object?> record);
    void Sort(FluentQueryBuilder query, string direction);
}

public abstract partial class BaseColumn<T, TDeserialization> : BaseComponent<T, TDeserialization>, IBaseColumn
    where T : BaseColumn<T, TDeserialization>
{
    public override string Type => "Column";

    protected BaseColumn(string columnName)
    {
        ColumnName = columnName;
        SetLabel(ColumnName.Titleize());
        Title = columnName;
    }

    public delegate void QueryCallbackWithString(FluentQueryBuilder query, string str);

    public delegate void FiltersCallback(Filters filters, string str);

    public delegate TCallBack CallbackWithRecord<out TCallBack>(IDictionary<string, object?> record);

    public delegate void QueryCallback(FluentQueryBuilder query);

    public string ColumnName { get; set; }

    public virtual void SelectQuery(FluentQueryBuilder query)
    {
        query.Select($"t.{ColumnName:raw}");
    }

    protected CallbackWithRecord<string>? FormatUsingCallback { get; set; }

    public T SetFormatUsing(CallbackWithRecord<string> formatUsing)
    {
        FormatUsingCallback = formatUsing;
        return (this as T)!;
    }

    public virtual void Format(IDictionary<string, object?> record)
    {
        if (FormatUsingCallback != null)
        {
            record[ColumnName] = FormatUsingCallback(record);
            return;
        }

        if (TooltipCallback != null)
        {
            record.Add($"{ColumnName}_tooltip", TooltipCallback(record));
        }

        if (ExtraAttributesCallback != null)
        {
            record.Add($"{ColumnName}_extraAttributes", ExtraAttributesCallback(record));
        }
    }

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

    protected CallbackWithRecord<string>? TooltipCallback { get; set; }

    public T SetTooltip(CallbackWithRecord<string> tooltipCallback)
    {
        TooltipCallback = tooltipCallback;
        return (this as T)!;
    }


    protected CallbackWithRecord<Dictionary<string, string>>? ExtraAttributesCallback { get; set; }

    public T SetExtraAttributes(CallbackWithRecord<Dictionary<string, string>> extraAttributesCallback)
    {
        ExtraAttributesCallback = extraAttributesCallback;
        return (this as T)!;
    }

    public bool Html { get; protected set; }

    public T SetAsHtml(bool html = true)
    {
        Html = html;
        return (this as T)!;
    }

    public string? Color { get; protected set; }

    public T SetColor(string color)
    {
        Color = color;
        return (this as T)!;
    }

    public string? Icon { get; protected set; }
    public string? IconPosition { get; protected set; }

    public T SetIcon(string icon, string iconPosition = "before")
    {
        Icon = icon;
        IconPosition = iconPosition;
        return (this as T)!;
    }


    public object? CustomFilter { get; protected set; }

    public T SetCustomFilter(IBaseField filter, FiltersCallback? filterCallback = null)
    {
        CustomFilter = filter;
        if (filterCallback != null)
            SearchCallback = filterCallback;
        return (this as T)!;
    }
}