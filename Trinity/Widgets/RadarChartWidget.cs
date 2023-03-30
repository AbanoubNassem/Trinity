using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

/// <summary>
/// Represents a widget for displaying radar charts.
/// </summary>
public class RadarChartWidget : TrinityChartWidget<RadarChartWidget>
{
    /// <inheritdoc />
    public override string ComponentName => "RadarChartWidget";

    /// <inheritdoc />
    public RadarChartWidget(params object[] labels) : base(labels)
    {
    }

    /// <summary>
    /// Sets the dataset for the radar chart widget.
    /// </summary>
    /// <param name="data">The data to be used in the chart.</param>
    /// <param name="label">The label to be used for the dataset.</param>
    /// <param name="borderColor">The border color for the data points.</param>
    /// <param name="pointBackgroundColor">The background color for the data points.</param>
    /// <param name="pointBorderColor">The border color for the data points.</param>
    /// <param name="pointHoverBackgroundColor">The hover background color for the data points.</param>
    /// <param name="pointHoverBorderColor">The hover border color for the data points.</param>
    /// <returns>The <see cref="RadarChartWidget"/> instance.</returns>
    public RadarChartWidget SetDataset(List<object> data, string label, string? borderColor = null,
        string? pointBackgroundColor = null, string? pointBorderColor = null, string? pointHoverBackgroundColor = null,
        string? pointHoverBorderColor = null)
    {
        ChartValues.Add(new
        {
            label,
            borderColor,
            pointBackgroundColor,
            pointBorderColor,
            pointHoverBackgroundColor,
            pointHoverBorderColor,
            data
        });
        return this;
    }
}