using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.RequestHelpers;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace AbanoubNassem.Trinity.Resources;

public interface ITrinityResource
{
    public string? Label { get; set; }

    public string? PluralLabel { get; set; }

    public string? DbSetName { get; set; }

    public Task Setup();
    public Task<IPaginator> GetIndexData();
}

public abstract class TrinityResource<TModel> : ITrinityResource where TModel : class
{
    public virtual string? Label { get; set; }
    public virtual string? PluralLabel { get; set; }
    [JsonIgnore] public virtual string? DbSetName { get; set; }

    protected IServiceProvider ServiceProvider { get; init; } = null!;

    protected DbContext DbContext { get; init; } = null!;

    protected DbSet<TModel> DbSet { get; init; } = null!;

    protected HttpRequest Request { get; init; } = null!;

    protected HttpResponse Response { get; init; } = null!;

    public virtual async Task Setup()
    {
        await Task.CompletedTask;
    }

    public async Task<IPaginator> GetIndexData()
    {
        return await DbSet.Paginate(1, 12);
    }
}