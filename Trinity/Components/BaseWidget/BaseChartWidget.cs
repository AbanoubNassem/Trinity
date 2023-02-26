namespace AbanoubNassem.Trinity.Components.BaseWidget;

public abstract class BaseChartWidget<T> : BaseWidget<T> where T : BaseChartWidget<T>
{
    protected BaseChartWidget()
    {
    }

    protected BaseChartWidget(params object[] labels)
    {
        ChartLabels = labels.ToList();
    }

    public List<object> ChartLabels { get; protected set; } = new();
    public List<object> ChartValues { get; protected set; } = new();

    public T SetChart(params (object, object)[] chartLabelValues)
    {
        ChartLabels = chartLabelValues.Select(x => x.Item1).ToList();
        ChartValues = chartLabelValues.Select(x => x.Item2).ToList();
        return (this as T)!;
    }

    public T SetChart(params object[] chartValues)
    {
        ChartValues = chartValues.ToList();
        return (this as T)!;
    }

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

    public string[]? BackgroundColors { get; protected set; }

    public T SetBackgroundColors(params string[] colors)
    {
        BackgroundColors = colors;
        return (this as T)!;
    }


    public Dictionary<string, object>? Options { get; protected set; }

    public T SetOptions(Dictionary<string, object> options)
    {
        Options = options;
        return (this as T)!;
    }
}