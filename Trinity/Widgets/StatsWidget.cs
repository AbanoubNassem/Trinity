using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

public class StatsWidget : TrinityWidget<StatsWidget>
{
    public override string ComponentName => "StatsWidget";

    public StatsWidget(string title, string value)
    {
        Title = title;
        Value = value;
    }

    public string Title { get; protected set; }

    public string Value { get; protected set; }


    public string? Icon { get; protected set; }
    public string? IconColor { get; protected set; }
    public string? IconBackgroundColor { get; protected set; }

    public StatsWidget SetIcon(string icon, string color = "#3b82f6", string backgroundColor = "#d0e1fd")
    {
        Icon = icon;
        IconColor = color;
        IconBackgroundColor = backgroundColor;
        return this;
    }

    public string? Description { get; protected set; }
    public string? DescriptionColor { get; protected set; }

    public StatsWidget SetDescription(string description, string? color = null)
    {
        Description = description;
        DescriptionColor = color;
        return this;
    }

    public object[]? ChartLabels { get; protected set; }
    public object[]? ChartValues { get; protected set; }

    public StatsWidget SetChart(params (object, object)[] chartLabelValues)
    {
        ChartLabels = chartLabelValues.Select(x => x.Item1).ToArray();
        ChartValues = chartLabelValues.Select(x => x.Item2).ToArray();
        return this;
    }

    public StatsWidget SetChart(params object[] chartValues)
    {
        ChartValues = chartValues;
        return this;
    }
    

    public string? ChartBackgroundColor { get; protected set; }

    public StatsWidget SetChartBackgroundColor(string color)
    {
        ChartBackgroundColor = color;
        return this;
    }
    
    public string? ChartBorderColor { get; protected set; }

    public StatsWidget SetChartBorderColor(string color)
    {
        ChartBorderColor = color;
        return this;
    }
}