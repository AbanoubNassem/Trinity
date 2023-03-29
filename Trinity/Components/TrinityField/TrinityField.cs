using AbanoubNassem.Trinity.Components.Interfaces;
using Humanizer;
using SqlKata;

namespace AbanoubNassem.Trinity.Components.TrinityField;

/// <summary>
/// Represents an abstract class that provides a base implementation for a field component in Trinity Framework.
/// </summary>
/// <typeparam name="T">The type of the field component.</typeparam>
/// <typeparam name="TDeserialization">The type of the deserialization object.</typeparam>
public abstract partial class TrinityField<T, TDeserialization> : TrinityComponent<T, TDeserialization>,
    ITrinityField,
    IFormComponent
    where T : TrinityField<T, TDeserialization>, ITrinityField
{
    /// <summary>
    /// Initializes a new instance of the <see cref="TrinityField{T, TDeserialization}"/> class.
    /// </summary>
    /// <param name="columnName">The name of the column.</param>
    protected TrinityField(string columnName)
    {
        ColumnName = columnName;
        SetLabel(ColumnName.Titleize());
        Title = columnName;
    }

    /// <inheritdoc />
    public override string Type => "Field";

    /// <inheritdoc />
    public Type GetDeserializationType()
    {
        return typeof(TDeserialization);
    }

    /// <summary>
    /// Gets or sets the select query using action.
    /// </summary>
    protected Action<Query>? SelectQueryUsing { get; set; }

    /// <inheritdoc />
    public virtual void SelectQuery(Query query)
    {
        if (SelectQueryUsing != null)
            SelectQueryUsing(query);
        else
        {
            query.Select($"t.{ColumnName}");
        }
    }

    /// <inheritdoc />
    public void SetSelectQueryUsing(Action<Query> query)
    {
        SelectQueryUsing = query;
    }

    /// <summary>
    /// Gets or sets the filter query using action.
    /// </summary>
    protected Action<Query, string>? FilterQueryUsing { get; set; }

    /// <inheritdoc />
    public virtual void FilterQuery(Query query, string search)
    {
        if (FilterQueryUsing != null)
            FilterQueryUsing(query, search);
        else
        {
            query.WhereLike($"t.{ColumnName}", search);
        }
    }

    /// <inheritdoc />
    public void SetFilterQueryUsing(Action<Query, string> filter)
    {
        FilterQueryUsing = filter;
    }

    /// <summary>
    /// Represents a delegate to handle a form action with record.
    /// </summary>
    /// <param name="form">The dictionary representing the form.</param>
    /// <param name="record">The dictionary representing the record.</param>
    public delegate void ActionFormWithRecord(Dictionary<string, object?> form,
        IReadOnlyDictionary<string, object?>? record = null);

    /// <summary>
    /// Represents a delegate to handle an action with record property.
    /// </summary>
    /// <param name="property">The property object.</param>
    /// <returns>The object result of the action.</returns>
    public delegate object? ActionWithRecordProperty(TDeserialization? property);

    /// <summary>
    /// Represents a delegate to handle an action with record properties.
    /// </summary>
    /// <param name="property">The property object.</param>
    /// <param name="record">The dictionary representing the record.</param>
    /// <returns>The object result of the action.</returns>
    public delegate object? ActionWithRecordProperties(TDeserialization? property,
        IReadOnlyDictionary<string, object?>? record = null);

    /// <inheritdoc />
    public string ColumnName { get; set; }

    /// <summary>
    /// Sets the column name of the form field.
    /// </summary>
    /// <param name="value">The column name to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
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
    /// Sets the title of the form field.
    /// </summary>
    /// <param name="value">The title to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetTitle(string value)
    {
        Title = value;
        return (this as T)!;
    }


    private ActionFormWithRecord? _formatUsing;

    /// <summary>
    /// Sets the format using function for the form field.
    /// </summary>
    /// <param name="formatUsing">The format using function to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T FormatUsing(ActionFormWithRecord formatUsing)
    {
        _formatUsing = formatUsing;
        return (this as T)!;
    }


    /// <inheritdoc />
    public void Format(Dictionary<string, object?> record)
    {
        _formatUsing?.Invoke(record);
    }

    /// <summary>
    /// The fill using function for the form field.
    /// </summary>
    protected ActionFormWithRecord? FillUsing;

    /// <summary>
    /// The fill using property function for the form field.
    /// </summary>
    protected ActionWithRecordProperty? FillUsingProperty;

    /// <summary>
    /// The fill using properties function for the form field.
    /// </summary>
    protected ActionWithRecordProperties? FillUsingProperties;

    /// <summary>
    /// Sets the fill using function for the form field.
    /// </summary>
    /// <param name="fillUsing">The fill using function to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetFillUsing(ActionFormWithRecord fillUsing)
    {
        FillUsing = fillUsing;
        return (this as T)!;
    }

    /// <summary>
    /// Sets the fill using property function for the form field.
    /// </summary>
    /// <param name="fillUsingProperty">The fill using property function to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetFillUsing(ActionWithRecordProperty fillUsingProperty)
    {
        FillUsingProperty = fillUsingProperty;
        return (this as T)!;
    }

    /// <summary>
    /// Sets the fill using properties function for the form field.
    /// </summary>
    /// <param name="fillUsingProperties">The fill using properties function to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetFillUsingProperties(ActionWithRecordProperties fillUsingProperties)
    {
        FillUsingProperties = fillUsingProperties;
        return (this as T)!;
    }

    /// <inheritdoc />
    public virtual void Fill(ref Dictionary<string, object?> form, IReadOnlyDictionary<string, object?>? record = null)
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

    /// <summary>
    /// Gets or sets the placeholder text for the input field.
    /// </summary>
    public string? Placeholder { get; protected set; }

    /// <summary>
    /// Sets the placeholder text for the input field.
    /// </summary>
    /// <param name="placeholder">The text to be used as placeholder.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetPlaceholder(string placeholder)
    {
        Placeholder = placeholder;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the helper text for the input field.
    /// </summary>
    public string? HelperText { get; protected set; }

    /// <summary>
    /// Sets the helper text for the input field.
    /// </summary>
    /// <param name="helperText">The text to be used as helper text.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetHelperText(string helperText)
    {
        HelperText = helperText;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the locale to be used for the input field.
    /// </summary>
    public string? Locale { get; protected set; }

    /// <summary>
    /// Sets the locale to be used for the input field.
    /// </summary>
    /// <param name="locale">The locale to be used.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetLocale(string locale)
    {
        Locale = locale;
        return (this as T)!;
    }

    /// <inheritdoc />
    public bool OnlyOnCreate { get; set; }

    /// <summary>
    /// Sets a value indicating whether the input field should only be displayed on creation.
    /// </summary>
    /// <param name="only">A value indicating whether the input field should only be displayed on creation.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetOnlyOnCreate(bool only = true)
    {
        OnlyOnCreate = only;
        return (this as T)!;
    }

    /// <inheritdoc />
    public bool OnlyOnUpdate { get; set; }

    /// <summary>
    /// Sets a value indicating whether the input field should only be displayed on update.
    /// </summary>
    /// <param name="only">A value indicating whether the input field should only be displayed on update.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetOnlyOnUpdate(bool only = true)
    {
        OnlyOnUpdate = only;
        return (this as T)!;
    }
}