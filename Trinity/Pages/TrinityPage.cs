using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Configurations;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Pages;

public abstract class TrinityPage
{
    [JsonIgnore] public TrinityConfigurations Configurations { get; init; } = null!;
    [JsonIgnore] public IServiceProvider ServiceProvider { get; set; } = null!;
    [JsonIgnore] public HttpRequest Request { get; set; } = null!;
    [JsonIgnore] public HttpResponse Response { get; set; } = null!;
    [JsonIgnore] public ILogger Logger { get; set; } = null!;

    public abstract string PageName { get; }

    public virtual string? Label { get; set; }

    public virtual string? To { get; set; }

    public virtual string? Icon { get; set; } = "pi pi-file";

    private readonly List<object> _schema = new();
    private DateTime _lastWidgetsCacheTime = DateTime.Now;

    public virtual void Setup()
    {
    }

    public List<object> Schema
    {
        get
        {
            if (_schema.Any() ||
                (Configurations.CacheWidgetsFor != TimeSpan.Zero &&
                 _lastWidgetsCacheTime.Add(Configurations.CacheWidgetsFor) < DateTime.Now)
               )
                return _schema;

            _schema.Clear();
            _schema.AddRange(GetSchema());
            _lastWidgetsCacheTime = DateTime.Now;

            return _schema;
        }
    }

    protected virtual List<ITrinityWidget> GetSchema()
    {
        return new List<ITrinityWidget>(0);
    }
}