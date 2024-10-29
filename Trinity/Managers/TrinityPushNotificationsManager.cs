using AbanoubNassem.Trinity.Notifications;

namespace AbanoubNassem.Trinity.Managers;

/// <summary>
/// TrinityPushNotifications allow you to notify Trinity users of events within your application in Real Time.
/// </summary>
public sealed class TrinityPushNotificationsManager
{
    private readonly IServiceProvider _serviceProvider;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="serviceProvider"></param>
    public TrinityPushNotificationsManager(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    /// <summary>
    /// Notifies users with the specified TrinityNotification using the specified user identifiers.
    /// </summary>
    /// <param name="notification">The TrinityNotification to send.</param>
    /// <param name="userIdentifiers">the user identifiers.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task NotifyUsers(TrinityNotification notification, params string[] userIdentifiers)
    {
        await notification.Setup(_serviceProvider);
        await notification.Send(userIdentifiers);
    }

    /// <summary>
    /// Notifies all users with the specified TrinityNotification.
    /// </summary>
    /// <param name="notification">The TrinityNotification to send.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task NotifyAllUsers(TrinityNotification notification)
    {
        await notification.Setup(_serviceProvider);
        await notification.SendAll();
    }

    // /// <summary>
    // /// Notifies all users about the update of the specified <see cref="TrinityBadge"/> in the provided <see cref="TrinityResource"/>.
    // /// </summary>
    // /// <param name="resource">The resource where the badge is updated.</param>
    // /// <param name="badge">The badge that has been updated.</param>
    // /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    // public async Task NotifyBadgeUpdate(TrinityResource resource, TrinityBadge badge)
    // {
    //     await new TrinityResourceBadgeUpdateNotification(resource, badge).SendAll(_serviceProvider);
    // }

    // /// <summary>
    // /// Notifies specified users about the update of the <see cref="TrinityBadge"/> in the provided <see cref="TrinityResource"/>.
    // /// </summary>
    // /// <param name="resource">The resource where the badge is updated.</param>
    // /// <param name="badge">The badge that has been updated.</param>
    // /// <param name="userIdentifiers">The identifiers of the users to be notified.</param>
    // /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    // public async Task NotifyBadgeUpdate(TrinityResource resource, TrinityBadge badge, params string[] userIdentifiers)
    // {
    //     await new TrinityResourceBadgeUpdateNotification(resource, badge).Send(_serviceProvider, userIdentifiers);
    // }

    // /// <summary>
    // /// Notifies all users about the update of the specified <see cref="TrinityBadge"/> on the given <see cref="TrinityPage"/>.
    // /// </summary>
    // /// <param name="page">The page where the badge is updated.</param>
    // /// <param name="badge">The badge that has been updated.</param>
    // /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    // public async Task NotifyBadgeUpdate(TrinityPage page, TrinityBadge badge)
    // {
    //     await new TrinityPageBadgeUpdateNotification(page, badge).SendAll(_serviceProvider);
    // }

    // /// <summary>
    // /// Notifies specified users about the update of the <see cref="TrinityBadge"/> on the provided <see cref="TrinityPage"/>.
    // /// </summary>
    // /// <param name="page">The page where the badge is updated.</param>
    // /// <param name="badge">The badge that has been updated.</param>
    // /// <param name="userIdentifiers">The identifiers of the users to be notified.</param>
    // /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    // public async Task NotifyBadgeUpdate(TrinityPage page, TrinityBadge badge, params string[] userIdentifiers)
    // {
    //     await new TrinityPageBadgeUpdateNotification(page, badge).Send(_serviceProvider, userIdentifiers);
    // }
}