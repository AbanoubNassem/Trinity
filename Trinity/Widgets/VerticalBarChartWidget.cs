using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class VerticalBarChartWidget : TrinityChartWidget<VerticalBarChartWidget>
{
    public override string ComponentName => "VerticalBarChartWidget";

    public VerticalBarChartWidget(params object[] labels) : base(labels)
    {
    }
}