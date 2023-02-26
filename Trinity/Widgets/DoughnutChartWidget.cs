namespace AbanoubNassem.Trinity.Widgets;

public class DoughnutChartWidget : PieChartWidget
{
    public override string ComponentName => "DoughnutChartWidget";

    public string? Cutout { get; protected set; } = "60%";

    public DoughnutChartWidget SetCutout(string cutout)
    {
        Cutout = cutout;
        return this;
    }
}