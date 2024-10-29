using System.Globalization;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// A field for storing and displaying multiple dates and times.
/// </summary>
public class MultipleDateTimeField : DateTimeField<DateTime?[]?>
{
    /// <inheritdoc />
    public MultipleDateTimeField(string columnName) : base(columnName)
    {
        SelectionMode = "multiple";
    }

    /// <inheritdoc />
    public override void Fill(ref Dictionary<string, object?> form, IReadOnlyDictionary<string, object?>? record = null)
    {
        if (!form.ContainsKey(ColumnName)) return;

        var value = string.Join(',', (form[ColumnName] as DateTime[] ?? Array.Empty<DateTime>())
            .Select(x => x.ToString(CultureInfo.CurrentCulture)));

        form[ColumnName] = value;
        base.Fill(ref form, record);
    }

    /// <inheritdoc />
    public override void Format(ref IDictionary<string, object?> record)
    {
        if (!record.TryGetValue(ColumnName, out var value) || string.IsNullOrEmpty(value?.ToString())) return;

        record[ColumnName] = value.ToString()?.Split(",").Select(DateTime.Parse);

        base.Format(ref record);
    }
}