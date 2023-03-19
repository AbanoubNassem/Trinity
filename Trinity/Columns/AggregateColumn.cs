using AbanoubNassem.Trinity.Components.TrinityColumn;
using Humanizer;
using SqlKata;

namespace AbanoubNassem.Trinity.Columns;

public class AggregateColumn : TrinityColumn<AggregateColumn, object>
{
    public AggregateColumn(string columnName, string? aggregateAlias = null) : base(columnName)
    {
        AggregateAlias = aggregateAlias;
        if (aggregateAlias != null)
        {
            SetLabel(aggregateAlias.Titleize());
        }
    }

    public override string ComponentName => "AggregateColumn";

    private string? AggregateAlias { get; set; }

    private QueryCallback? _query;

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

    public AggregateColumn Counts(string foreignPrimaryKeyColumn, string foreignTable)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "count", foreignPrimaryKeyColumn);
        return this;
    }

    public AggregateColumn Average(string foreignPrimaryKeyColumn, string foreignTable, string foreignColumnToAverage)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "average", foreignColumnToAverage);
        return this;
    }

    public AggregateColumn Sum(string foreignPrimaryKeyColumn, string foreignTable, string foreignColumnToSum)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "sum", foreignColumnToSum);

        return this;
    }

    public AggregateColumn Min(string foreignPrimaryKeyColumn, string foreignTable, string foreignColumnToMin)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "min", foreignColumnToMin);
        return this;
    }

    public AggregateColumn Max(string foreignPrimaryKeyColumn, string foreignTable, string foreignColumnToMax)
    {
        Query(foreignPrimaryKeyColumn, foreignTable, "max", foreignColumnToMax);
        return this;
    }
}