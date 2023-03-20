using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    public List<object> TopWidgets => new(GetTopWidgets());

    protected virtual List<ITrinityWidget> GetTopWidgets()
    {
        return new List<ITrinityWidget>(0);
    }


    public List<object> BottomWidgets => new(GetBottomWidgets());

    protected virtual List<ITrinityWidget> GetBottomWidgets()
    {
        return new List<ITrinityWidget>(0);
    }
}