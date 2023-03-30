using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

/// <summary>
/// Represents a line chart widget.
/// </summary>
public class LineChartWidget : TrinityChartWidget<LineChartWidget>
{
    /// <inheritdoc />
    public override string ComponentName => "LineChartWidget";

    /// <inheritdoc />
    public LineChartWidget(params object[] labels) : base(labels)
    {
    }

    /// <summary>
    /// Adds a new dataset to the chart with the specified data, label, background color and border color.
    /// </summary>
    /// <param name="data">The data values for the dataset.</param>
    /// <param name="label">The label for the dataset.</param>
    /// <param name="backgroundColor">The background color for the dataset.</param>
    /// <param name="borderColor">The border color for the dataset.</param>
    /// <returns>The current instance of the <see cref="LineChartWidget"/> class.</returns>
    public override LineChartWidget SetDataset(List<object> data, string label, string? backgroundColor = null,
        string? borderColor = null)
    {
        ChartValues.Add(new
        {
            label,
            backgroundColor,
            borderColor,
            data,
            fill = false,
            tension = 0.4
        });
        return this;
    }
}