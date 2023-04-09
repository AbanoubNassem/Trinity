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
    public CardLayout(List<IFormComponent> schema, int? columns = null) : base(schema, columns)
    {
    }
    
}