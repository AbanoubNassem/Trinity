using AbanoubNassem.Trinity.Models;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    /// <summary>
    /// Represents a badge in the resource.
    /// </summary>
    public virtual TrinityBadge? Badge { get; } = null;
}