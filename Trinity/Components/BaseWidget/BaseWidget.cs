using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components.BaseWidget;

public abstract class BaseWidget<T> : BaseComponent<T, object>, IBaseWidget where T : BaseWidget<T>
{
    public override string Type => "Widget";
}