using System.Data;
using AbanoubNassem.Trinity.RequestHelpers;
using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Components;

public interface IHasRelationship
{
    public Task<List<IDictionary<string, object?>>> RunRelationQuery(FluentQueryBuilder query,
        List<IDictionary<string, object?>> list, Sort? sort = null);

    public Task<List<KeyValuePair<string, string>>> RelationshipQuery(IDbConnection connection, string? value,
        int offset, string? search = null);

    public string ForeignTable { get; protected set; }

    public string ForeignColumn { get; protected set; }

    public string ColumnName { get; protected set; }

    public string RelationshipName { get; protected set; }
}
