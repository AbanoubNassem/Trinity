using System.Text.Json;
using AbanoubNassem.Trinity.Columns;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Utilities;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    /// <summary>
    /// The column to be used to get the single value ,
    /// that should be used to represent the resource when being displayed.
    /// </summary>
    public abstract string TitleColumn { get; }

    private TrinityTable? _trinityTable;

    /// <summary>
    /// A reference to the current <see cref="AbanoubNassem.Trinity.Components.TrinityTable"/>
    /// </summary>
    protected TrinityTable TrinityTable => _trinityTable ??= GetTrinityTable();

    /// <summary>
    /// Get the columns displayed by the resource.
    /// </summary>
    public List<object> Columns => new(TrinityTable.Columns.Where(x => !x.Hidden));

    /// <summary>
    /// Get the Table displayed by the resource.
    /// </summary>
    /// <returns>A new <see cref="AbanoubNassem.Trinity.Components.TrinityTable"/></returns>
    protected virtual TrinityTable GetTrinityTable()
    {
        return new TrinityTable()
            .SetColumns(new List<ITrinityColumn>()
            {
                new IdColumn(PrimaryKeyColumn)
            });
    }


    /// <inheritdoc />
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
            if (Request.Query.TryGetValue("globalSearch", out var globalSearchStr) &&
                !string.IsNullOrEmpty(globalSearchStr))
            {
                globalSearch = globalSearchStr.ToString();
            }


            using var conn = ConnectionFactory();

            var query = conn.Query();
            var countQuery = conn.Query();


            countQuery
                .From($"{Table} AS t")
                .AsCount();

            query.From($"{Table} AS t");

            query.Select($"t.{PrimaryKeyColumn}");

            var columns = Columns;
            foreach (ITrinityColumn column in columns)
            {
                column.Init(ServiceProvider);
                column.SelectQuery(query);

                if (globalSearch != null && column.IsGloballySearchable)
                {
                    column.Filter(countQuery, globalSearch);
                    column.Filter(query, globalSearch);
                }
                else if (requestFilters != null && requestFilters.TryGetValue(column.ColumnName, out var search))
                {
                    column.Filter(countQuery, search);
                    column.Filter(query, search);
                }
            }


            if (sorts != null)
            {
                foreach (var sort in sorts)
                {
                    var column =
                        (ITrinityColumn?)columns.SingleOrDefault(x => ((ITrinityColumn)x).ColumnName == sort.Field);
                    if (column is null or IHasRelationship) continue;

                    var direction = sort.Order == 1 ? "ASC" : "DESC";

                    column.Sort(query, direction);
                }
            }

            var count = await countQuery.FirstAsync<int>();

            var limit = query.Offset((page - 1) * perPage).Limit(perPage);

            var result = (await limit.GetAsync()).Cast<IDictionary<string, object?>>().ToList();


            if (result.Any())
            {
                foreach (ITrinityColumn baseColumn in columns)
                {
                    if (baseColumn is IHasRelationship { HasRelationshipByDefault: true } relationshipColumn)
                    {
                        result = await relationshipColumn.SelectRelationshipQuery(
                            conn.QueryFactory(),
                            result,
                            sorts?.SingleOrDefault(x => x.Field == relationshipColumn.ColumnName)
                        );
                    }
                }
            }

            foreach (var record in result)
            {
                foreach (ITrinityColumn column in columns)
                {
                    column.SetRecord(record);
                    column.Setup();
                    column.Format();
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


    /// <inheritdoc />
    public virtual async Task<object?> Delete()
    {
        var body = await Request.ReadFromJsonAsync<Dictionary<string, List<string>>>();

        if (body == null || !body.TryGetValue(PrimaryKeyColumn, out var keys))
            return null;

        await BeforeDelete(ref keys);

        using var connection = ConnectionFactory();

        var deleteQueryResult = await connection.Query()
            .From($"{Table} AS t")
            .WhereIn($"t.{PrimaryKeyColumn}", keys)
            .DeleteAsync();

        if (deleteQueryResult > 0)
        {
            var recordStr = keys.Count == 1 ? Localizer["record_was"] : Localizer["records_were"];
            TrinityNotifications.NotifySuccess(Localizer["record_deleted", recordStr]);
        }
        else
        {
            TrinityNotifications.NotifyError(Localizer["record_not_deleted"]);
        }

        await AfterDelete(keys, deleteQueryResult > 0);

        return await GetTableData();
    }
}