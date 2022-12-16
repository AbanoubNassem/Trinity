using System.Data;
using System.Text.Json;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Fields;
using AbanoubNassem.Trinity.RequestHelpers;
using DapperQueryBuilder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Resources;

public abstract class TrinityResource
{
    protected TrinityConfigurations Configurations { get; init; } = null!;

    protected IServiceProvider ServiceProvider { get; init; } = null!;
    protected HttpRequest Request { get; init; } = null!;

    protected HttpResponse Response { get; init; } = null!;
    protected ILogger Logger { get; init; } = null!;
    [JsonIgnore] protected Func<IDbConnection> ConnectionFactory { get; init; } = null!;

    private string? _label = null;
    public virtual string? Label => _label;

    private string? _pluralLabel = null;
    public virtual string? PluralLabel => _pluralLabel;
    public virtual bool ShowGridlines => false;
    public virtual bool StripedRows => false;
    public virtual string? Icon => null;

    private string? _table = null;
    [JsonIgnore] public virtual string? Table => _table;

    private readonly Dictionary<string, object> _fields = new();
    
    public virtual async Task Setup()
    {
        await Task.CompletedTask;
    }

    public abstract IList<BaseField> GetFields();

    public Dictionary<string, object> Fields
    {
        get
        {
            if (_fields.Count != 0) return _fields;

            foreach (var field in GetFields())
            {
                _fields.Add(field.ColumnName, field);
            }

            return _fields;
        }
    }

    public virtual async Task<IPaginator?> GetIndexData()
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
            var filters = new Filters(Filters.FiltersType.OR);
            var countFilters = new Filters(Filters.FiltersType.OR);
            if (Request.Query.TryGetValue("globalSearch", out var globalSearchStr) &&
                !string.IsNullOrEmpty(globalSearchStr))
            {
                globalSearch = $@"%{globalSearchStr.ToString().ToLower()}%";
            }


            using var conn = ConnectionFactory();

            var query = (FluentQueryBuilder)conn.FluentQueryBuilder();
            var countQuery = (FluentQueryBuilder)conn.FluentQueryBuilder();

            countQuery
                .Select($"COUNT(*)")
                .From($"{Table:raw} AS t");

            query.From($"{Table:raw} AS t");

            foreach (BaseField field in Fields.Values)
            {
                field.SelectQuery(query);

                if (globalSearch != null && field.IsGloballySearchable)
                {
                    field.FilterQuery(countFilters, globalSearch);
                    field.FilterQuery(filters, globalSearch);
                }
                else if (requestFilters != null && requestFilters.ContainsKey(field.ColumnName))
                {
                    var search = $@"%{requestFilters[field.ColumnName].ToLower()}%";

                    field.FilterQuery(countFilters, search);
                    field.FilterQuery(filters, search);
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
                    if (!Fields.TryGetValue(sort.Field, out var field) || field is HasRelationshipField) continue;

                    var direction = sort.Order == 1 ? "ASC" : "DESC";

                    query.OrderBy($"t.{sort.Field:raw} {direction:raw}");
                }
            }


            var count = await countQuery.QuerySingleAsync<int>();

            var result = (await query.Limit((page - 1) * perPage, perPage).QueryAsync())
                .Cast<IDictionary<string, object?>>().ToList();

            if (result.Any())
            {
                foreach (BaseField filed in Fields.Values)
                {
                    if (filed is not HasRelationshipField field) continue;
                    result = await field.RunRelationQuery((FluentQueryBuilder)conn.FluentQueryBuilder(), result,
                        sorts?.SingleOrDefault(x => x.Field == field.ColumnName)
                    );
                }
            }

            foreach (var record in result)
            {
                foreach (BaseField field in Fields.Values)
                {
                    field.Format(record);
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
}