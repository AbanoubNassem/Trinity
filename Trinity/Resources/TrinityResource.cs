using System.Data;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Validators;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource
{
    protected TrinityConfigurations Configurations { get; init; } = null!;
    protected IServiceProvider ServiceProvider { get; init; } = null!;
    protected HttpRequest Request { get; init; } = null!;
    protected HttpResponse Response { get; init; } = null!;
    protected ILogger Logger { get; init; } = null!;
    protected ModelStateDictionary ModelState { get; init; } = null!;
    protected ResourceValidator ResourceValidator { get; } = new();
    protected Func<IDbConnection> ConnectionFactory { get; init; } = null!;
    protected IStringLocalizer Localizer { get; init; } = null!;

    public string Name { get; init; } = null!;

    private string? _label = null;
    public virtual string? Label => _label;

    private string? _pluralLabel = null;
    public virtual string? PluralLabel => _pluralLabel;
    public virtual bool ShowGridlines => false;
    public virtual bool StripedRows => false;
    public virtual string? Icon => null;

    public virtual string PrimaryKeyColumn => "id";

    private string? _table = null;
    [JsonIgnore] public virtual string? Table => _table;
}