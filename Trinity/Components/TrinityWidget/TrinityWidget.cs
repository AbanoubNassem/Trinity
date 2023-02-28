using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components.TrinityWidget;

public abstract class TrinityWidget<T> : TrinityComponent<T, object>, ITrinityWidget where T : TrinityWidget<T>
{
    public override string Type => "Widget";

    public string? Height { get; protected set; }

    public T SetHeight(string height)
    {
        Height = height;
        return (this as T)!;
    }
}