using AbanoubNassem.Trinity.Hubs;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;

namespace AbanoubNassem.Trinity.Notifications;

/// <summary>
/// Represents a SignalR channel for Trinity notifications.
/// </summary>
public class SignalRChannel : ITrinityNotificationChannel
{
    /// <inheritdoc />
    public async Task Send(IServiceProvider serviceProvider, TrinityNotification notification,
        params string[] userIdentifiers)
    {
        var hub = serviceProvider.GetRequiredService<IHubContext<TrinityHub>>();

        await hub.Clients.Users(userIdentifiers)
            .SendAsync(notification.Name ?? notification.GetType().Name,
                notification.Data(serviceProvider, userIdentifiers)
            );
    }
}