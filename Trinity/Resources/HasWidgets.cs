namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    public List<object> TopWidgets => new(TrinityTable.TopWidgets.Select(w =>
    {
        w.Init(ServiceProvider);
        w.Setup();
        return w;
    }));

    public List<object> BottomWidgets => new(TrinityTable.BottomWidgets.Select(w =>
    {
        w.Init(ServiceProvider);
        w.Setup();
        return w;
    }));
}