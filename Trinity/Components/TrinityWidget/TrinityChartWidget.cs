namespace AbanoubNassem.Trinity.Components.TrinityWidget;

/// <summary>
/// A base class for creating chart widgets that inherit from the <see cref="TrinityWidget{T}"/> base class.
/// </summary>
/// <typeparam name="T">The type of the TrinityChartWidget.</typeparam>
public abstract class TrinityChartWidget<T> : TrinityWidget<T> where T : TrinityChartWidget<T>
{
    /// <summary>
    /// Initializes a new instance of the <typeparamref name="T"/> class.
    /// </summary>
    protected TrinityChartWidget()
    {
    }

    /// <summary>
    /// Initializes a new instance of the <typeparamref name="T"/> class with the specified chart labels.
    /// </summary>
    /// <param name="labels">The chart labels.</param>
    protected TrinityChartWidget(params object[] labels)
    {
        ChartLabels = labels.ToList();
    }

    /// <summary>
    /// Gets or sets the chart labels.
    /// </summary>
    /// <value>The chart labels.</value>
    public List<object> ChartLabels { get; protected set; } = new();

    /// <summary>
    /// Gets or sets the chart values.
    /// </summary>
    /// <value>The chart values.</value>
    public List<object> ChartValues { get; protected set; } = new();

    /// <summary>
    /// Sets the chart with the specified chart label values.
    /// </summary>
    /// <param name="chartLabelValues">The chart label values.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> widget.</returns>
    public T SetChart(params (object, object)[] chartLabelValues)
    {
        ChartLabels = chartLabelValues.Select(x => x.Item1).ToList();
        ChartValues = chartLabelValues.Select(x => x.Item2).ToList();
        return (this as T)!;
    }

    /// <summary>
    /// Sets the chart with the specified chart values.
    /// </summary>
    /// <param name="chartValues">The chart values.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> widget.</returns>
    public T SetChart(params object[] chartValues)
    {
        ChartValues = chartValues.ToList();
        return (this as T)!;
    }

    /// <summary>
    /// Sets the dataset with the specified data, label, background color, and border color.
    /// </summary>
    /// <param name="data">The data.</param>
    /// <param name="label">The label.</param>
    /// <param name="backgroundColor">The background color.</param>
    /// <param name="borderColor">The border color.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> widget.</returns>
    public virtual T SetDataset(List<object> data, string label, string? backgroundColor = null,
        string? borderColor = null)
    {
        ChartValues.Add(new
        {
            label,
            backgroundColor,
            borderColor,
            data
        });
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the background colors.
    /// </summary>
    /// <value>The background colors.</value>
    public string[]? BackgroundColors { get; protected set; }

    /// <summary>
    /// Sets the background colors with the specified colors.
    /// </summary>
    /// <param name="colors">The colors.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> widget.</returns>
    public T SetBackgroundColors(params string[] colors)
    {
        BackgroundColors = colors;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the options for the chart.
    /// </summary>
    /// <value>The chart options.</value>
    public Dictionary<string, object>? Options { get; protected set; }

    /// <summary>
    /// Sets the options for the chart with the specified options.
    /// </summary>
    /// <param name="options">The chart options.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> widget.</returns>
    public T SetOptions(Dictionary<string, object> options)
    {
        Options = options;
        return (this as T)!;
    }
}