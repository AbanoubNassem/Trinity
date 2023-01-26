using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Components.BaseColumn;

public abstract partial class BaseColumn<T, TDeserialization>
{
    public bool Sortable { get; protected set; }

    protected QueryCallbackWithString? SortCallback { get; set; }

    public T SetAsSortable(bool sortable = true, QueryCallbackWithString? sortCallback = null)
    {
        Sortable = sortable;
        SortCallback = sortCallback;
        return (this as T)!;
    }

    public virtual void Sort(FluentQueryBuilder query, string direction)
    {
        if (SortCallback != null)
            SortCallback(query, direction);
        else
            query.OrderBy($"t.{ColumnName:raw} {direction:raw}");
    }
}