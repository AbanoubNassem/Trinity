using System.Security.Claims;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Controllers;

/// <summary>
/// Controller That handles all Trinity Notifications
/// </summary>
public class NotificationsController : TrinityController
{
    /// <summary>
    /// Get all the database saved notifications 
    /// </summary>
    /// <returns>List of notifications</returns>
    [HttpGet]
    [Route("/notifications/all")]
    public async Task<IActionResult?> GetAll()
    {
        if (Configurations.DatabaseNotifications == null) return Ok();

        var page = int.Parse(Request.Query["page"].FirstOrDefault() ?? "1");
        var perPage = int.Parse(Request.Query["perPage"].FirstOrDefault() ?? "10");
        if (perPage > Configurations.MaxPaginationPerPageCount)
        {
            perPage = Configurations.MaxPaginationPerPageCount;
        }

        var query = Configurations.ConnectionFactory()
            .Query(Configurations.DatabaseNotifications.NotificationsTable)
            .Select("id", "data", "read_at", "created_at")
            .Where("user_id", User.FindFirstValue(ClaimTypes.NameIdentifier)!)
            .OrderByDesc("created_at");

        var paginationCount = await query.Clone().CountAsync<int>();
        var unreadCount = await query.Clone().WhereNull("read_at").CountAsync<int>();


        var notifications = await query
            .Offset(page * perPage)
            .Limit(perPage)
            .GetAsync();

        return Ok(new
        {
            unreadCount,
            pagination = new Pagination
            {
                TotalCount = paginationCount,
                Data = notifications,
                CurrentPage = page,
                PerPage = perPage,
                TotalPages = (int)Math.Ceiling(paginationCount / (double)perPage)
            }
        });
    }

    /// <summary>
    /// Set all the notifications as read
    /// </summary>
    /// <returns>the number of updated notifications</returns>
    [HttpPost]
    [Route("/notifications/read-all")]
    public async Task<IActionResult> MarkAllAsRead()
    {
        if (Configurations.DatabaseNotifications == null) return UnprocessableEntity();

        var res = await Configurations.ConnectionFactory()
                .Query(Configurations.DatabaseNotifications.NotificationsTable)
                .Where("user_id", User.FindFirstValue(ClaimTypes.NameIdentifier)!)
                .UpdateAsync([new KeyValuePair<string, object>("read_at", DateTime.Now)])
            ;

        return Ok(res);
    }

    /// <summary>
    /// Clear/Delete all the notifications from the database.
    /// </summary>
    /// <returns>the number of deleted notifications</returns>
    [HttpPost]
    [Route("/notifications/clear-all")]
    public async Task<IActionResult> ClearAll()
    {
        if (Configurations.DatabaseNotifications == null) return UnprocessableEntity();

        var res = await Configurations.ConnectionFactory()
                .Query(Configurations.DatabaseNotifications.NotificationsTable)
                .Where("user_id", User.FindFirstValue(ClaimTypes.NameIdentifier)!)
                .DeleteAsync()
            ;

        return Ok(res);
    }
}