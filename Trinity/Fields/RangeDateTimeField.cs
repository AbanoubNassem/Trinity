namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// A field for storing and displaying a range of dates and times.
/// </summary>
public class RangeDateTimeField : MultipleDateTimeField
{
    /// <inheritdoc />
    public RangeDateTimeField(string columnName) : base(columnName)
    {
        SelectionMode = "range";
    }
}