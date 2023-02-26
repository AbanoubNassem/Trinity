using AbanoubNassem.Trinity.Components.BaseLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

public class CardLayout : BaseLayout<CardLayout>
{
    public override string ComponentName => "CardLayout";

    public CardLayout(IEnumerable<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
    }
    
}