namespace AbanoubNassem.Trinity.Components;

public interface IBaseLayout : IBaseComponent
{
    public List<object> Schema { get; set; }

    public int Columns { get; set; }
}

public abstract class BaseLayout<T> : BaseComponent<BaseLayout<T>> where T : BaseLayout<T>
{
    protected BaseLayout(List<IBaseComponent> schema, int columns = 1)
    {
        Schema = schema.Cast<object>().ToList();
        Columns = columns;
    }

    public override int ColumnSpan { get; protected set; } = 12;

    public override string Type => "Layout";
    public List<object> Schema { get; set; }

    public T SetSchema(List<IBaseComponent> schema)
    {
        Schema = schema.Cast<object>().ToList();
        return (this as T)!;
    }

    public int Columns { get; protected set; }

    public T SetColumns(int columns = 1)
    {
        Columns = columns;
        return (this as T)!;
    }
}