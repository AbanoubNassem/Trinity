using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace AbanoubNassem.Trinity.Hubs;

/// <summary>
///  Represents a SignalR hub for Trinity functionality.
/// </summary>
[Authorize]
public class TrinityHub : Hub
{
}