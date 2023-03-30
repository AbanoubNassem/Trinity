using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

/// <summary>
/// Represents a Pie Chart widget.
/// </summary>
public class PieChartWidget : TrinityChartWidget<PieChartWidget>
{
    /// <inheritdoc />
    public override string ComponentName => "PieChartWidget";

    /// <summary>
    /// Gets or sets the hover background colors of the chart.
    /// </summary>
    public object[]? HoverBackgroundColor { get; protected set; }

    /// <summary>
    /// Sets the hover background colors of the chart.
    /// </summary>
    /// <param name="colors">The colors to be set.</param>
    /// <returns>The current instance of the <see cref="PieChartWidget"/> class.</returns>
    public PieChartWidget SetHoverBackgroundColor(params object[] colors)
    {
        HoverBackgroundColor = colors;
        return this;
    }
}