namespace AbanoubNassem.Trinity.Fields;

public class MultipleSelectField<T> : SelectField<T[]?>
{
    public bool Multiple => true;
    public int? SelectionLimit { get; protected set; }

    public string? Display { get; protected set; }

    public MultipleSelectField(string columnName, bool showAsChips = false, int? maxSelection = null) : base(columnName)
    {
        SelectionLimit = maxSelection;
        if (showAsChips)
            Display = "chip";
    }


    public override void Fill(ref IDictionary<string, object?> form, IReadOnlyDictionary<string, object?>? record = null)
    {
        if (!form.ContainsKey(ColumnName)) return;

        form[ColumnName] = string.Join(",", (T[]?)form[ColumnName]!);
    }
}