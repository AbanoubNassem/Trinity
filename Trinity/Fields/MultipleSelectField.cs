namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a multiple select field that allows selecting multiple values of type <typeparamref name="T"/>.
/// </summary>
public class MultipleSelectField<T> : SelectField<T[]?>
{
    /// <summary>
    /// Gets a value indicating whether this field allows selecting multiple values.
    /// </summary>
    public bool Multiple => true;

    /// <summary>
    /// Gets the maximum number of selections allowed for this field, or null if there is no limit.
    /// </summary>
    public int? SelectionLimit { get; protected set; }

    /// <summary>
    /// Gets the display mode for this field, or null if the default mode should be used.
    /// </summary>
    public string? Display { get; protected set; }

    /// <summary>
    /// Initializes a new instance of the <see cref="MultipleSelectField{T}"/> class with the specified column name, and optionally, the maximum number of selections allowed and the display mode.
    /// </summary>
    /// <param name="columnName">The name of the column that this field represents.</param>
    /// <param name="showAsChips">Whether to display the selected values as chips. Default is <see langword="false"/>.</param>
    /// <param name="maxSelection">The maximum number of selections allowed, or <see langword="null"/> if there is no limit. Default is <see langword="null"/>.</param>
    public MultipleSelectField(string columnName, bool showAsChips = false, int? maxSelection = null) : base(columnName)
    {
        SelectionLimit = maxSelection;
        if (showAsChips)
            Display = "chip";
    }


    /// <inheritdoc />
    public override void Fill(ref Dictionary<string, object?> form, IReadOnlyDictionary<string, object?>? record = null)
    {
        if (!form.ContainsKey(ColumnName)) return;

        form[ColumnName] = string.Join(",", (T[]?)form[ColumnName]!);
    }
}