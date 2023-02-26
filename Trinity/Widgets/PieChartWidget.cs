using AbanoubNassem.Trinity.Components.BaseWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class PieChartWidget : BaseChartWidget<PieChartWidget>
{
    public override string ComponentName => "PieChartWidget";

    public object[]? HoverBackgroundColor { get; protected set; }

    public PieChartWidget SetHoverBackgroundColor(params object[] colors)
    {
        HoverBackgroundColor = colors;
        return this;
    }
}