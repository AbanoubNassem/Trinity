namespace AbanoubNassem.Trinity.Components;

public interface IBaseComponent
{
    public string ComponentName { get; }
}

public abstract class BaseComponent<T> : IBaseComponent where T : BaseComponent<T>
{
    public abstract string ComponentName { get; }

    public abstract string Type { get; }

    public virtual int ColumnSpan { get; protected set; }

    public T SetColumnSpan(int columnSpan = 12)
    {
        ColumnSpan = columnSpan;
        return (this as T)!;
    }
}