using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

public class GridLayout : TrinityLayout<GridLayout>
{
    public override string ComponentName => "GridLayout";

    public GridLayout(List<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }
}