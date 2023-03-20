using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Widgets;

namespace AbanoubNassem.Trinity.Pages;

public class TrinityDashboardPage : TrinityPage
{
    public override string Slug => "dashboard";
    public override string Label => Localizer["dashboard"];
    public override string Icon => "pi pi-fw pi-home";

    protected override List<ITrinityWidget> GetSchema()
    {
        // Logger.LogInformation("this is a debug message!");
        
        return new List<ITrinityWidget>()
        {
            new StatsWidget("Unique views", "192.1k")
                .SetIcon("pi pi-shopping-cart", "red", "black")
                .SetDescription("24 new since last visit", "green")
                .SetChart(7, 2, 10, 3, 15, 4, 17)
                .SetHeight("300px"),
            new BarChartWidget()
                .SetLabel("Sales")
                .SetChart(("Q1", 540), ("Q2", 325), ("Q3", 702), ("Q4", 620)),
            new PieChartWidget()
                .SetChart(("A", 540), ("B", 325), ("C", 702))
                .SetHoverBackgroundColor("black", "green", "yellow"),
            new PolarAreaChartWidget()
                .SetChart(("A", 540), ("B", 325), ("C", 702)),
            new RadarChartWidget("Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running")
                .SetDataset(new List<object>() { 65, 59, 90, 81, 56, 55, 40 }, "My First dataset", "gray", "gray",
                    "gray", "gray")
                .SetDataset(new List<object>() { 28, 48, 40, 19, 96, 27, 100 }, "My Second dataset", "pink", "pink",
                    "pink", "pink")
                .SetHeight("300px"),
            new DoughnutChartWidget()
                .SetChart(("A", 300), ("B", 50), ("C", 100))
                .SetHoverBackgroundColor("black", "green", "yellow"),
            new VerticalBarChartWidget("January", "February", "March", "April", "May", "June", "July")
                .SetDataset(new List<object>() { 65, 59, 80, 81, 56, 55, 40 }, "My First dataset")
                .SetDataset(new List<object>() { 28, 48, 40, 19, 86, 27, 90 }, "My Second dataset"),
            new HorizontalBarChartWidget("January", "February", "March", "April", "May", "June", "July")
                .SetDataset(new List<object>() { 65, 59, 80, 81, 56, 55, 40 }, "My First dataset")
                .SetDataset(new List<object>() { 28, 48, 40, 19, 86, 27, 90 }, "My Second dataset"),
            new StackedBarChartWidget("January", "February", "March", "April", "May", "June", "July")
                .SetDataset(new List<object>() { 50, 25, 12, 48, 90, 76, 42 }, "My First dataset")
                .SetDataset(new List<object>() { 21, 84, 24, 75, 37, 65, 34 }, "My Second dataset")
                .SetDataset(new List<object>() { 41, 52, 24, 74, 23, 21, 32 }, "My Third dataset"),
            new LineChartWidget("January", "February", "March", "April", "May", "June", "July")
                .SetDataset(new List<object>() { 65, 59, 80, 81, 56, 55, 40 }, "My First dataset")
                .SetDataset(new List<object>() { 28, 48, 40, 19, 86, 27, 90 }, "My Second dataset")
                .SetColumnSpan(6)
                .SetHeight("300px")
        };
    }

    public override bool CanView()
    {
        return true;
    }
}