using AbanoubNassem.Trinity.Components.TrinityColumn;
using Humanizer;
using SqlKata;

namespace AbanoubNassem.Trinity.Columns;

/// <summary>
/// Represents an aggregate column in a SQL query.
/// </summary>
public class AggregateColumn : TrinityColumn<AggregateColumn, object>
{
    /// <summary>
    /// Initializes a new instance of the <see cref="AggregateColumn"/> class.
    /// </summary>
    /// <param name="columnName">The name of the column.</param>
    /// <param name="aggregateAlias">The alias for the aggregate function.</param>
    public AggregateColumn(string columnName, string? aggregateAlias = null) : base(columnName)
    {
        AggregateAlias = aggregateAlias;
        if (aggregateAlias != null)
        {
            SetLabel(aggregateAlias.Titleize());
        }
    }

    /// <inheritdoc />
    public override string ComponentName => "AggregateColumn";

    /// <summary>
    /// Gets or sets the alias for the aggregate function.
    /// </summary>
    private string? AggregateAlias { get; set; }

    private QueryCallback? _query;

    /// <summary>
    /// Modifies the given query to include this aggregate column.
    /// </summary>
    /// <param name="query">The query to modify.</param>
    public override void SelectQuery(Query query)
    {
        base.SelectQuery(query);

        _query?.Invoke(query);
    }

    private void Query(string foreignPrimaryKeyColumn, string foreignTable, string aggregate,
        string foreignColumnToAggregate)
    {
        AggregateAlias ??= $"{ColumnName}_{aggregate}";
        SetLabel(AggregateAlias.Titleize());
        _query = query =>
            query.Select(
                innerQuery => innerQuery.From($"{foreignTable} AS f")
                    .WhereColumns($"f.{foreignPrimaryKeyColumn}", "=", $"t.{ColumnName}")
                    .AsAggregate(aggregate, new[] { $"f.{foreignColumnToAggregate}" }),
                AggregateAlias
            );
    }

    /// <summary>
    /// Defines a query that calculates the count of records in the given table.
    /// </summary>
    /// <param name="foreignPrimaryKeyColumn">The primary key column of the foreign table to join.</param>
    /// <param name="foreignTable">The name of the foreign table to join.</param>
    /// <returns>The current <see cref="AggregateColumn"/> instance.</returns>
    public AggregateColumn Counts(string foreignPrimaryKeyColumn, string foreignTable)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "count", foreignPrimaryKeyColumn);
        return this;
    }

    /// <summary>
    /// Defines a query that calculates the average of values in the specified column of the given table.
    /// </summary>
    /// <param name="foreignPrimaryKeyColumn">The primary key column of the foreign table to join.</param>
    /// <param name="foreignTable">The name of the foreign table to join.</param>
    /// <param name="foreignColumnToAverage">The name of the column to average.</param>
    /// <returns>The current <see cref="AggregateColumn"/> instance.</returns>
    public AggregateColumn Average(string foreignPrimaryKeyColumn, string foreignTable, string foreignColumnToAverage)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "average", foreignColumnToAverage);
        return this;
    }

    /// <summary>
    /// Defines a query that calculates the sum of values in the specified column of the given table.
    /// </summary>
    /// <param name="foreignPrimaryKeyColumn">The primary key column of the foreign table to join.</param>
    /// <param name="foreignTable">The name of the foreign table to join.</param>
    /// <param name="foreignColumnToSum">The name of the column to sum.</param>
    /// <returns>The current <see cref="AggregateColumn"/> instance.</returns>
    public AggregateColumn Sum(string foreignPrimaryKeyColumn, string foreignTable, string foreignColumnToSum)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "sum", foreignColumnToSum);

        return this;
    }

    /// <summary>
    /// Adds a MIN aggregate function to the query for the specified foreign column.
    /// </summary>
    /// <param name="foreignPrimaryKeyColumn">The name of the primary key column of the foreign table.</param>
    /// <param name="foreignTable">The name of the foreign table.</param>
    /// <param name="foreignColumnToMin">The name of the column in the foreign table to calculate the MIN aggregate function on.</param>
    /// <returns>The current <see cref="AggregateColumn"/> instance.</returns>
    /// <exception cref="ArgumentNullException">Thrown when <paramref name="foreignPrimaryKeyColumn"/>, <paramref name="foreignTable"/>, or <paramref name="foreignColumnToMin"/> is null.</exception>
    public AggregateColumn Min(string foreignPrimaryKeyColumn, string foreignTable, string foreignColumnToMin)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "min", foreignColumnToMin);
        return this;
    }

    /// <summary>
    /// Adds a MAX aggregate function to the query for the specified foreign column.
    /// </summary>
    /// <param name="foreignPrimaryKeyColumn">The name of the primary key column of the foreign table.</param>
    /// <param name="foreignTable">The name of the foreign table.</param>
    /// <param name="foreignColumnToMax">The name of the column in the foreign table to calculate the MAX aggregate function on.</param>
    /// <returns>The current <see cref="AggregateColumn"/> instance.</returns>
    /// <exception cref="ArgumentNullException">Thrown when <paramref name="foreignPrimaryKeyColumn"/>, <paramref name="foreignTable"/>, or <paramref name="foreignColumnToMax"/> is null.</exception>
    public AggregateColumn Max(string foreignPrimaryKeyColumn, string foreignTable, string foreignColumnToMax)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "max", foreignColumnToMax);
        return this;
    }
}