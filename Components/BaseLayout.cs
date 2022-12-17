namespace AbanoubNassem.Trinity.Components;

public abstract class BaseLayout : BaseComponent
{
    protected BaseLayout(List<BaseComponent> schema, int columns = 1)
    {
        Schema = schema.Cast<object>().ToList();
        Columns = columns;
    }
    
    public List<object> Schema { get; protected set; }

    public virtual BaseLayout SetSchema(List<BaseComponent> schema)
    {
        Schema = schema.Cast<object>().ToList();
        return this;
    }

    public int Columns { get; protected set; }

    public virtual BaseLayout SetColumns(int columns = 1)
    {
        Columns = columns;
        return this;
    }
}