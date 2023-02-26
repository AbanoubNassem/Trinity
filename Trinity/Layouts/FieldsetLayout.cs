using AbanoubNassem.Trinity.Components.BaseLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

public class FieldsetLayout : BaseLayout<FieldsetLayout>
{
    public override string ComponentName => "FieldsetLayout";

    public FieldsetLayout(List<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }


    public override string Label { get; protected set; } = "Fieldset";
}