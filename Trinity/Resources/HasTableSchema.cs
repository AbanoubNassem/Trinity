using System.Text.Json;
using AbanoubNassem.Trinity.Columns;
using AbanoubNassem.Trinity.Components.TrinityColumn;
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
    public abstract string TitleColumn { get; }

    public List<object> Columns => new(GetTableSchema());

    protected virtual List<ITrinityColumn> GetTableSchema()
    {
        return new List<ITrinityColumn>()
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

            foreach (ITrinityColumn column in Columns)
            {
                if (column.Hidden) continue;

                column.SelectQuery(query);

                if (globalSearch != null && column.IsGloballySearchable)
                {
                    column.Filter(countFilters, globalSearch);
                    column.Filter(filters, globalSearch);
                }
                else if (requestFilters != null && requestFilters.TryGetValue(column.ColumnName, out var search))
                {
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
                    var column =
                        (ITrinityColumn?)Columns.SingleOrDefault(x => ((ITrinityColumn)x).ColumnName == sort.Field);
                    if (column is null or IHasRelationship) continue;

                    var direction = sort.Order == 1 ? "ASC" : "DESC";

                    column.Sort(query, direction);
                }
            }


            query.OrderBy($"t.{PrimaryKeyColumn:raw}");

            var count = await countQuery.QuerySingleAsync<int>();

            var limit = query.Limit((page - 1) * perPage, perPage);
            var result = (await limit.QueryAsync()).Cast<IDictionary<string, object?>>().ToList();

            if (result.Any())
            {
                foreach (ITrinityColumn baseColumn in Columns)
                {
                    if (baseColumn is IHasRelationship { HasRelationshipByDefault: true } relationshipColumn)
                    {
                        result = await relationshipColumn.SelectRelationshipQuery(
                            (FluentQueryBuilder)conn.FluentQueryBuilder(),
                            result,
                            sorts?.SingleOrDefault(x => x.Field == relationshipColumn.ColumnName)
                        );
                    }
                }
            }

            foreach (var record in result)
            {
                foreach (ITrinityColumn column in Columns)
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
            var recordStr = keys.Count == 1 ? Localizer["record_was"] : Localizer["records_were"];
            TrinityNotifications.NotifySuccess(Localizer["record_deleted", recordStr]);
        }
        else
        {
            TrinityNotifications.NotifyError(Localizer["record_not_deleted"]);
        }

        return await GetTableData();
    }
}