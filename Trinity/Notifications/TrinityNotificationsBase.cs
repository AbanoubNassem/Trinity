namespace AbanoubNassem.Trinity.Notifications;

/// <summary>
/// specifies the type of the message.
/// </summary>
public enum NotificationSeverity
{
    /// <summary>
    /// 
    /// </summary>
    Success,

    /// <summary>
    /// 
    /// </summary>
    Error,

    /// <summary>
    /// 
    /// </summary>
    Info,

    /// <summary>
    /// 
    /// </summary>
    Warn
}

/// <summary>
/// TrinityNotifications allow you to notify Nova users of events within your application.
/// </summary>
public sealed class TrinityNotificationsBase
{
    private readonly List<object> _notifications = new();
    private readonly IServiceProvider _serviceProvider;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="serviceProvider"></param>
    public TrinityNotificationsBase(IServiceProvider serviceProvider)
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
        await notification.Send(_serviceProvider, userIdentifiers);
    }

    /// <summary>
    /// Notifies all users with the specified TrinityNotification.
    /// </summary>
    /// <param name="notification">The TrinityNotification to send.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task NotifyAllUsers(TrinityNotification notification)
    {
        await notification.SendAll(_serviceProvider);
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

    /// <summary>
    /// Show a Toast of a successful message. 
    /// </summary>
    /// <param name="message">The message used for the notification.</param>
    /// <param name="title">The title used for the notification.</param>
    /// <param name="lifeTimeMs">Delay in milliseconds to close the message automatically.</param>
    /// <param name="closable">Whether the message can be closed manually using the close icon.</param>
    /// <param name="sticky">When enabled, message is not removed automatically.</param>
    public void NotifySuccess(string message, string? title = null, int lifeTimeMs = 3000, bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "success", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    /// <summary>
    /// Show a Toast of an error message. 
    /// </summary>
    /// <param name="message">The message used for the notification.</param>
    /// <param name="title">The title used for the notification.</param>
    /// <param name="lifeTimeMs">Delay in milliseconds to close the message automatically.</param>
    /// <param name="closable">Whether the message can be closed manually using the close icon.</param>
    /// <param name="sticky">When enabled, message is not removed automatically.</param>
    public void NotifyError(string message, string? title = null, int lifeTimeMs = 3000, bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "error", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    /// <summary>
    /// Show a Toast of an information message. 
    /// </summary>
    /// <param name="message">The message used for the notification.</param>
    /// <param name="title">The title used for the notification.</param>
    /// <param name="lifeTimeMs">Delay in milliseconds to close the message automatically.</param>
    /// <param name="closable">Whether the message can be closed manually using the close icon.</param>
    /// <param name="sticky">When enabled, message is not removed automatically.</param>
    public void NotifyInformation(string message, string? title = null, int lifeTimeMs = 3000,
        bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "info", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    /// <summary>
    /// Show a Toast of a warning message. 
    /// </summary>
    /// <param name="message">The message used for the notification.</param>
    /// <param name="title">The title used for the notification.</param>
    /// <param name="lifeTimeMs">Delay in milliseconds to close the message automatically.</param>
    /// <param name="closable">Whether the message can be closed manually using the close icon.</param>
    /// <param name="sticky">When enabled, message is not removed automatically.</param>
    public void NotifyWarning(string message, string? title = null, int lifeTimeMs = 3000, bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "warn", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    private void Notify(object notification)
    {
        _notifications.Add(notification);
    }

    /// <summary>
    /// Flush the notifications and clear it.
    /// </summary>
    /// <returns>A list of all the notifications added before flushing.</returns>
    public List<object> Flush()
    {
        var tmp = new List<object>(_notifications);

        _notifications.Clear();

        return tmp;
    }
}