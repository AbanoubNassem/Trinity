using System.Security.Claims;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Providers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Pages;

public abstract class TrinityPage
{
    protected TrinityConfigurations Configurations { get; init; } = null!;
    protected IServiceProvider ServiceProvider { get; init; } = null!;
    protected HttpRequest Request { get; init; } = null!;
    protected HttpResponse Response { get; init; } = null!;
    protected ClaimsPrincipal User { get; init; } = null!;
    protected ILogger Logger { get; init; } = null!;
    protected ModelStateDictionary ModelState { get; init; } = null!;
    protected TrinityLocalizer Localizer { get; init; } = null!;
    
    public abstract string Slug { get; }
    public virtual string PageView { get; protected init; } = "Default";
    public virtual string? Label { get; protected init; }
    public virtual string? Icon { get; protected init; } = "pi pi-file";

    public virtual Task Setup()
    {
        return Task.CompletedTask;
    }

    public List<object> Schema => new(GetSchema());

    protected virtual List<ITrinityWidget> GetSchema()
    {
        return new List<ITrinityWidget>(0);
    }

    public virtual object? GetData()
    {
        return null;
    }

    public virtual bool CanView => User.IsAdmin();
}