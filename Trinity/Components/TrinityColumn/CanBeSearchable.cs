using AbanoubNassem.Trinity.Fields;
using SqlKata;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

public abstract partial class TrinityColumn<T, TDeserialization>
{
    protected FiltersCallback? SearchCallback { get; set; }

    public bool Searchable { get; protected set; }

    public bool IsGloballySearchable { get; set; }

    protected bool CaseSensitive { get; set; }

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