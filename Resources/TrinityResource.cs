using System.Data;
using System.Text.Json;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Fields;
using AbanoubNassem.Trinity.RequestHelpers;
using Dapper;
using DapperQueryBuilder;
using Microsoft.AspNetCore.Http;

namespace AbanoubNassem.Trinity.Resources;

public interface ITrinityResource
{
    public string? Label { get; set; }
    public string? PluralLabel { get; set; }
    public string? Table { get; set; }
    public string? GetDbSetName();
    public Task Setup();
    public Task<IPaginator> GetIndexData();

    public Dictionary<string, object> Fields { get; }
}

public abstract class TrinityResource : ITrinityResource
{
    protected TrinityConfigurations Configurations { get; init; } = null!;

    protected IServiceProvider ServiceProvider { get; init; } = null!;
    protected HttpRequest Request { get; init; } = null!;

    protected HttpResponse Response { get; init; } = null!;
    [JsonIgnore] protected Func<IDbConnection> ConnectionFactory { get; init; } = null!;

    public virtual string? Label { get; set; }
    public virtual string? PluralLabel { get; set; }

    public object? Record { get; set; }
    public virtual string? Icon => null;
    [JsonIgnore] public virtual string? Table { get; set; }

    private Dictionary<string, object> _fields = new();

    public virtual string? GetDbSetName() => null;

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


    public virtual async Task<IPaginator> GetIndexData()
    {
        var page = int.Parse(Request.Query["page"].FirstOrDefault() ?? "1");
        var perPage = int.Parse(Request.Query["perPage"].FirstOrDefault() ?? "10");
        if (perPage > Configurations.MaxPaginationPerPageCount)
        {
            perPage = Configurations.MaxPaginationPerPageCount;
        }

        List<Sort>? sorts = null;

        if (Request.Query.TryGetValue("sort", out var s))
        {
            sorts = JsonSerializer.Deserialize<List<Sort>>(s, new JsonSerializerOptions()
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
        }

        using var conn = ConnectionFactory();

        var query = (FluentQueryBuilder)conn.FluentQueryBuilder();

        query.From($"{Table:raw} t");


        foreach (BaseField field in Fields.Values)
        {
            field.SelectQuery(query);
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

        var countQuery = query.Connection.FluentQueryBuilder()
            .Select($"COUNT(*)")
            .From($"{Table:raw}").Sql;

        var selectQuery = query
            .Limit((page - 1) * perPage, perPage)
            .Sql;

        Console.WriteLine(selectQuery);

        using var multi =
            await query.Connection.QueryMultipleAsync($"{countQuery};{selectQuery};");

        var count = await multi.ReadSingleAsync<int>();

        var result = ((await multi.ReadAsync()).Cast<IDictionary<string, object?>>()).ToList();

        foreach (BaseField filed in Fields.Values)
        {
            if (filed is not HasRelationshipField field) continue;
            result = await field.RunRelationQuery((FluentQueryBuilder)conn.FluentQueryBuilder(), result,
                sorts?.SingleOrDefault(x => x.Field == field.ColumnName)
            );
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
}