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

        foreach (var id in userIdentifiers)
        {
            await hub.Clients.User(id).SendAsync("TrinityPushNotification", notification.Data(id));
        }
    }

    /// <inheritdoc />
    public async Task SendAll(IServiceProvider serviceProvider, TrinityNotification notification)
    {
        var hub = serviceProvider.GetRequiredService<IHubContext<TrinityNotificationsHub>>();

        var data = notification.Data();

        await hub.Clients.All.SendAsync("TrinityPushNotification", data);
    }
}