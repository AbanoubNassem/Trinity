using AbanoubNassem.Trinity.Components.BaseColumn;

namespace AbanoubNassem.Trinity.Columns;

public class ColorColumn : BaseColumn<ColorColumn, string>
{
    public override string ComponentName => "ColorColumn";


    public ColorColumn(string columnName) : base(columnName)
    {
    }
}