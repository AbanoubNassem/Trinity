using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components;

public abstract class TrinityComponent<T, TDeserialization> : ITrinityComponent where T : TrinityComponent<T, TDeserialization>
{
    public abstract string ComponentName { get; }

    public abstract string Type { get; }

    public virtual string Label { get; protected set; } = null!;

    public T SetLabel(string value)
    {
        Label = value;
        return (this as T)!;
    }

    private string? _id;
    public string Id => $"id_{_id ?? GetHashCode().ToString()}";

    public T SetId(string value)
    {
        _id = value;
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

    public bool Hidden { get; set; }

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

    public string? Tooltip { get; protected set; }

    public T SetTooltip(string toolTip)
    {
        Tooltip = toolTip;
        return (this as T)!;
    }

    public Dictionary<string, object>? Style { get; protected set; }

    public T SetStyle(Dictionary<string, object> style)
    {
        Style = style;
        return (this as T)!;
    }
    
    public bool Disabled { get; protected set; }

    public T SetAsDisabled(bool value = true)
    {
        Disabled = value;
        return (this as T)!;
    }
}