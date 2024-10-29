using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components;

/// <summary>
/// An enumeration of the different types of dividers available.
/// </summary>
public enum DividerTypes : byte
{
    /// <summary>
    /// A solid line.
    /// </summary>
    Solid,

    /// <summary>
    /// A dashed line.
    /// </summary>
    Dashed,

    /// <summary>
    /// A dotted line.
    /// </summary>
    Dotted
}

/// <summary>
/// An enumeration of the different layouts of dividers available.
/// </summary>
public enum DividerLayouts : byte
{
    /// <summary>
    /// A vertical divider.
    /// </summary>
    Vertical,

    /// <summary>
    /// A horizontal divider.
    /// </summary>
    Horizontal,
}

/// <summary>
/// A component that represents a divider.
/// </summary>
public class DividerComponent : TrinityComponent<DividerComponent, string>, IFormComponent
{
    /// <inheritdoc />
    public override string ComponentName => "DividerComponent";

    /// <inheritdoc />
    public override string Type => "Component";

    /// <summary>
    /// The type of the divider.
    /// </summary>
    /// <remarks>
    /// The default value is "solid".
    /// </remarks>
    public string DividerType { get; protected set; } = "solid";

    /// <summary>
    /// Sets the type of the divider.
    /// </summary>
    /// <param name="type">The type of the divider.</param>
    /// <returns>The <see cref="DividerComponent"/> instance.</returns>
    public DividerComponent SetDividerType(DividerTypes type)
    {
        DividerType = Enum.GetName(type)?.ToLower() ?? "solid";
        return this;
    }

    /// <summary>
    /// The layout of the divider.
    /// </summary>
    /// <remarks>
    /// The default value is "horizontal".
    /// </remarks>
    public string DividerLayout { get; protected set; } = "horizontal";

    /// <summary>
    /// Sets the layout of the divider.
    /// </summary>
    /// <param name="layout">The layout of the divider.</param>
    /// <returns>The <see cref="DividerComponent"/> instance.</returns>
    public DividerComponent SetDividerLayout(DividerLayouts layout)
    {
        DividerLayout = Enum.GetName(layout)?.ToLower() ?? "horizontal";
        return this;
    }

    /// <summary>
    /// The color of the divider.
    /// </summary>
    public string? Color { get; protected set; }

    /// <summary>
    /// Sets the color of the divider.
    /// </summary>
    /// <param name="color">The color of the divider.</param>
    /// <returns>The <see cref="DividerComponent"/> instance.</returns>
    public DividerComponent SetColor(string color)
    {
        Color = color;
        return this;
    }
}