using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class PieChartWidget : TrinityChartWidget<PieChartWidget>
{
    public override string ComponentName => "PieChartWidget";

    public object[]? HoverBackgroundColor { get; protected set; }

    public PieChartWidget SetHoverBackgroundColor(params object[] colors)
    {
        HoverBackgroundColor = colors;
        return this;
    }
}