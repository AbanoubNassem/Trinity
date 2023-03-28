using AbanoubNassem.Trinity.Extensions;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    /// <inheritdoc />
    public virtual bool CanView => User.IsTrinityAdmin();

    /// <inheritdoc />
    public virtual bool CanCreate => User.IsTrinityAdmin();

    /// <inheritdoc />
    public virtual bool CanUpdate => User.IsTrinityAdmin();

    /// <inheritdoc />
    public virtual bool CanDelete => User.IsTrinityAdmin();
}