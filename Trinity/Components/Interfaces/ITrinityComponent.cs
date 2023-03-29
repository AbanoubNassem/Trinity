namespace AbanoubNassem.Trinity.Components.Interfaces;

/// <summary>
/// The Basic Trinity Component definition. 
/// </summary>
public interface ITrinityComponent
{
    /// <summary>
    /// The component name in the front-end side.
    /// </summary>
    public string ComponentName { get; }

    /// <summary>
    /// Whether the component is hidden or not.
    /// </summary>
    public bool Hidden { get; set; }

    /// <summary>
    /// Initialize the Component on each request.
    /// </summary>
    /// <param name="serviceProvider">The app <see cref="IServiceProvider"/></param>
    public void Init(IServiceProvider serviceProvider);

    /// <summary>
    /// Setup is being called on each request, once the Component is resolved.
    /// Can be used to resolve extra Services or do some logic before using the Component.
    /// </summary>
    public void Setup();
}