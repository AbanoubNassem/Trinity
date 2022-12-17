namespace AbanoubNassem.Trinity.Components;

public interface IBaseComponent
{
    public string ComponentName { get; }
}

public abstract class BaseComponent<T> : IBaseComponent where T : BaseComponent<T>
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

    public T SetColumnSpan(int columnSpan = 12)
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
}