using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.RequestHelpers;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Fields;

public interface IHasRelationshipField : IBaseField
{
    public Task<List<IDictionary<string, object?>>> RunRelationQuery(FluentQueryBuilder query,
        List<IDictionary<string, object?>> list, Sort? sort = null);

    public Task<List<KeyValuePair<string, string>>> RelationshipQuery(FluentQueryBuilder query, string? search);
}

public abstract class HasRelationshipField<T> : BaseField<HasRelationshipField<T>, T>, IHasRelationshipField
{
    protected HasRelationshipField(string columnName, string? foreignColumn = null, string? foreignTable = null) :
        base(columnName)
    {
        ForeignColumn = foreignColumn ?? columnName;
        ForeignTable = foreignTable ?? ForeignColumn.Titleize().Split(' ').First().ToLower().Pluralize();
        RelationshipName = ForeignTable.Singularize().Camelize();
    }

    public abstract Task<List<IDictionary<string, object?>>> RunRelationQuery(FluentQueryBuilder query,
        List<IDictionary<string, object?>> list, Sort? sort = null);

    public override void SelectQuery(FluentQueryBuilder query)
    {
        query.Select($"t.{ColumnName.Split('.')[0]:raw}");
    }

    public override void FilterQuery(Filters filters, string globalSearch)
    {
    }

    public virtual Task<List<KeyValuePair<string, string>>> RelationshipQuery(FluentQueryBuilder query, string? search)
    {
        return Task.FromResult(new List<KeyValuePair<string, string>>());
    }

    public string RelationshipName { get; protected set; }

    public HasRelationshipField<T> SetRelationshipName(string value)
    {
        RelationshipName = value;
        return this;
    }

    public string ForeignTable { get; protected set; }

    public HasRelationshipField<T> SetForeignTable(string value)
    {
        ForeignTable = value;
        return this;
    }

    public string ForeignColumn { get; protected set; }

    public HasRelationshipField<T> SetForeignColumn(string value)
    {
        ForeignColumn = value;
        return this;
    }


    public bool Lazy { get; protected set; }

    public HasRelationshipField<T> SetAsLazy(bool lazy = true)
    {
        Lazy = lazy;
        return this;
    }
}