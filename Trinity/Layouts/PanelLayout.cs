using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

public class PanelLayout : TrinityLayout<PanelLayout>
{
    public override string ComponentName => "PanelLayout";

    public PanelLayout(IEnumerable<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }
    
}