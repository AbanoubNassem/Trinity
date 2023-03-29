using AbanoubNassem.Trinity.RequestHelpers;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Components.Interfaces;

/// <summary>
/// Interface for columns that have a relationship to another table.
/// </summary>
public interface IHasRelationship
{
    /// <summary>
    /// A method that selects the relationship query using the specified queryFactory and list of records, returns a list of the selected relationships.
    /// </summary>
    /// <param name="queryFactory">The query factory used to create the query</param>
    /// <param name="records">The list of records to select from</param>
    /// <param name="sort">The sorting object</param>
    /// <returns>A list of selected relationships</returns>
    public Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(QueryFactory queryFactory,
        List<IDictionary<string, object?>> records, Sort? sort = null);

    /// <summary>
    /// A method that gets the associates relationship query using the specified queryFactory, value, offset, search string, and returns a list of the key-value pairs.
    /// </summary>
    /// <param name="queryFactory">The query factory used to create the query</param>
    /// <param name="value">The value to search for, if any.</param>
    /// <param name="offset">The offset to use</param>
    /// <param name="search">The search string to use</param>
    /// <returns>A list of key-value pairs</returns>
    public Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(QueryFactory queryFactory,
        string? value,
        int offset, string? search = null);

    /// <summary>
    /// Gets or sets the name of the foreign table for the relationship.
    /// </summary>
    public string? ForeignTable { get; protected set; }

    /// <summary>
    /// Gets or sets the name of the foreign column for the relationship.
    /// </summary>
    public string? ForeignColumn { get; protected set; }

    /// <summary>
    /// Gets or sets the name of the column.
    /// </summary>
    public string ColumnName { get; protected set; }

    /// <summary>
    /// The name of the relationship.
    /// </summary>
    public string? RelationshipName { get; protected set; }

    /// <summary>
    /// A boolean that indicates whether this column has a relationship by default.
    /// </summary>
    public bool HasRelationshipByDefault { get; }
}