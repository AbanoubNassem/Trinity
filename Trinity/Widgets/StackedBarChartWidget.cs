using AbanoubNassem.Trinity.Components.BaseWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class StackedBarChartWidget : BaseChartWidget<StackedBarChartWidget>
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