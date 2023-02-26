using AbanoubNassem.Trinity.Components.BaseWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class HorizontalBarChartWidget : BaseChartWidget<HorizontalBarChartWidget>
{
    public override string ComponentName => "HorizontalBarChartWidget";

    public HorizontalBarChartWidget(params object[] labels) : base(labels)
    {
    }
}