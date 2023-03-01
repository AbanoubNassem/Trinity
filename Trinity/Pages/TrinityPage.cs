using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Configurations;
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
    protected ILogger Logger { get; init; } = null!;

    protected ModelStateDictionary ModelState { get; init; } = null!;

    public abstract string PageName { get; }

    public virtual string? Label { get; set; }

    public virtual string? To { get; set; }

    public virtual string? Icon { get; set; } = "pi pi-file";

    private readonly List<object> _schema = new();

    public virtual void Setup()
    {
    }

    public List<object> Schema => new(GetSchema());

    protected virtual List<ITrinityWidget> GetSchema()
    {
        return new List<ITrinityWidget>(0);
    }
}