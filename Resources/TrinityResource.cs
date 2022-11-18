using System.Collections;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.RequestHelpers;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace AbanoubNassem.Trinity.Resources;

public interface ITrinityResource
{
    public string? Label { get; set; }
    public string? PluralLabel { get; set; }
    public string? GetDbSetName();
    public Task Setup();
    public Task<IPaginator> GetIndexData();
    public IDictionary GetFields();
    public Task SetFields();

}

public abstract class TrinityResource<TModel> : ITrinityResource where TModel : class
{
    protected IServiceProvider ServiceProvider { get; init; } = null!;
    
    protected DbContext DbContext { get; init; } = null!;
    protected DbSet<TModel> DbSet { get; init; } = null!;

    protected HttpRequest Request { get; init; } = null!;

    protected HttpResponse Response { get; init; } = null!;
    protected FieldManager<TModel> Fields { get; init; } = new();

    
    public virtual string? Label { get; set; }
    public virtual string? PluralLabel { get; set; }

    public TModel? Record { get; set; }
    public virtual string? Icon => null;


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
    public async Task<IPaginator> GetIndexData()
    {
        return await DbSet.Paginate(1, 12);
    }
}