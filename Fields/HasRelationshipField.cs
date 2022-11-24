using DapperQueryBuilder;
using Humanizer;
using Newtonsoft.Json;

namespace AbanoubNassem.Trinity.Fields;

public abstract class HasRelationshipField : BaseField
{
    [JsonIgnore] public string ForeignTable { get; }
    [JsonIgnore] public string ForeignColumn { get; }

    protected HasRelationshipField(string columnName, string? foreignColumn = null, string? foreignTable = null) :
        base(columnName)
    {
        ForeignColumn = foreignColumn ?? columnName;
        ForeignTable = foreignTable ?? ForeignColumn.Titleize().Split(' ').First().ToLower().Pluralize();
        _relationshipName = ForeignTable.Singularize().Camelize();
    }

    public abstract Task<IEnumerable<dynamic>> RunRelationQuery(FluentQueryBuilder query, IEnumerable<object> ids);

    private string _relationshipName;
    public string RelationshipName => _relationshipName;

    public HasRelationshipField SetRelationshipName(string value)
    {
        _relationshipName = value;
        return this;
    }
}