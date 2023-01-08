using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Components.BaseColumn;

public abstract partial class BaseColumn<T, TDeserialization>
{
    protected QueryCallbackWithString? SearchCallback { get; set; }

    public bool Searchable { get; protected set; }

    public bool IsGloballySearchable { get; set; }

    public T SetAsSearchable(bool searchable = true, bool globallySearchable = true,
        QueryCallbackWithString? searchCallback = null)
    {
        Searchable = searchable;
        IsGloballySearchable = globallySearchable;
        SearchCallback = searchCallback;
        return (this as T)!;
    }

    public virtual void Search(FluentQueryBuilder query, string search)
    {
        if (SearchCallback != null)
        {
            SearchCallback.Invoke(query, search);
            return;
        }

        var s = $"%{search.ToLower()}%";
        var filters = new Filters(Filters.FiltersType.OR) { new Filter($@"LOWER(t.{ColumnName:raw}) LIKE {s}") };
        query.Where(filters);
    }
}