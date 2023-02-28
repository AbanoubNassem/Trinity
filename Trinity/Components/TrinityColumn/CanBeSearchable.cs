using AbanoubNassem.Trinity.Fields;
using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

public abstract partial class TrinityColumn<T, TDeserialization>
{
    protected FiltersCallback? SearchCallback { get; set; }

    public bool Searchable { get; protected set; }

    public bool IsGloballySearchable { get; set; }

    public virtual T SetAsSearchable(bool searchable = true, bool globallySearchable = true,
        FiltersCallback? searchCallback = null)
    {
        Searchable = searchable;
        IsGloballySearchable = globallySearchable;
        SearchCallback = searchCallback;
        if (!IsGloballySearchable && searchable)
        {
            SetCustomFilter(new TextField(ColumnName)
                .SetLabel(Label)
                .SetPlaceholder($"Search using {Label}")
            );
        }

        return (this as T)!;
    }

    public virtual void Filter(Filters filters, string search)
    {
        if (SearchCallback != null)
        {
            SearchCallback.Invoke(filters, search);
            return;
        }

        var s = $"%{search.ToLower()}%";
        filters.Add(new Filter($@"LOWER(t.{ColumnName:raw}) LIKE {s}"));
    }
}