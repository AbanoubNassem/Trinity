namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    /// <summary>
    /// Get the top widgets displayed by the resource.
    /// </summary>
    public List<object> TopWidgets => new(TrinityTable.TopWidgets.Where(x=> x.Visible || !x.Hidden));

    /// <summary>
    ///  Get the bottom widgets displayed by the resource.
    /// </summary>
    public List<object> BottomWidgets => new(TrinityTable.BottomWidgets.Where(x=> x.Visible || !x.Hidden));
}