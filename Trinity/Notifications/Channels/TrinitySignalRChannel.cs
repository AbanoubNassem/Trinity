using AbanoubNassem.Trinity.Hubs;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;

namespace AbanoubNassem.Trinity.Notifications.Channels;

/// <summary>
/// Represents a SignalR channel for Trinity notifications.
/// </summary>
public class TrinitySignalRChannel : ITrinityNotificationChannel
{
    /// <inheritdoc />
    public async Task Send(IServiceProvider serviceProvider, TrinityNotification notification,
        params string[] userIdentifiers)
    {
        var hub = serviceProvider.GetRequiredService<IHubContext<TrinityNotificationsHub>>();

        await hub.Clients.Users(userIdentifiers)
            .SendAsync(notification.Name ?? notification.GetType().Name,
                notification.Data(serviceProvider, userIdentifiers)
            );
    }

    /// <inheritdoc />
    public async Task SendAll(IServiceProvider serviceProvider, TrinityNotification notification)
    {
        var hub = serviceProvider.GetRequiredService<IHubContext<TrinityNotificationsHub>>();

        await hub.Clients.All.SendAsync(notification.Name ?? notification.GetType().Name,
            notification.Data(serviceProvider));
    }
}