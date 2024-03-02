using System.Collections.Generic;
using System.Text.Json;
using AbanoubNassem.Trinity.Columns;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.RequestHelpers;
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

            query.From($"{Table} AS t");

            query.Select($"t.{PrimaryKeyColumn}");

            var columns = Columns;
            foreach (ITrinityColumn column in columns)
            {
                if (column.IsCustomColumn) continue;

                column.SelectQuery(query);

                if (globalSearch != null && column.IsGloballySearchable)
                {
                    column.Filter(query, globalSearch);
                }
                else if (requestFilters != null && requestFilters.TryGetValue(column.ColumnName, out var search))
                {
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

            var count = await query.Clone().CountAsync<int>();

            var limit = query.Offset((page - 1) * perPage).Limit(perPage);

            OnIndexQuery(ref query);

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
                    column.Format();
                }

                GenerateRecordActions(record);
                await BeforeIndex(record);
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

    private void GenerateRecordActions(IDictionary<string, object?> record)
    {
        var actions = new List<string>();
        foreach (ITrinityAction act in Actions)
        {
            act.SetRecord(record);
            if (act.Hidden || !act.Visible) continue;
            actions.Add(act.ActionName);
        }
        record.Add("actions", actions);
    }

    /// <summary>
    /// Get the deletable records based on given keys
    /// </summary>
    /// <param name="keys">Keys of the deletable records.</param>
    /// <returns>the deletable records</returns>
    public virtual async Task<List<IDictionary<string, object?>>?> GetDeletableData(List<string> keys)
    {
        await BeforeDelete(keys);

        using var connection = ConnectionFactory();

        var query = connection.Query()
            .From($"{Table}")
            .WhereIn($"{PrimaryKeyColumn}", keys);
        OnDeleteQuery(ref query);

        return (await query.GetAsync()).Cast<IDictionary<string, object?>>().ToList();
    }

    /// <inheritdoc />
    public virtual async Task<object?> Delete(List<IDictionary<string, object?>> records)
    {
        var keys = records.Select(x => x[PrimaryKeyColumn]!.ToString()!).ToList();

        await BeforeDelete(keys);

        using var connection = ConnectionFactory();

        var query = connection.Query()
            .From($"{Table}")
            .WhereIn($"{PrimaryKeyColumn}", keys);
        OnDeleteQuery(ref query);

        var deleteQueryResult = await query.DeleteAsync();


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