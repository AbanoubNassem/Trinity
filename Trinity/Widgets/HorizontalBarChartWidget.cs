using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class HorizontalBarChartWidget : TrinityChartWidget<HorizontalBarChartWidget>
{
    public override string ComponentName => "HorizontalBarChartWidget";

    public HorizontalBarChartWidget(params object[] labels) : base(labels)
    {
    }
}