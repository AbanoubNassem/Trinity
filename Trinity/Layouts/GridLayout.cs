using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.BaseLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

public class GridLayout : BaseLayout<GridLayout>
{
    public override string ComponentName => "GridLayout";

    public GridLayout(List<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }
}