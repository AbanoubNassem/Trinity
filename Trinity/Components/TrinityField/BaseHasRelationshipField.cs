using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.RequestHelpers;
using Humanizer;
using SqlKata;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Components.TrinityField;

/// <summary>
/// A base class for fields that have a relationship with another table.
/// </summary>
/// <typeparam name="T">The type of the field.</typeparam>
/// <typeparam name="TDeserialization">The type of the deserialization.</typeparam>
public abstract class
    HasRelationshipField<T, TDeserialization> :
        TrinityField<HasRelationshipField<T, TDeserialization>, TDeserialization>,
        IHasRelationship
{
    /// <summary>
    /// Initializes a new instance of the <see cref="HasRelationshipField{T, TDeserialization}"/> class.
    /// </summary>
    /// <param name="columnName">The name of the column.</param>
    /// <param name="foreignColumn">The name of the foreign column.</param>
    /// <param name="foreignTable">The name of the foreign table.</param>
    protected HasRelationshipField(string columnName, string? foreignColumn = null, string? foreignTable = null) :
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
    public override void FilterQuery(Query query, string globalSearch)
    {
    }

    /// <inheritdoc />
    public virtual Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(QueryFactory queryFactory,
        string localTable, string? value,
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
    /// Sets the name of the relationship for this field.
    /// </summary>
    /// <param name="value">The name of the relationship.</param>
    /// <returns>The current instance of the <see cref="HasRelationshipField{T, TDeserialization}"/> field.</returns>
    public HasRelationshipField<T, TDeserialization> SetRelationshipName(string value)
    {
        RelationshipName = value;
        return this;
    }

    /// <summary>
    /// Gets or sets the name of the foreign table.
    /// </summary>
    /// <value>The name of the foreign table.</value>
    public string? ForeignTable { get; set; }

    /// <summary>
    /// Sets the name of the foreign table for this field.
    /// </summary>
    /// <param name="value">The name of the foreign table.</param>
    /// <returns>The current instance of the <see cref="HasRelationshipField{T, TDeserialization}"/> field.</returns>
    public HasRelationshipField<T, TDeserialization> SetForeignTable(string value)
    {
        ForeignTable = value;
        return this;
    }

    /// <inheritdoc />
    public string? ForeignColumn { get; set; }

    /// <summary>
    /// Sets the name of the foreign column for this field.
    /// </summary>
    /// <param name="value">The name of the foreign column.</param>
    /// <returns>The current instance of the <see cref="HasRelationshipField{T, TDeserialization}"/> field.</returns>
    public HasRelationshipField<T, TDeserialization> SetForeignColumn(string value)
    {
        ForeignColumn = value;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether this field should be lazy-loaded.
    /// </summary>
    /// <value><c>true</c> if this field should be lazy-loaded; otherwise, <c>false</c>.</value>
    public bool Lazy { get; protected set; }

    /// <summary>
    /// Gets or sets the number of items to load lazily.
    /// </summary>
    /// <value>The number of items to load lazily.</value>
    public int LazyItemsCount { get; protected set; } = 10;

    /// <summary>
    /// Sets whether this field should be lazy-loaded and the number of items to load lazily.
    /// </summary>
    /// <param name="lazy">Whether this field should be lazy-loaded.</param>
    /// <param name="lazyItemsCount">The number of items to load lazily.</param>
    /// <returns>The current instance of the <see cref="HasRelationshipField{T, TDeserialization}"/> field.</returns>
    public HasRelationshipField<T, TDeserialization> SetAsLazy(bool lazy = true, int lazyItemsCount = 10)
    {
        Lazy = lazy;
        LazyItemsCount = lazyItemsCount;
        return this;
    }

    protected Action<Query>? AssociatesRelationshipQuery { get; set; }

    public HasRelationshipField<T, TDeserialization> SetAssociatesRelationshipQueryUsing(Action<Query> query)
    {
        AssociatesRelationshipQuery = query;

        return this;
    }
}