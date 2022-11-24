using AbanoubNassem.Trinity.RequestHelpers;
using Dapper;
using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Extensions;

public static class QueryableExtensions
{
    public static async Task<Pagination> Paginate<TSource>(
        this FluentQueryBuilder query,
        string table,
        int pageNumber,
        int perPage)
    {
        var countQuery = query.Connection.FluentQueryBuilder()
            .Select($"COUNT(*)")
            .From($"{table:raw}").Sql;

        var selectQuery = query
            .Limit((pageNumber - 1) * perPage, perPage)
            .Sql;
        

        using var multi =
            await query.Connection.QueryMultipleAsync($"{countQuery};{selectQuery};");
        
        Console.WriteLine(query.Sql);

        var count = await multi.ReadSingleAsync<int>();
        return new Pagination
        {
            TotalCount = count,
            Data = (await multi.ReadAsync()).ToList(),
            CurrentPage = pageNumber,
            PerPage = perPage,
            TotalPages = (int)Math.Ceiling(count / (double)perPage)
        };
    }
}