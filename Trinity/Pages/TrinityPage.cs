using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Extensions;
using Humanizer;

namespace AbanoubNassem.Trinity.Pages;

/// <summary>
/// The base page class for Trinity framework.
/// </summary>
public abstract class TrinityPage : CanMakeComponent
{
    private readonly string? _label;

    /// <summary>
    /// The page slug.
    /// </summary>
    public abstract string Slug { get; }

    /// <summary>
    /// The name of the view to use for rendering the page.
    /// </summary>
    public virtual string PageView => "Default";

    /// <summary>
    /// The label for the page.
    /// </summary>
    public virtual string? Label
    {
        get => _label ?? Slug.Titleize();
        protected init => _label = value;
    }

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
    public List<object> Schema => new(GetSchema().Where(x => x.Visible || !x.Hidden));

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