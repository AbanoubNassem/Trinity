using AbanoubNassem.Trinity.Components.BaseColumn;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Columns;

public class AggregateColumn : BaseColumn<AggregateColumn, object>
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

    public override void SelectQuery(FluentQueryBuilder query)
    {
        base.SelectQuery(query);

        _query?.Invoke(query);
    }

    private void Query(FormattableString queryStr, string aggregate)
    {
        AggregateAlias ??= $"{ColumnName}_{aggregate}";
        SetLabel(AggregateAlias.Titleize());
        _query = query => query.Select(queryStr);
    }

    public AggregateColumn Counts(string foreignColumn, string foreignTable)
    {
        Query(
            $"( SELECT COUNT(*) FROM {foreignTable:raw} WHERE {foreignColumn:raw} = t.{ColumnName:raw} ) AS {AggregateAlias:raw}",
            "count"
        );
        return this;
    }

    public AggregateColumn Average(string foreignColumn, string foreignTable, string foreignColumnToAverage)
    {
        Query(
            $"( SELECT avg({foreignColumnToAverage:raw}) FROM {foreignTable:raw} WHERE {foreignColumn:raw} = t.{ColumnName:raw} ) AS {AggregateAlias:raw}",
            "average"
        );
        return this;
    }

    public AggregateColumn Sum(string foreignColumn, string foreignTable, string foreignColumnToSum)
    {
        Query(
            $"( SELECT sum({foreignColumnToSum:raw}) FROM {foreignTable:raw} WHERE {foreignColumn:raw} = t.{ColumnName:raw} ) AS {AggregateAlias:raw}",
            "sum"
        );
        return this;
    }

    public AggregateColumn Min(string foreignColumn, string foreignTable, string foreignColumnToMin)
    {
        Query(
            $"( SELECT min({foreignColumnToMin:raw}) FROM {foreignTable:raw} WHERE {foreignColumn:raw} = t.{ColumnName:raw} ) AS {AggregateAlias:raw}",
            "min"
        );
        return this;
    }

    public AggregateColumn Max(string foreignColumn, string foreignTable, string foreignColumnToMax)
    {
        Query(
            $"( SELECT max({foreignColumnToMax:raw}) FROM {foreignTable:raw} WHERE {foreignColumn:raw} = t.{ColumnName:raw} ) AS {AggregateAlias:raw}",
            "max"
        );
        return this;
    }
}