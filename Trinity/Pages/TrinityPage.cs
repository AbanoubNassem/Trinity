using System.Security.Claims;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Providers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Pages;

/// <summary>
/// The base page class for Trinity framework.
/// </summary>
public abstract class TrinityPage
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
    ///  A reference to the current <see cref="ILogger{TrinityPage}"/>.
    /// </summary>
    protected ILogger Logger { get; init; } = null!;

    /// <summary>
    /// A reference to the current <see cref="ModelStateDictionary"/>.
    /// </summary>
    protected ModelStateDictionary ModelState { get; init; } = null!;

    /// <summary>
    /// A reference to the singleton of <see cref="TrinityLocalizer"/>. 
    /// </summary>
    protected TrinityLocalizer Localizer { get; init; } = null!;

    /// <summary>
    /// The page slug.
    /// </summary>
    public abstract string Slug { get; }

    /// <summary>
    /// The name of the view to use for rendering the page.
    /// </summary>
    public virtual string PageView { get; protected init; } = "Default";

    /// <summary>
    /// The label for the page.
    /// </summary>
    public virtual string? Label { get; protected init; }

    /// <summary>
    /// The navigation icon to use for the page.
    /// </summary>
    public virtual string? Icon { get; protected init; } = "pi pi-file";

    /// <summary>
    /// Setup is being called on each request, once the Page is resolved from the The <see cref="IServiceProvider"/>.
    /// Can be used to resolve extra Services or do some logic before using the Resource.
    /// </summary>
    public virtual Task Setup()
    {
        return Task.CompletedTask;
    }

    /// <summary>
    /// The schema for the page.
    /// </summary>
    public List<object> Schema => new(GetSchema().Select(x =>
    {
        x.Init(ServiceProvider);
        x.Setup();
        return x;
    }));

    /// <summary>
    /// Gets the schema for the page.
    /// </summary>
    /// <returns>The schema for the page.</returns>
    protected virtual List<ITrinityWidget> GetSchema()
    {
        return new List<ITrinityWidget>(0);
    }

    /// <summary>
    /// Gets the data for the page.
    /// </summary>
    /// <returns>The data for the page.</returns>
    public virtual object? GetData()
    {
        return null;
    }

    /// <summary>
    /// Gets a value indicating whether the page can be viewed by the user.
    /// </summary>

    public virtual bool CanView => User.IsTrinityAdmin();
}