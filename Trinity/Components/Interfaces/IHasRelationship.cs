using AbanoubNassem.Trinity.RequestHelpers;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Components.Interfaces;

public interface IHasRelationship
{
    public Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(QueryFactory queryFactory,
        List<IDictionary<string, object?>> records, Sort? sort = null);

    public Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(QueryFactory queryFactory, string? value,
        int offset, string? search = null);

    public string? ForeignTable { get; protected set; }

    public string? ForeignColumn { get; protected set; }

    public string ColumnName { get; protected set; }

    public string? RelationshipName { get; protected set; }
    
    public bool HasRelationshipByDefault { get; }
}
