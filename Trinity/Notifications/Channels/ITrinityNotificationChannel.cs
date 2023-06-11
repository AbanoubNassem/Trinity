namespace AbanoubNassem.Trinity.Notifications.Channels;

/// <summary>
/// Represents an interface for a Trinity notification channel.
/// </summary>
public interface ITrinityNotificationChannel
{
    /// <summary>
    /// Sends the specified TrinityNotification to the specified user identifiers.
    /// </summary>
    /// <param name="serviceProvider">The service provider for resolving dependencies.</param>
    /// <param name="notification">The TrinityNotification to send.</param>
    /// <param name="userIdentifiers">the user identifiers.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public Task Send(IServiceProvider serviceProvider, TrinityNotification notification,
        params string[] userIdentifiers);

    /// <summary>
    /// Sends the notification using the specified service provider to all users.
    /// </summary>
    /// <param name="serviceProvider">The service provider for resolving dependencies.</param>
    /// /// <param name="notification">The TrinityNotification to send.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public Task SendAll(IServiceProvider serviceProvider, TrinityNotification notification);
}