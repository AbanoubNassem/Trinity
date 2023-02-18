using System.Text.Json;
using AbanoubNassem.Trinity.Columns;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.BaseColumn;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Utilities;
using Dapper;
using DapperQueryBuilder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource
{
    private readonly List<object> _columns = new();

    public abstract string TitleColumn { get; }

    public List<object> Columns
    {
        get
        {
            if (_columns.Any()) return _columns;

            _columns.AddRange(GetTableSchema());

            return _columns;
        }
    }

    protected virtual List<IBaseColumn> GetTableSchema()
    {
        return new List<IBaseColumn>()
        {
            new IdColumn(PrimaryKeyColumn)
        };
    }


    public virtual async Task<IPaginator?> GetTableData()
    {
        try
        {
            var page = int.Parse(Request.Query["page"].FirstOrDefault() ?? "1");
            var perPage = int.Parse(Request.Query["perPage"].FirstOrDefault() ?? "10");
            if (perPage > Configurations.MaxPaginationPerPageCount)
            {
                perPage = Configurations.MaxPaginationPerPageCount;
            }

            List<Sort>? sorts = null;

            if (Request.Query.TryGetValue("sort", out var sortStr) && !string.IsNullOrEmpty(sortStr))
            {
                sorts = JsonSerializer.Deserialize<List<Sort>>(sortStr!, new JsonSerializerOptions()
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            }

            Dictionary<string, string>? requestFilters = null;

            if (Request.Query.TryGetValue("columnsSearch", out var filtersStr) && !string.IsNullOrEmpty(filtersStr))
            {
                requestFilters = JsonSerializer.Deserialize<Dictionary<string, string>>(filtersStr!,
                    new JsonSerializerOptions()
                    {
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
            }

            string? globalSearch = null;
            // var filters = new Filters(Filters.FiltersType.OR);
            // var countFilters = new Filters(Filters.FiltersType.OR);
            if (Request.Query.TryGetValue("globalSearch", out var globalSearchStr) &&
                !string.IsNullOrEmpty(globalSearchStr))
            {
                globalSearch = globalSearchStr.ToString();
            }


            using var conn = ConnectionFactory();

            var query = (FluentQueryBuilder)conn.FluentQueryBuilder();
            var countQuery = (FluentQueryBuilder)conn.FluentQueryBuilder();

            var filters = new Filters(Filters.FiltersType.OR);
            var countFilters = new Filters(Filters.FiltersType.OR);

            countQuery
                .Select($"COUNT(*)")
                .From($"{Table:raw} AS t");

            query.From($"{Table:raw} AS t");

            query.Select($"t.{PrimaryKeyColumn:raw}");

            foreach (IBaseColumn column in Columns)
            {
                if (column.Hidden) continue;

                column.SelectQuery(query);

                if (globalSearch != null && column.IsGloballySearchable)
                {
                    column.Filter(countFilters, globalSearch);
                    column.Filter(filters, globalSearch);
                }
                else if (requestFilters != null && requestFilters.ContainsKey(column.ColumnName))
                {
                    var search = requestFilters[column.ColumnName];

                    column.Filter(countFilters, search);
                    column.Filter(filters, search);
                }
            }

            if (filters.Any())
            {
                countQuery.Where(countFilters);
                query.Where(filters);
            }

            if (sorts != null)
            {
                foreach (var sort in sorts)
                {
                    var column = (IBaseColumn?)Columns.SingleOrDefault(x => ((IBaseColumn)x).ColumnName == sort.Field);
                    if (column is null or IHasRelationship) continue;

                    var direction = sort.Order == 1 ? "ASC" : "DESC";

                    column.Sort(query, direction);
                }
            }


            var count = await countQuery.QuerySingleAsync<int>();

            var result = (await query.Limit((page - 1) * perPage, perPage).QueryAsync())
                .Cast<IDictionary<string, object?>>().ToList();

            if (result.Any())
            {
                foreach (IBaseColumn baseColumn in Columns)
                {
                    if (baseColumn is IHasRelationship { HasRelationshipByDefault: true } relationshipColumn)
                    {
                        result = await relationshipColumn.SelectRelationshipQuery((FluentQueryBuilder)conn.FluentQueryBuilder(),
                            result,
                            sorts?.SingleOrDefault(x => x.Field == relationshipColumn.ColumnName)
                        );
                    }
                }
            }

            foreach (var record in result)
            {
                foreach (IBaseColumn column in Columns)
                {
                    if (column.Hidden) continue;

                    column.Format(record);
                }
            }


            return new Pagination
            {
                TotalCount = count,
                Data = result,
                CurrentPage = page,
                PerPage = perPage,
                TotalPages = (int)Math.Ceiling(count / (double)perPage)
            };
        }
        catch (Exception ex)
        {
            // ReSharper disable once TemplateIsNotCompileTimeConstantProblem
            Logger.LogError(ex, ex.Message);
            throw;
        }
    }

    public async Task<object?> Delete()
    {
        var body = await Request.ReadFromJsonAsync<IDictionary<string, IList<string>>>();

        if (body == null || !body.TryGetValue(PrimaryKeyColumn, out var keys))
            return null;

        using var connection = ConnectionFactory();

        var deleteQueryResult =
            await connection.ExecuteScalarAsync<int>($"DELETE FROM {Table} WHERE {PrimaryKeyColumn} in @keys",
                new { keys }
            );


        if (deleteQueryResult == 0)
        {
            var recordStr = keys.Count == 1 ? "record was" : "records were";
            TrinityNotifications.NotifySuccess($"The {recordStr} deleted successfully!");
        }
        else
        {
            TrinityNotifications.NotifyError("Something went wrong while deleting the record!");
        }

        return await GetTableData();
    }
}