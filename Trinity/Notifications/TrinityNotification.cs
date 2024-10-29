using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.Models;
using AbanoubNassem.Trinity.Notifications.Channels;
using Microsoft.Extensions.DependencyInjection;

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
/// Represents an abstract base class for Trinity notifications.
/// </summary>
public abstract class TrinityNotification : CanMakeComponent
{
    // The default notification channels to use
    private static readonly List<ITrinityNotificationChannel> DefaultChannels =
        [new TrinitySignalRChannel(), new TrinityDatabaseChannel()];


    /// <summary>
    /// Gets or sets the name of the notification.
    /// </summary>
    public virtual string? Name { get; set; }

    /// <summary>
    /// Setup is being called on each Notification, before sending it out.
    /// Can be used to resolve extra Services or do some logic before using the Notification.
    /// </summary>
    public Task Setup(IServiceProvider serviceProvider)
    {
        var appManager = serviceProvider.GetRequiredService<TrinityManager>();
        appManager.SetupNotification(serviceProvider, this);

        return Task.CompletedTask;
    }

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
    /// <param name="userIdentifier">the user identifier.</param>
    /// <returns>The <see cref="TrinityNotificationData"/> for the notification.</returns>
    public abstract TrinityNotificationData Data(string? userIdentifier = null);

    /// <summary>
    /// Sends the notification using the specified service provider and user identifiers.
    /// </summary>
    /// <param name="userIdentifiers">the user identifiers.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task Send(params string[] userIdentifiers)
    {
        foreach (var channel in Via())
        {
            await channel.Send(ServiceProvider, this, userIdentifiers);
        }
    }

    /// <summary>
    /// Sends the notification using the specified service provider to all users.
    /// </summary>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task SendAll()
    {
        foreach (var channel in Via())
        {
            await channel.SendAll(ServiceProvider, this);
        }
    }
}