using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components.TrinityLayout;

public interface ITrinityLayout : ITrinityComponent, IHasSchema
{
}

public abstract class TrinityLayout<T> : TrinityComponent<T, object?>, ITrinityLayout, IFormComponent where T : TrinityLayout<T>
{
    protected TrinityLayout(IEnumerable<IFormComponent> schema , int columns = 0)
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