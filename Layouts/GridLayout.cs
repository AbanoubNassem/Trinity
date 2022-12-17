using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Layouts;

public class GridLayout : BaseLayout
{
    public override string ComponentName => "GridLayout";
    
    public GridLayout(List<BaseComponent> schema, int columns = 1) : base(schema, columns)
    {
    }


}