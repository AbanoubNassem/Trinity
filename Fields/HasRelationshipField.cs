using AbanoubNassem.Trinity.RequestHelpers;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Fields;

public abstract class HasRelationshipField : BaseField
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

    public string RelationshipName { get; protected set; }

    public HasRelationshipField SetRelationshipName(string value)
    {
        RelationshipName = value;
        return this;
    }

    public string ForeignTable { get; protected set; }

    public HasRelationshipField SetForeignTable(string value)
    {
        ForeignTable = value;
        return this;
    }

    public string ForeignColumn { get; protected set; }

    public HasRelationshipField SetForeignColumn(string value)
    {
        ForeignColumn = value;
        return this;
    }
}