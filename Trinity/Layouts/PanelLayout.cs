using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

/// <summary>
/// A layout that arranges form components in a panel format.
/// </summary>
public class PanelLayout : TrinityLayout<PanelLayout>
{
    /// <inheritdoc />
    public override string ComponentName => "PanelLayout";

    /// <inheritdoc />
    public PanelLayout(List<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }
    
}