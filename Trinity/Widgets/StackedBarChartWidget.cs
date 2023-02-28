using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class StackedBarChartWidget : TrinityChartWidget<StackedBarChartWidget>
{
    public override string ComponentName => "StackedBarChartWidget";

    public StackedBarChartWidget(params object[] labels) : base(labels)
    {
    }

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