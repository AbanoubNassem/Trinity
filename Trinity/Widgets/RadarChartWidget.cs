using AbanoubNassem.Trinity.Components.BaseWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class RadarChartWidget : BaseChartWidget<RadarChartWidget>
{
    public override string ComponentName => "RadarChartWidget";

    public RadarChartWidget(params object[] labels) : base(labels)
    {
    }

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