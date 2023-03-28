using System.Data;
using System.Security.Claims;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Providers;
using AbanoubNassem.Trinity.Validators;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Resources;

/// <summary>
/// The Trinity Resource.
/// </summary>
/// <typeparam name="TPrimaryKeyType">
/// The PrimaryKey-Type used in the Table , whether it's <see cref="int"/>
/// or <see cref="Guid"/> etc.
/// </typeparam>
public abstract partial class TrinityResource<TPrimaryKeyType> : ITrinityResource
{
    /// <summary>
    /// A reference to <see cref="TrinityConfigurations"/> in the <see cref="IServiceProvider"/>.
    /// </summary>
    protected TrinityConfigurations Configurations { get; init; } = null!;

    /// <summary>
    /// A reference to the <see cref="IServiceProvider"/> of the app.
    /// </summary>
    protected IServiceProvider ServiceProvider { get; init; } = null!;

    /// <summary>
    /// A reference to the current <see cref="HttpRequest"/>.
    /// </summary>
    protected HttpRequest Request { get; init; } = null!;

    /// <summary>
    /// A reference to the current <see cref="HttpResponse"/>.
    /// </summary>
    protected HttpResponse Response { get; init; } = null!;

    /// <summary>
    /// A reference to the current User <see cref="ClaimsPrincipal"/>.
    /// </summary>
    protected ClaimsPrincipal User { get; init; } = null!;

    /// <summary>
    ///  A reference to the current <see cref="ILogger{TrinityResource}"/>.
    /// </summary>
    protected ILogger Logger { get; init; } = null!;

    /// <summary>
    /// A reference to the current <see cref="ModelStateDictionary"/>.
    /// </summary>
    protected ModelStateDictionary ModelState { get; init; } = null!;

    /// <summary>
    /// An instance of the Resource Validator <see cref="ResourceValidator"/>.
    /// </summary>
    protected ResourceValidator ResourceValidator { get; } = new();

    /// <summary>
    /// A reference to the ConnectionFactory.
    /// </summary>
    protected Func<IDbConnection> ConnectionFactory { get; init; } = null!;
    
    /// <summary>
    /// A reference to the singleton of <see cref="TrinityLocalizer"/>. 
    /// </summary>
    protected TrinityLocalizer Localizer { get; init; } = null!;

    /// <summary>
    /// Whether the current request is a Create request or not.
    /// </summary>
    protected bool IsCreateRequest { get; init; }
    
    /// <summary>
    /// Whether the current request is a Update request or not.
    /// </summary>
    protected bool IsUpdateRequest { get; init; }

    /// <summary>
    /// The resource name.
    /// </summary>
    public string Name { get; init; } = null!;

    /// <inheritdoc />
    public virtual string? Label { get; init; }

    /// <inheritdoc />
    public virtual string? PluralLabel { get; init; }
    
    /// <summary>
    /// Enabling showGridlines displays borders between Table cells.
    /// </summary>
    public virtual bool ShowGridlines => false;
    
    /// <summary>
    /// Alternating rows are displayed when stripedRows property is present.
    /// </summary>
    public virtual bool StripedRows => false;
    
    /// <summary>
    /// The Navigation icon for the resource.
    /// </summary>
    public virtual string? Icon => null;
    
    /// <summary>
    /// The Table primary key, to be used when Querying the records from the Table.
    /// </summary>
    public virtual string PrimaryKeyColumn => "id";
    
    /// <summary>
    /// The table associated with the resource in the Database.
    /// </summary>
    protected virtual string? Table { get; init; }

    /// <inheritdoc />
    public virtual async Task Setup()
    {
        await Task.CompletedTask;
    }
}

/// <inheritdoc />
public abstract class TrinityResource : TrinityResource<int>
{
}