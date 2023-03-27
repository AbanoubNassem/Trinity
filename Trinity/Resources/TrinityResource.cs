using System.Data;
using System.Security.Claims;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Providers;
using AbanoubNassem.Trinity.Validators;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType> : ITrinityResource
{
    protected TrinityConfigurations Configurations { get; init; } = null!;
    protected IServiceProvider ServiceProvider { get; init; } = null!;
    protected HttpRequest Request { get; init; } = null!;
    protected HttpResponse Response { get; init; } = null!;
    protected ClaimsPrincipal User { get; init; } = null!;
    protected ILogger Logger { get; init; } = null!;
    protected ModelStateDictionary ModelState { get; init; } = null!;
    protected ResourceValidator ResourceValidator { get; } = new();
    protected Func<IDbConnection> ConnectionFactory { get; init; } = null!;
    protected TrinityLocalizer Localizer { get; init; } = null!;

    protected bool IsCreateRequest { get; init; }
    protected bool IsUpdateRequest { get; init; } 

    public string Name { get; init; } = null!;
    public virtual string? Label { get; init; }
    public virtual string? PluralLabel { get; init; }
    public virtual bool ShowGridlines => false;
    public virtual bool StripedRows => false;
    public virtual string? Icon => null;
    public virtual string PrimaryKeyColumn => "id";
    protected virtual string? Table { get; init; }
    
    public virtual async Task Setup()
    {
        await Task.CompletedTask;
    }
}

public abstract class TrinityResource : TrinityResource<int>
{
}