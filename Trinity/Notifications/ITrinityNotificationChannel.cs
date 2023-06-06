namespace AbanoubNassem.Trinity.Notifications;

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
}