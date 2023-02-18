using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components.BaseLayout;

public interface IBaseLayout : IBaseComponent, IHasSchema
{

}

public abstract class BaseLayout<T> : BaseComponent<T, object?>, IBaseLayout, IFormComponent where T : BaseLayout<T>
{
    protected BaseLayout(IEnumerable<IFormComponent> schema , int columns = 0)
    {
        Schema = schema.Cast<object>().ToList();
        Columns = columns;
    }

    public override int ColumnSpan { get; protected set; } = 12;

    public override string Type => "Layout";
    public List<object>? Schema { get; set; }

    public T SetSchema(List<IFormComponent> schema)
    {
        Schema = schema.Cast<object>().ToList();
        return (this as T)!;
    }

    public int Columns { get; protected set; }

    public T SetColumns(int columns = 0)
    {
        Columns = columns;
        return (this as T)!;
    }
}