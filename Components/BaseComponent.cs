namespace AbanoubNassem.Trinity.Components;

public interface IBaseComponent
{
    public string ComponentName { get; }
    
    bool Hidden { get; set; }
}

public abstract class BaseComponent<T, TDeserialization> : IBaseComponent where T : BaseComponent<T, TDeserialization>
{
    public abstract string ComponentName { get; }

    public abstract string Type { get; }

    public virtual string Label { get; protected set; } = null!;

    public T SetLabel(string value)
    {
        Label = value;
        return (this as T)!;
    }

    public virtual int ColumnSpan { get; protected set; }

    public T SetColumnSpan(int columnSpan = 0)
    {
        ColumnSpan = columnSpan;
        return (this as T)!;
    }

    public bool Toggleable { get; protected set; }

    public bool IsToggledHiddenByDefault { get; protected set; }

    public T SetAsToggleable(bool toggleable = true, bool isToggledHiddenByDefault = true)
    {
        Toggleable = toggleable;
        IsToggledHiddenByDefault = isToggledHiddenByDefault;
        return (this as T)!;
    }

    public TDeserialization? DefaultValue { get; protected set; }

    public T SetDefaultValue(TDeserialization value)
    {
        DefaultValue = value;
        return (this as T)!;
    }

    public bool Hidden { get;  set; }

    public T SetAsHidden(bool value = true)
    {
        Hidden = value;
        Visible = !value;
        return (this as T)!;
    }

    public bool Visible { get; protected set; }

    public T SetAsVisible(bool value = true)
    {
        Visible = value;
        Hidden = !value;
        return (this as T)!;
    }
    
    public string? ToolTip { get; protected set; }

    public T SetToolTip(string toolTip)
    {
        ToolTip = toolTip;
        return (this as T)!;
    }
}