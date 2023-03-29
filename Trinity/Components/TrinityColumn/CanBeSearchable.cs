using AbanoubNassem.Trinity.Fields;
using SqlKata;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

public abstract partial class TrinityColumn<T, TDeserialization>
{
    /// <summary>
    /// Gets or sets the callback function used for searching/filtering this column.
    /// </summary>
    protected FiltersCallback? SearchCallback { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether this column is searchable.
    /// </summary>
    public bool Searchable { get; protected set; }

    /// <summary>
    /// Gets or sets a value indicating whether this column is globally searchable.
    /// </summary>
    public bool IsGloballySearchable { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether searches/filters on this column are case sensitive.
    /// </summary>
    protected bool CaseSensitive { get; set; }

    /// <summary>
    /// Sets this column as searchable with the specified search/filtering callback function.
    /// </summary>
    /// <param name="searchable">A value indicating whether this column is searchable.</param>
    /// <param name="globallySearchable">A value indicating whether this column is globally searchable.</param>
    /// <param name="caseSensitive">A value indicating whether searches/filters on this column are case sensitive.</param>
    /// <param name="searchCallback">The search/filtering callback function.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public virtual T SetAsSearchable(bool searchable = true, bool globallySearchable = true,
        bool caseSensitive = false,
        FiltersCallback? searchCallback = null)
    {
        Searchable = searchable;
        IsGloballySearchable = globallySearchable;
        SearchCallback = searchCallback;
        CaseSensitive = caseSensitive;
        if (!IsGloballySearchable && searchable)
        {
            SetCustomFilter(new TextField(ColumnName)
                .SetLabel(Label)
                .SetPlaceholder($"Search using {Label}")
            );
        }

        return (this as T)!;
    }


    /// <inheritdoc />
    public virtual void Filter(Query query, string search)
    {
        if (SearchCallback != null)
        {
            SearchCallback.Invoke(query, search);
            return;
        }

        query.WhereLike($"t.{ColumnName}", $"%{search}%", CaseSensitive);
    }
}