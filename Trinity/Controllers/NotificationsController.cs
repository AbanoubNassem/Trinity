using System.Security.Claims;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Controllers;

public class NotificationsController : TrinityController
{
    [HttpGet]
    [Route("/notifications/all")]
    public async Task<Pagination?> GetAll()
    {
        if (Configurations.DatabaseNotifications == null) return null;

        var page = int.Parse(Request.Query["page"].FirstOrDefault() ?? "1");
        var perPage = int.Parse(Request.Query["perPage"].FirstOrDefault() ?? "10");
        if (perPage > Configurations.MaxPaginationPerPageCount)
        {
            perPage = Configurations.MaxPaginationPerPageCount;
        }

        var query = Configurations.ConnectionFactory()
            .Query(Configurations.DatabaseNotifications.NotificationsTable)
            .Select("id", "data")
            .Where("user_id", User.FindFirstValue(ClaimTypes.NameIdentifier)!)
            // .WhereNull("read_at")
            .OrderByDesc("created_at");

        var count = await query.Clone().CountAsync<int>();

        var notifications = await query
            .Offset(page * perPage)
            .Limit(perPage)
            .GetAsync();

        return new Pagination
        {
            TotalCount = count,
            Data = notifications,
            CurrentPage = page,
            PerPage = perPage,
            TotalPages = (int)Math.Ceiling(count / (double)perPage)
        };
    }
}