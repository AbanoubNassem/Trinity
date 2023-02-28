using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components;

public enum DividerTypes : byte
{
    Solid,
    Dashed,
    Dotted
}

public enum DividerLayouts : byte
{
    Vertical,
    Horizontal,
}

public class DividerComponent : TrinityComponent<DividerComponent, string>, IFormComponent
{
    public override string ComponentName => "DividerComponent";
    public override string Type => "Component";

    public string DividerType { get; protected set; } = "solid";

    public DividerComponent SetDividerType(DividerTypes type)
    {
        DividerType = Enum.GetName(type)?.ToLower() ?? "solid";
        return this;
    }

    public string DividerLayout { get; protected set; } = "horizontal";

    public DividerComponent SetDividerLayout(DividerLayouts layout)
    {
        DividerLayout = Enum.GetName(layout)?.ToLower() ?? "horizontal";
        return this;
    }

    public string? Color { get; protected set; }

    public DividerComponent SetColor(string color)
    {
        Color = color;
        return this;
    }
}