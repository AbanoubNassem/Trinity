using System.Data;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.RequestHelpers;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Components.TrinityField;

public abstract class
    HasRelationshipField<T, TDeserialization> : TrinityField<HasRelationshipField<T, TDeserialization>, TDeserialization>,
        IHasRelationship
{
    protected HasRelationshipField(string columnName, string? foreignColumn = null, string? foreignTable = null) :
        base(columnName)
    {
        ForeignColumn = foreignColumn ?? columnName;
        ForeignTable = foreignTable ?? ForeignColumn.Titleize().Split(' ').First().ToLower().Pluralize();
        RelationshipName = ForeignTable.Singularize().Camelize();
    }

    public abstract Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(FluentQueryBuilder query,
        List<IDictionary<string, object?>> list, Sort? sort = null);

    public override void SelectQuery(FluentQueryBuilder query)
    {
        query.Select($"t.{ColumnName.Split('.')[0]:raw}");
    }

    public override void FilterQuery(Filters filters, string globalSearch)
    {
    }

    public virtual Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(IDbConnection connection, string? value,
        int offset,
        string? search = null)
    {
        return Task.FromResult(new List<KeyValuePair<string, string>>());
    }

    public string? RelationshipName { get; set; }

    public bool HasRelationshipByDefault { get; set; } = true;

    public HasRelationshipField<T, TDeserialization> SetRelationshipName(string value)
    {
        RelationshipName = value;
        return this;
    }

    public string? ForeignTable { get; set; }

    public HasRelationshipField<T, TDeserialization> SetForeignTable(string value)
    {
        ForeignTable = value;
        return this;
    }

    public string? ForeignColumn { get; set; }

    public HasRelationshipField<T, TDeserialization> SetForeignColumn(string value)
    {
        ForeignColumn = value;
        return this;
    }


    public bool Lazy { get; protected set; }

    public int LazyItemsCount { get; protected set; } = 10;

    public HasRelationshipField<T, TDeserialization> SetAsLazy(bool lazy = true, int lazyItemsCount = 10)
    {
        Lazy = lazy;
        LazyItemsCount = lazyItemsCount;
        return this;
    }
}