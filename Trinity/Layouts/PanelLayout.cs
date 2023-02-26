using AbanoubNassem.Trinity.Components.BaseLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

public class PanelLayout : BaseLayout<PanelLayout>
{
    public override string ComponentName => "PanelLayout";

    public PanelLayout(IEnumerable<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }
    
}