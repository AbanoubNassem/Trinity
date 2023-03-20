using SqlKata;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

public abstract partial class TrinityColumn<T, TDeserialization>
{
    public bool Sortable { get; protected set; }

    protected QueryCallbackWithString? SortCallback { get; set; }

    public T SetAsSortable(bool sortable = true, QueryCallbackWithString? sortCallback = null)
    {
        Sortable = sortable;
        SortCallback = sortCallback;
        return (this as T)!;
    }

    public virtual void Sort(Query query, string direction)
    {
        if (SortCallback != null)
            SortCallback(query, direction);
        else
        {
            if (direction == "ASC")
                query.OrderBy($"t.{ColumnName}");
            else query.OrderByDesc($"t.{ColumnName}");
        }
    }
}