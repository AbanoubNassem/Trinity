using AbanoubNassem.Trinity.Models;
using AbanoubNassem.Trinity.Resources;

namespace AbanoubNassem.Trinity.Notifications;

/// <summary>
/// Represents a notification regarding a badge update on a <see cref="TrinityResource"/>.
/// </summary>
public class TrinityResourceBadgeUpdateNotification : TrinityNotification
{
    private readonly TrinityResource _resource;
    private readonly TrinityBadge _badge;

    /// <summary>
    /// Initializes a new instance of the <see cref="TrinityResourceBadgeUpdateNotification"/> class.
    /// </summary>
    /// <param name="resource">The resource where the badge is updated.</param>
    /// <param name="badge">The badge that has been updated.</param>
    public TrinityResourceBadgeUpdateNotification(TrinityResource resource, TrinityBadge badge)
    {
        _resource = resource;
        _badge = badge;
    }

    /// <summary>
    /// Gets the data to be sent as part of the notification.
    /// </summary>
    /// <param name="serviceProvider">The service provider to resolve services.</param>
    /// <param name="userIdentifiers">The identifiers of the users to be notified.</param>
    /// <returns>An anonymous object containing the data for the notification.</returns>
    public override object Data(IServiceProvider serviceProvider, params string[] userIdentifiers)
    {
        return new
        {
            Resource = _resource.Name,
            Badge = _badge
        };
    }
}