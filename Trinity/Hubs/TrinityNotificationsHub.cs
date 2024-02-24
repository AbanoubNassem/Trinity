using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace AbanoubNassem.Trinity.Hubs;

/// <summary>
/// Represents a SignalR hub for handling Trinity notifications.
/// </summary>
[Authorize]
public class TrinityNotificationsHub : Hub;