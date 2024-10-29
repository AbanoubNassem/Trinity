using SqlKata;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

public abstract partial class TrinityColumn<T, TDeserialization>
{
    /// <summary>
    /// Gets or sets a value indicating whether this column is sortable.
    /// </summary>
    public bool Sortable { get; protected set; }

    /// <summary>
    /// Gets or sets the callback function used for sorting this column.
    /// </summary>
    protected QueryCallbackWithString? SortCallback { get; set; }

    /// <summary>
    /// Sets this column as sortable with the specified sorting callback function.
    /// </summary>
    /// <param name="sortable">A value indicating whether this column is sortable.</param>
    /// <param name="sortCallback">The sorting callback function.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetAsSortable(bool sortable = true, QueryCallbackWithString? sortCallback = null)
    {
        Sortable = sortable;
        SortCallback = sortCallback;
        return (this as T)!;
    }


    /// <inheritdoc />
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