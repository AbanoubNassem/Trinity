using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

public class CardLayout : TrinityLayout<CardLayout>
{
    public override string ComponentName => "CardLayout";

    public CardLayout(IEnumerable<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }
    
}