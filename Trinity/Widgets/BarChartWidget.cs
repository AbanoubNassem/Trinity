using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

/// <summary>
/// A widget that displays data as a bar chart.
/// </summary>
public class BarChartWidget : TrinityChartWidget<BarChartWidget>
{
    /// <inheritdoc />
    public override string ComponentName => "BarChartWidget";

    /// <summary>
    /// Gets or sets an array of border colors for each bar in the chart.
    /// </summary>
    public object[]? BorderColors { get; protected set; }

    /// <summary>
    /// Sets the array of border colors for each bar in the chart.
    /// </summary>
    /// <param name="colors">An array of border colors.</param>
    /// <returns>The current instance of the <see cref="BarChartWidget"/> class.</returns>
    public BarChartWidget SetBorderColors(params object[] colors)
    {
        BorderColors = colors;
        return this;
    }

    /// <summary>
    /// Gets or sets the width of the borders for each bar in the chart.
    /// </summary>
    public byte BorderWidth { get; protected set; } = 1;

    /// <summary>
    /// Sets the width of the borders for each bar in the chart.
    /// </summary>
    /// <param name="width">The width of the borders.</param>
    /// <returns>The current instance of the <see cref="BarChartWidget"/> class.</returns>
    public BarChartWidget SetBorderWidth(byte width)
    {
        BorderWidth = width;
        return this;
    }
}