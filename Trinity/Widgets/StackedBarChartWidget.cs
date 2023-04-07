using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

/// <summary>
/// Represents a widget for displaying stacked bar charts.
/// </summary>
public class StackedBarChartWidget : TrinityChartWidget<StackedBarChartWidget>
{
    /// <inheritdoc />
    public override string ComponentName => "StackedBarChartWidget";

    /// <summary>
    /// Sets the dataset for the stacked bar chart widget.
    /// </summary>
    /// <param name="data">The data to be used in the chart.</param>
    /// <param name="label">The label to be used for the dataset.</param>
    /// <param name="backgroundColor">The background color for the data points.</param>
    /// <param name="borderColor">The border color for the data points.</param>
    /// <returns>The <see cref="StackedBarChartWidget"/> instance.</returns>
    public override StackedBarChartWidget SetDataset(List<object> data, string label, string? backgroundColor = null,
        string? borderColor = null)
    {
        ChartValues.Add(new
        {
            type = "bar",
            label,
            backgroundColor,
            borderColor,
            data
        });
        return this;
    }
}