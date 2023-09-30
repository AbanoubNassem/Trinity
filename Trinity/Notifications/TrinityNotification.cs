using AbanoubNassem.Trinity.Models;
using AbanoubNassem.Trinity.Notifications.Channels;

namespace AbanoubNassem.Trinity.Notifications;

/// <summary>
/// Represents an abstract base class for Trinity notifications.
/// </summary>
public abstract class TrinityNotification
{
    // The default notification channels to use
    private static readonly List<ITrinityNotificationChannel> DefaultChannels = new()
        { new TrinitySignalRChannel(), new TrinityDatabaseChannel() };

    /// <summary>
    /// Gets or sets the name of the notification.
    /// </summary>
    public virtual string? Name { get; set; }

    /// <summary>
    /// Retrieves the list of notification channels to use.
    /// </summary>
    /// <returns>A list of ITrinityNotificationChannel objects.</returns>
    protected virtual List<ITrinityNotificationChannel> Via()
    {
        return DefaultChannels;
    }

    /// <summary>
    /// Retrieves the data associated with the notification , based on the user_id given.
    /// </summary>
    /// <param name="serviceProvider">The service provider for resolving dependencies.</param>
    /// <param name="userIdentifier">the user identifier.</param>
    /// <returns>The <see cref="TrinityNotificationData"/> for the notification.</returns>
    public abstract TrinityNotificationData Data(IServiceProvider serviceProvider, string? userIdentifier = null);

    /// <summary>
    /// Sends the notification using the specified service provider and user identifiers.
    /// </summary>
    /// <param name="serviceProvider">The service provider for resolving dependencies.</param>
    /// <param name="userIdentifiers">the user identifiers.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task Send(IServiceProvider serviceProvider, params string[] userIdentifiers)
    {
        foreach (var channel in Via())
        {
            await channel.Send(serviceProvider, this, userIdentifiers);
        }
    }

    /// <summary>
    /// Sends the notification using the specified service provider to all users.
    /// </summary>
    /// <param name="serviceProvider">The service provider for resolving dependencies.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task SendAll(IServiceProvider serviceProvider)
    {
        foreach (var channel in Via())
        {
            await channel.SendAll(serviceProvider, this);
        }
    }
}