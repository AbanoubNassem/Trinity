using AbanoubNassem.Trinity.Components.TrinityColumn;

namespace AbanoubNassem.Trinity.Columns;

/// <summary>
/// Represents a column that displays color values.
/// </summary>
public class ColorColumn : TrinityColumn<ColorColumn, string>
{
    /// <inheritdoc />
    public override string ComponentName => "ColorColumn";


    /// <inheritdoc />
    public ColorColumn(string columnName) : base(columnName)
    {
    }
}