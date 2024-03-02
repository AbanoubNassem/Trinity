using AbanoubNassem.Trinity.Components.Interfaces;
using Humanizer;
using SqlKata;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

/// <summary>
/// Represents a column in <see cref="TrinityTable"/>. This is an abstract class that provides common properties and methods for all types of columns.
/// </summary>
/// <typeparam name="T">The type of the derived class.</typeparam>
/// <typeparam name="TDeserialization">The type of the deserialization object used for deserializing JSON data.</typeparam>
public abstract partial class TrinityColumn<T, TDeserialization> : TrinityComponent<T, TDeserialization>, ITrinityColumn
    where T : TrinityColumn<T, TDeserialization>
{
    /// <inheritdoc />
    public override string Type => "Column";

    /// <summary>
    /// Initializes a new instance of the <typeparamref name="T"/> class with the specified column name.
    /// </summary>
    /// <param name="columnName">The name of the column.</param>
    protected TrinityColumn(string columnName)
    {
        ColumnName = columnName;
        SetLabel(ColumnName.Titleize());
        Title = columnName;
    }

    /// <summary>
    ///  The record retrieved from the database.
    /// </summary>
    protected IDictionary<string, object?> Record { get; private set; } = null!;

    /// <inheritdoc />
    public void SetRecord(IDictionary<string, object?> record)
    {
        Record = record;
    }

    /// <summary>
    /// Represents a method that handles a query with a string result.
    /// </summary>
    /// <param name="query">The query being handled.</param>
    /// <param name="str">The string result of the query.</param>
    public delegate void QueryCallbackWithString(Query query, string str);

    /// <summary>
    /// Represents a method that handles a query with filters.
    /// </summary>
    /// <param name="query">The query being handled.</param>
    /// <param name="str">The filter string.</param>
    public delegate void FiltersCallback(Query query, string str);

    /// <summary>
    /// Represents a method that handles a query without a return value.
    /// </summary>
    /// <param name="query">The query being handled.</param>
    public delegate void QueryCallback(Query query);

    /// <summary>
    /// Gets or sets the name of the column.
    /// </summary>
    public string ColumnName { get; set; }

    /// <summary>
    /// Adds a select clause for the current column to the specified query.
    /// </summary>
    /// <param name="query">The query to modify.</param>
    public virtual void SelectQuery(Query query)
    {
        query.Select($"t.{ColumnName}");
    }

    /// <summary>
    /// A callback function to format the value of the column using the record data.
    /// </summary>
    /// <remarks>
    /// The callback function should accept a <see cref="Record"/> object and return a string.
    /// </remarks>
    protected CallbackWithRecord<string>? FormatUsingCallback { get; set; }

    /// <summary>
    /// Sets the <see cref="FormatUsingCallback"/> property of the column.
    /// </summary>
    /// <param name="formatUsing">The callback function to set.</param>
    /// <returns>The instance of the derived class.</returns>
    public T SetFormatUsing(CallbackWithRecord<string> formatUsing)
    {
        FormatUsingCallback = formatUsing;
        return (this as T)!;
    }

    /// <summary>
    /// Formats the value of the column, if <see cref="FormatUsingCallback"/> defined will apply the callback function.
    /// </summary>
    public virtual void Format()
    {
        if (FormatUsingCallback != null)
        {
            Record[ColumnName] = FormatUsingCallback(Record);
        }

        if (DescriptionUsingCallback != null)
        {
            Record.Add($"{ColumnName}_description", DescriptionUsingCallback(Record));
        }

        if (TooltipCallback != null)
        {
            Record.Add($"{ColumnName}_tooltip", TooltipCallback(Record));
        }

        if (ExtraAttributesCallback != null)
        {
            Record.Add($"{ColumnName}_extraAttributes", ExtraAttributesCallback(Record));
        }
    }


    /// <summary>
    /// Sets the <see cref="ColumnName"/> property .
    /// </summary>
    /// <param name="value">The column name to set.</param>
    /// <returns>The instance of the derived class.</returns>
    public T SetColumnName(string value)
    {
        ColumnName = value;
        return (this as T)!;
    }

    /// <summary>
    /// The value that should be used to represent the column when being displayed.
    /// </summary>
    public string Title { get; protected set; }

    /// <summary>
    /// Sets the <see cref="Title"/> property .
    /// </summary>
    /// <param name="value">The title to set.</param>
    /// <returns>The instance of the derived class.</returns>
    public T SetTitle(string value)
    {
        Title = value;
        return (this as T)!;
    }

    /// <summary>
    /// The placeholder text displayed in the search input field.
    /// </summary>
    public string? SearchPlaceholder { get; protected set; }

    /// <summary>
    /// Sets the <see cref="SearchPlaceholder"/> property .
    /// </summary>
    /// <param name="searchPlaceholder">The search placeholder to set.</param>
    /// <returns>The instance of the derived class.</returns>
    public T SetSearchPlaceholder(string searchPlaceholder)
    {
        SearchPlaceholder = searchPlaceholder;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets a value indicating whether this column should be exportable.
    /// </summary>
    public bool Exportable { get; protected set; }

    /// <summary>
    /// Sets this column as exportable or not.
    /// </summary>
    /// <param name="exportable">A boolean value indicating whether this column should be exportable.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetAsExportable(bool exportable = true)
    {
        Exportable = exportable;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets a callback function to generate tooltip for this column.
    /// </summary>
    protected CallbackWithRecord<string>? TooltipCallback { get; set; }

    /// <summary>
    /// Sets a callback function to generate tooltip for this column.
    /// </summary>
    /// <param name="tooltipCallback">A callback function to generate tooltip for this column.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetTooltip(CallbackWithRecord<string> tooltipCallback)
    {
        TooltipCallback = tooltipCallback;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets a callback function to generate extra attributes for this column.
    /// </summary>
    protected CallbackWithRecord<Dictionary<string, string>>? ExtraAttributesCallback { get; set; }

    /// <summary>
    /// Sets a callback function to generate extra attributes for this column.
    /// </summary>
    /// <param name="extraAttributesCallback">A callback function to generate extra attributes for this column.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetExtraAttributes(CallbackWithRecord<Dictionary<string, string>> extraAttributesCallback)
    {
        ExtraAttributesCallback = extraAttributesCallback;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the content of this column should be rendered as HTML.
    /// </summary>
    public bool Html { get; protected set; }

    /// <summary>
    /// Sets this column to render its content as HTML or not.
    /// </summary>
    /// <param name="html">A boolean value indicating whether the content of this column should be rendered as HTML.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetAsHtml(bool html = true)
    {
        Html = html;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the color of this column.
    /// </summary>
    public string? Color { get; protected set; }

    /// <summary>
    /// Sets the color of this column.
    /// </summary>
    /// <param name="color">The color of this column.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetColor(string color)
    {
        Color = color;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the icon of this column.
    /// </summary>
    public string? Icon { get; protected set; }

    /// <summary>
    /// Gets or sets the position of the icon in this column.
    /// </summary>
    public string? IconPosition { get; protected set; }

    /// <summary>
    /// Sets the icon to be displayed for this column, with an optional position (defaults to "before").
    /// </summary>
    /// <param name="icon">The icon to display.</param>
    /// <param name="iconPosition">The position of the icon ("before" or "after"). Defaults to "before".</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetIcon(string icon, string iconPosition = "before")
    {
        Icon = icon;
        IconPosition = iconPosition;
        return (this as T)!;
    }


    /// <summary>
    ///  Gets or sets custom filter of this column.
    /// </summary>
    public object? CustomFilter { get; protected set; }

    /// <summary>
    /// Sets a custom filter for  this column, with an optional callback to handle filter values.
    /// </summary>
    /// <param name="filter">The custom filter to use.</param>
    /// <param name="filterCallback">An optional callback to handle filter values.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetCustomFilter(ITrinityField filter, FiltersCallback? filterCallback = null)
    {
        CustomFilter = filter;
        if (filterCallback != null)
            SearchCallback = filterCallback;
        return (this as T)!;
    }

    /// <inheritdoc />
    public bool IsCustomColumn { get; set; }

    /// <summary>
    /// Sets the column as custom , which mean it's not in the database.
    /// </summary>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetAsCustomColumn(bool isCustom = true)
    {
        IsCustomColumn = isCustom;
        return (this as T)!;
    }
}