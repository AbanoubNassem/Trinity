using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

/// <summary>
/// A layout that arranges form components in a grid format.
/// </summary>
public class GridLayout : TrinityLayout<GridLayout>
{
    /// <inheritdoc />
    public override string ComponentName => "GridLayout";

    /// <inheritdoc />
    public GridLayout(List<IFormComponent> schema) : base(schema, 2)
    {
        
    }
}