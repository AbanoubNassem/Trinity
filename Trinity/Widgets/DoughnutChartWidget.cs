namespace AbanoubNassem.Trinity.Widgets;

/// <summary>
/// Represents a Doughnut like Chart widget.
/// </summary>
public class DoughnutChartWidget : PieChartWidget
{
    /// <inheritdoc />
    public override string ComponentName => "DoughnutChartWidget";

    /// <summary>
    /// Gets or sets the percentage of the chart that is cut out of the middle for creating a doughnut chart. Default is "60%".
    /// </summary>
    public string? Cutout { get; protected set; } = "60%";

    /// <summary>
    /// Sets the percentage of the chart that is cut out of the middle for creating a doughnut chart.
    /// </summary>
    /// <param name="cutout">The percentage of the chart that is cut out of the middle.</param>
    /// <returns>The current instance of the <see cref="DoughnutChartWidget"/> class.</returns>
    public DoughnutChartWidget SetCutout(string cutout)
    {
        Cutout = cutout;
        return this;
    }
}