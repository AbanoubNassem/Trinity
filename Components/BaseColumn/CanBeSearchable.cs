using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Components.BaseColumn;

public abstract partial class BaseColumn<T, TDeserialization>
{
    protected FiltersCallback? SearchCallback { get; set; }

    public bool Searchable { get; protected set; }

    public bool IsGloballySearchable { get; set; }

    public T SetAsSearchable(bool searchable = true, bool globallySearchable = true,
        FiltersCallback? searchCallback = null)
    {
        Searchable = searchable;
        IsGloballySearchable = globallySearchable;
        SearchCallback = searchCallback;
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
        // var filters = new Filters(Filters.FiltersType.OR) { new Filter($@"LOWER(t.{ColumnName:raw}) LIKE {s}") };
        // query.Where(filters);
        filters.Add(new Filter($@"LOWER(t.{ColumnName:raw}) LIKE {s}"));
    }
}