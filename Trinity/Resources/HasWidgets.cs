namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    /// <summary>
    /// Get the top widgets displayed by the resource.
    /// </summary>
    public List<object> TopWidgets => new(TrinityTable.TopWidgets.Select(w =>
    {
        w.Init(ServiceProvider);
        w.Setup();
        return w;
    }));

    /// <summary>
    ///  Get the bottom widgets displayed by the resource.
    /// </summary>
    public List<object> BottomWidgets => new(TrinityTable.BottomWidgets.Select(w =>
    {
        w.Init(ServiceProvider);
        w.Setup();
        return w;
    }));
}