using System.Data;
using AbanoubNassem.Trinity.RequestHelpers;
using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Components.BaseColumn;

public interface IHasRelationshipColumn : IBaseColumn
{
    public Task<List<IDictionary<string, object?>>> RunRelationQuery(FluentQueryBuilder query,
        List<IDictionary<string, object?>> list, Sort? sort = null);

    public Task<List<KeyValuePair<string, string>>> RelationshipQuery(IDbConnection connection, string? value,
        int offset, string? search = null);

    public string ForeignTable { get; protected set; }

    public string ForeignColumn { get; protected set; }
}

public abstract partial class BaseColumn<T, TDeserialization>
{
}