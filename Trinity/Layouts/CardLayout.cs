using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

/// <summary>
/// Namespace containing classes for layouts in the Trinity component library.
/// </summary>
public class CardLayout : TrinityLayout<CardLayout>
{
    /// <inheritdoc />
    public override string ComponentName => "CardLayout";

    /// <inheritdoc />
    public CardLayout(IEnumerable<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }
    
}