using AbanoubNassem.Trinity.RequestHelpers;
using Microsoft.EntityFrameworkCore;

namespace AbanoubNassem.Trinity.Extensions;

public static class QueryableExtensions
{
    public static async Task<Pagination> Paginate<TSource>(
        this IQueryable<TSource> query,
        int pageNumber,
        int perPage,
        CancellationToken cancellationToken = default)
    {
        var count = await query.CountAsync(cancellationToken);
        return new Pagination
        {
            TotalCount = count,
            Data = await query
                .Skip((pageNumber - 1) * perPage)
                .Take(perPage)
                .ToListAsync(cancellationToken: cancellationToken),
            CurrentPage = pageNumber,
            PerPage = perPage,
            TotalPages = (int)Math.Ceiling(count / (double)perPage)
        };
    }
}