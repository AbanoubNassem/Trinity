using AbanoubNassem.Trinity.Components.BaseWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class BarChartWidget : BaseChartWidget<BarChartWidget>
{
    public override string ComponentName => "BarChartWidget";

    public object[]? BorderColors { get; protected set; }

    public BarChartWidget SetBorderColors(params object[] colors)
    {
        BorderColors = colors;
        return this;
    }

    public byte BorderWidth { get; protected set; } = 1;

    public BarChartWidget SetBorderWidth(byte width)
    {
        BorderWidth = width;
        return this;
    }
}