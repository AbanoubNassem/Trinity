using AbanoubNassem.Trinity.Extensions;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    public virtual bool CanView => User.IsAdmin();

    public virtual bool CanCreate => User.IsAdmin();

    public virtual bool CanUpdate => User.IsAdmin();

    public virtual bool CanDelete => User.IsAdmin();
}