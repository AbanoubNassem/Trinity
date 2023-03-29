using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.RequestHelpers;
using Humanizer;
using SqlKata;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

/// <summary>
/// An abstract class that represents a column in a table that has a relationship with another table.
/// </summary>
/// <typeparam name="T">The type of the column</typeparam>
public abstract class TrinityHasRelationshipColumn<T> : TrinityColumn<TrinityHasRelationshipColumn<T>, T>,
    IHasRelationship
{
    /// <summary>
    /// Initializes a new instance of the TrinityHasRelationshipColumn class with the specified column name, foreign column and foreign table.
    /// </summary>
    /// <param name="columnName">The name of the column</param>
    /// <param name="foreignColumn">The name of the foreign column</param>
    /// <param name="foreignTable">The name of the foreign table</param>
    protected TrinityHasRelationshipColumn(string columnName, string? foreignColumn = null, string? foreignTable = null)
        :
        base(columnName)
    {
        ForeignColumn = foreignColumn ?? columnName;
        ForeignTable = foreignTable ?? ForeignColumn.Titleize().Split(' ').First().ToLower().Pluralize();
        RelationshipName = ForeignTable.Singularize().Camelize();
    }


    /// <inheritdoc />
    public abstract Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(QueryFactory queryFactory,
        List<IDictionary<string, object?>> records, Sort? sort = null);

    /// <inheritdoc />
    public override void SelectQuery(Query query)
    {
        query.Select($"t.{ColumnName.Split('.')[0]}");
    }

    /// <inheritdoc />
    public override void Filter(Query filters, string search)
    {
    }


    /// <inheritdoc />
    public virtual Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(QueryFactory queryFactory,
        string? value,
        int offset,
        string? search = null)
    {
        return Task.FromResult(new List<KeyValuePair<string, string>>());
    }


    /// <inheritdoc />
    public string? RelationshipName { get; set; }


    /// <inheritdoc />
    public bool HasRelationshipByDefault { get; set; } = true;

    /// <summary>
    /// Sets the name of the relationship associated with this column.
    /// </summary>
    /// <param name="value">The name of the relationship.</param>
    /// <returns>The current <see cref="TrinityHasRelationshipColumn{T}"/> instance.</returns>
    public TrinityHasRelationshipColumn<T> SetRelationshipName(string value)
    {
        RelationshipName = value;
        return this;
    }


    /// <inheritdoc />
    public string? ForeignTable { get; set; }

    /// <summary>
    /// Sets the name of the foreign table for the relationship.
    /// </summary>
    /// <param name="value">The name of the foreign table.</param>
    /// <returns>The current <see cref="TrinityHasRelationshipColumn{T}"/> instance.</returns>
    public TrinityHasRelationshipColumn<T> SetForeignTable(string value)
    {
        ForeignTable = value;
        return this;
    }


    /// <inheritdoc />
    public string? ForeignColumn { get; set; }

    /// <summary>
    /// Sets the name of the foreign column for the relationship.
    /// </summary>
    /// <param name="value">The name of the foreign column.</param>
    /// <returns>The current <see cref="TrinityHasRelationshipColumn{T}"/> instance.</returns>
    public TrinityHasRelationshipColumn<T> SetForeignColumn(string value)
    {
        ForeignColumn = value;
        return this;
    }
}