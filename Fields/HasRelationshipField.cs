using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Fields;

public abstract class HasRelationshipField : BaseField
{
    protected HasRelationshipField(string columnName, string? foreignColumn = null, string? foreignTable = null) :
        base(columnName)
    {
        _foreignColumn = foreignColumn ?? columnName;
        _foreignTable = foreignTable ?? ForeignColumn.Titleize().Split(' ').First().ToLower().Pluralize();
        _relationshipName = ForeignTable.Singularize().Camelize();
    }

    public abstract Task<IEnumerable<dynamic>> RunRelationQuery(FluentQueryBuilder query, IEnumerable<object> ids);

    public override void SelectQuery(FluentQueryBuilder query)
    {
        query.Select($"{ColumnName.Split('.')[0]:raw}");
    }

    private string _relationshipName;
    public string RelationshipName => _relationshipName;

    public HasRelationshipField SetRelationshipName(string value)
    {
        _relationshipName = value;
        return this;
    }

    private string _foreignTable;
    public string ForeignTable => _foreignTable;

    public HasRelationshipField SetForeignTable(string value)
    {
        _foreignTable = value;
        return this;
    }

    private string _foreignColumn;
    public string ForeignColumn => _foreignColumn;

    public HasRelationshipField SetForeignColumn(string value)
    {
        _foreignColumn = value;
        return this;
    }
}