using AbanoubNassem.Trinity.Extensions;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    public virtual bool CanView()
    {
        return User.IsAdmin();
    }

    public virtual bool CanCreate()
    {
        return User.IsAdmin();
    }

    public virtual bool CanUpdate()
    {
        return User.IsAdmin();
    }

    public virtual bool CanDelete()
    {
        return User.IsAdmin();
    }
}