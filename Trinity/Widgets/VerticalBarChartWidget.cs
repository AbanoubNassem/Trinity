using AbanoubNassem.Trinity.Components.BaseWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class VerticalBarChartWidget : BaseChartWidget<VerticalBarChartWidget>
{
    public override string ComponentName => "VerticalBarChartWidget";

    public VerticalBarChartWidget(params object[] labels) : base(labels)
    {
    }
}