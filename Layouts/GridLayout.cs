using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Layouts;

public class GridLayout : BaseLayout<GridLayout>
{
    public override string ComponentName => "GridLayout";

    public GridLayout(List<IBaseComponent> schema, int columns = 1) : base(schema, columns)
    {
    }
}