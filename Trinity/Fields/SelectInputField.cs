using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a select input field.
/// </summary>
/// <typeparam name="T">The type of the field's value.</typeparam>
public class SelectField<T> : TrinityField<SelectField<T>, T>
{
    /// <inheritdoc />
    public override string ComponentName => "SelectInputField";

    /// <inheritdoc />
    public SelectField(string columnName) : base(columnName)
    {
    }

    /// <summary>
    /// Gets or sets the options for the select field.
    /// </summary>
    public List<KeyValuePair<string, string>>? Options { get; protected set; }

    /// <summary>
    /// Sets the options for the select field.
    /// </summary>
    /// <param name="options">The options to be set.</param>
    /// <returns>The current instance of <see cref="SelectField{T}"/> field.</returns>
    public SelectField<T> SetOptions(List<KeyValuePair<string, string>> options)
    {
        Options = options;
        return this;
    }

    /// <summary>
    /// A value indicating whether this field is searchable.
    /// </summary>
    public bool Searchable { get; protected set; }

    /// <summary>
    /// Sets this field as searchable .
    /// </summary>
    /// <param name="searchable">A value indicating whether this field is searchable.</param>
    /// <returns></returns>
    public virtual SelectField<T> SetAsSearchable(bool searchable = true)
    {
        Searchable = searchable;
        return this;
    }
}

/// <inheritdoc />
public class SelectField : SelectField<string>
{
    /// <inheritdoc />
    public SelectField(string columnName) : base(columnName)
    {
    }
}