using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Layouts;

public class FieldsetLayout : BaseLayout<FieldsetLayout>
{
    public override string ComponentName => "FieldsetLayout";


    public FieldsetLayout(List<IBaseComponent> schema, int columns = 1) : base(schema, columns)
    {
    }
}