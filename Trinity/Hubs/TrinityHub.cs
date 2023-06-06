using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace AbanoubNassem.Trinity.Hubs;

[Authorize]
public class TrinityHub : Hub
{
    async Task SendHello()
    {
        await Clients.All.SendAsync("hello");
    }
}