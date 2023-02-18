using System.Data;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.RequestHelpers;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Components.BaseColumn;

public abstract class BaseHasRelationshipColumn<T> : BaseColumn<BaseHasRelationshipColumn<T>, T>, IHasRelationship
{
    protected BaseHasRelationshipColumn(string columnName, string? foreignColumn = null, string? foreignTable = null) :
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

    public override void Filter(Filters filters, string globalSearch)
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

    public BaseHasRelationshipColumn<T> SetRelationshipName(string value)
    {
        RelationshipName = value;
        return this;
    }

    public string? ForeignTable { get; set; }

    public BaseHasRelationshipColumn<T> SetForeignTable(string value)
    {
        ForeignTable = value;
        return this;
    }

    public string? ForeignColumn { get; set; }

    public BaseHasRelationshipColumn<T> SetForeignColumn(string value)
    {
        ForeignColumn = value;
        return this;
    }
}