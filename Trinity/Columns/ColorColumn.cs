using AbanoubNassem.Trinity.Components.TrinityColumn;

namespace AbanoubNassem.Trinity.Columns;

public class ColorColumn : TrinityColumn<ColorColumn, string>
{
    public override string ComponentName => "ColorColumn";


    public ColorColumn(string columnName) : base(columnName)
    {
    }
}