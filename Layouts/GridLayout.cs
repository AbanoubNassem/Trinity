using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.BaseLayout;

namespace AbanoubNassem.Trinity.Layouts;

public class GridLayout : BaseLayout<GridLayout>
{
    public override string ComponentName => "GridLayout";

    public GridLayout(List<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }
}