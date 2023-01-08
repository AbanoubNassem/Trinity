using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.BaseLayout;

namespace AbanoubNassem.Trinity.Layouts;

public class FieldsetLayout : BaseLayout<FieldsetLayout>
{
    public override string ComponentName => "FieldsetLayout";

    public FieldsetLayout(List<IBaseComponent> schema, int columns = 0) : base(schema, columns)
    {
    }


    public override string Label { get; protected set; } = "Fieldset";
}