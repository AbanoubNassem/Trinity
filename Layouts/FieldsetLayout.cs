using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Layouts;

public class FieldsetLayout : BaseLayout
{
    public override string ComponentName => "FieldsetLayout";


    public FieldsetLayout(List<BaseComponent> schema, int columns = 1) : base(schema, columns)
    {
    }
}