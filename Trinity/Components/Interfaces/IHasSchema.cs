namespace AbanoubNassem.Trinity.Components.Interfaces;

/// <summary>
/// Interface for components that have a schema property.
/// </summary>
public interface IHasSchema
{
    /// <summary>
    /// Gets or sets the schema for the component.
    /// </summary>
    /// <remarks>
    /// The schema can be a list of objects of any <see cref="ITrinityComponent"/>.
    /// </remarks>
    public List<object>? Schema { get; set; }
}