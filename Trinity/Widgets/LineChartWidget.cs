using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class LineChartWidget : TrinityChartWidget<LineChartWidget>
{
    public override string ComponentName => "LineChartWidget";

    public LineChartWidget(params object[] labels) : base(labels)
    {
    }

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