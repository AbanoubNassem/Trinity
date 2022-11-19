using System.Collections;
using System.Data;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.RequestHelpers;
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
    public IDictionary GetFields();
    public Task SetFields();
}

public abstract class TrinityResource<TModel> : ITrinityResource where TModel : class
{
    protected IServiceProvider ServiceProvider { get; init; } = null!;

    protected HttpRequest Request { get; init; } = null!;

    protected HttpResponse Response { get; init; } = null!;
    protected FieldManager<TModel> Fields { get; init; } = new();
    [JsonIgnore] protected Func<IDbConnection> ConnectionFactory { get; init; } = null!;

    public virtual string? Label { get; set; }
    public virtual string? PluralLabel { get; set; }

    public TModel? Record { get; set; }
    public virtual string? Icon => null;
    [JsonIgnore] public virtual string? Table { get; set; }

    public virtual async Task Setup()
    {
        await Task.CompletedTask;
    }

    public IDictionary GetFields()
    {
        return Fields.Fields;
    }

    public abstract Task SetFields();
    public virtual string? GetDbSetName() => null;


    public virtual async Task<IPaginator> GetIndexData()
    {
        using var conn = ConnectionFactory();

        var query = (FluentQueryBuilder)conn.FluentQueryBuilder();

        foreach (var field in Fields.Fields.Values)
        {
            query.Select($"{field.Attribute:raw}");
        }

        query.From($"{Table:raw}");

        return await query.Paginate<TModel>(Table!, 1, 12);
    }
}