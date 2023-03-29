using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components.TrinityWidget;

/// <summary>
/// Represents an abstract class for a Trinity widget component.
/// </summary>
/// <typeparam name="T">The type of the Trinity widget component.</typeparam>
/// <remarks>
/// This class is used to define the base functionality of a Trinity widget component.
/// It implements the <see cref="ITrinityWidget"/> interface and inherits from the <see cref="TrinityComponent{T, TObject}"/> class.
/// </remarks>
public abstract class TrinityWidget<T> : TrinityComponent<T, object>, ITrinityWidget where T : TrinityWidget<T>
{
    /// <inheritdoc />
    public override string Type => "Widget";

    /// <summary>
    /// Gets or sets the height of the widget component.
    /// </summary>
    /// <value>
    /// The height of the widget component.
    /// </value>
    public string? Height { get; protected set; }

    /// <summary>
    /// Sets the height of the widget.
    /// </summary>
    /// <param name="height">The height of the widget component.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> widget.</returns>
    public T SetHeight(string height)
    {
        Height = height;
        return (this as T)!;
    }
}