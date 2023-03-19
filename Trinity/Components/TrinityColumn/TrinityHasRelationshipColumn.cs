using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.RequestHelpers;
using Humanizer;
using SqlKata;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

public abstract class TrinityHasRelationshipColumn<T> : TrinityColumn<TrinityHasRelationshipColumn<T>, T>, IHasRelationship
{
    protected TrinityHasRelationshipColumn(string columnName, string? foreignColumn = null, string? foreignTable = null) :
        base(columnName)
    {
        ForeignColumn = foreignColumn ?? columnName;
        ForeignTable = foreignTable ?? ForeignColumn.Titleize().Split(' ').First().ToLower().Pluralize();
        RelationshipName = ForeignTable.Singularize().Camelize();
    }

    public abstract Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(QueryFactory queryFactory,
        List<IDictionary<string, object?>> list, Sort? sort = null);

    public override void SelectQuery(Query query)
    {
        query.Select($"t.{ColumnName.Split('.')[0]}");
    }

    public override void Filter(Query filters, string globalSearch)
    {
    }

    public virtual Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(QueryFactory queryFactory, string? value,
        int offset,
        string? search = null)
    {
        return Task.FromResult(new List<KeyValuePair<string, string>>());
    }

    public string? RelationshipName { get; set; }
    public bool HasRelationshipByDefault { get; set; } = true;

    public TrinityHasRelationshipColumn<T> SetRelationshipName(string value)
    {
        RelationshipName = value;
        return this;
    }

    public string? ForeignTable { get; set; }

    public TrinityHasRelationshipColumn<T> SetForeignTable(string value)
    {
        ForeignTable = value;
        return this;
    }

    public string? ForeignColumn { get; set; }

    public TrinityHasRelationshipColumn<T> SetForeignColumn(string value)
    {
        ForeignColumn = value;
        return this;
    }
}