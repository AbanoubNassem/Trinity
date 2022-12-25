using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Fields;

public class MultipleSelectField<T> : SelectField<T[]?>
{
    public override string ComponentName => "TextField";

    public bool Multiple => true;

    public int? SelectionLimit { get; protected set; }

    public string? Display { get; protected set; }

    public MultipleSelectField(string columnName, bool showAsChips = false, int? maxSelection = null) : base(columnName)
    {
        SelectionLimit = maxSelection;
        if (showAsChips)
            Display = "chip";
    }


    public override void Fill(ref IDictionary<string, object?> record)
    {
        if (!record.ContainsKey(ColumnName)) return;

        record[ColumnName] = string.Join(",", ((T[]?)record[ColumnName]!));
    }
}