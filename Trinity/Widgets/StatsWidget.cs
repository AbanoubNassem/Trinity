using AbanoubNassem.Trinity.Components.TrinityWidget;

namespace AbanoubNassem.Trinity.Widgets;

/// <summary>
/// Represents a widget that displays stats.
/// </summary>
public class StatsWidget : TrinityWidget<StatsWidget>
{
    /// <inheritdoc />
    public override string ComponentName => "StatsWidget";

    /// <summary>
    /// Initializes a new instance of the <see cref="StatsWidget"/> class with the specified title and value.
    /// </summary>
    /// <param name="title">The title of the widget.</param>
    /// <param name="value">The value to display.</param>
    public StatsWidget(string title, string value)
    {
        Title = title;
        Value = value;
    }

    /// <summary>
    /// Gets the title of the widget.
    /// </summary>
    public string Title { get; protected set; }

    /// <summary>
    /// Gets the value to display.
    /// </summary>
    public string Value { get; protected set; }

    /// <summary>
    /// Gets or sets the icon to display.
    /// </summary>
    public string? Icon { get; protected set; }

    /// <summary>
    /// Gets or sets the color of the icon.
    /// </summary>
    public string? IconColor { get; protected set; }

    /// <summary>
    /// Gets or sets the background color of the icon.
    /// </summary>
    public string? IconBackgroundColor { get; protected set; }

    /// <summary>
    /// Sets the icon to display with the specified color and background color.
    /// </summary>
    /// <param name="icon">The icon to display.</param>
    /// <param name="color">The color of the icon. Default is "#3b82f6".</param>
    /// <param name="backgroundColor">The background color of the icon. Default is "#d0e1fd".</param>
    /// <returns>The current <see cref="StatsWidget"/> instance.</returns>
    public StatsWidget SetIcon(string icon, string color = "#3b82f6", string backgroundColor = "#d0e1fd")
    {
        Icon = icon;
        IconColor = color;
        IconBackgroundColor = backgroundColor;
        return this;
    }

    /// <summary>
    /// Gets or sets the description to display.
    /// </summary>
    public string? Description { get; protected set; }

    /// <summary>
    /// Gets or sets the color of the description.
    /// </summary>
    public string? DescriptionColor { get; protected set; }

    /// <summary>
    /// Sets the description to display with the specified color.
    /// </summary>
    /// <param name="description">The description to display.</param>
    /// <param name="color">The color of the description. Default is <see langword="null"/>.</param>
    /// <returns>The current <see cref="StatsWidget"/> instance.</returns>
    public StatsWidget SetDescription(string description, string? color = null)
    {
        Description = description;
        DescriptionColor = color;
        return this;
    }

    /// <summary>
    /// Gets or sets the labels for the chart displayed in the widget.
    /// </summary>
    public object[]? ChartLabels { get; protected set; }

    /// <summary>
    /// Gets or sets the values for the chart displayed in the widget.
    /// </summary>
    public object[]? ChartValues { get; protected set; }

    /// <summary>
    /// Sets the labels and values for the chart displayed in the widget.
    /// </summary>
    /// <param name="chartLabelValues">A collection of tuples containing the chart labels and values.</param>
    /// <returns>The current instance of the <see cref="StatsWidget"/> class.</returns>
    public StatsWidget SetChart(params (object, object)[] chartLabelValues)
    {
        ChartLabels = chartLabelValues.Select(x => x.Item1).ToArray();
        ChartValues = chartLabelValues.Select(x => x.Item2).ToArray();
        return this;
    }

    /// <summary>
    /// Sets the values for the chart displayed in the widget.
    /// </summary>
    /// <param name="chartValues">An array of chart values.</param>
    /// <returns>The current instance of the <see cref="StatsWidget"/> class.</returns>
    public StatsWidget SetChart(params object[] chartValues)
    {
        ChartValues = chartValues;
        return this;
    }

    /// <summary>
    /// Gets or sets the background color of the chart displayed in the widget.
    /// </summary>
    public string? ChartBackgroundColor { get; protected set; }

    /// <summary>
    /// Sets the background color of the chart displayed in the widget.
    /// </summary>
    /// <param name="color">The chart background color.</param>
    /// <returns>The current instance of the <see cref="StatsWidget"/> class.</returns>
    public StatsWidget SetChartBackgroundColor(string color)
    {
        ChartBackgroundColor = color;
        return this;
    }

    /// <summary>
    /// Gets or sets the border color of the chart displayed in the widget.
    /// </summary>
    public string? ChartBorderColor { get; protected set; }

    /// <summary>
    /// Sets the border color of the chart displayed in the widget.
    /// </summary>
    /// <param name="color">The chart border color.</param>
    /// <returns>The current instance of the <see cref="StatsWidget"/> class.</returns>
    public StatsWidget SetChartBorderColor(string color)
    {
        ChartBorderColor = color;
        return this;
    }
}