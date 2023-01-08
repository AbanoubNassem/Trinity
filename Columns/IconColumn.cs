using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components.BaseColumn;

namespace AbanoubNassem.Trinity.Columns;

public class IconColumn<T> : BaseColumn<IconColumn<T>, T>
{
    public IconColumn(string columnName) : base(columnName)
    {
    }

    public override string ComponentName => "IconColumn";

    public List<object>? Options { get; protected set; }

    public IconColumn<T> SetOptions(params (T?, string)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                value = item.Item1,
                icon = item.Item2
            });
        }

        return this;
    }

    public IconColumn<T> SetOptions(params (T?, string, string)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                value = item.Item1,
                icon = item.Item2,
                color = item.Item3
            });
        }

        return this;
    }

    public bool IsBoolean { get; protected set; }

    public IconColumn<T> SetAsBoolean(bool isBoolean = true)
    {
        IsBoolean = isBoolean;
        return this;
    }

    public T? TrueValue { get; protected set; }

    public IconColumn<T> SetTrueValue(T value)
    {
        TrueValue = value;
        return this;
    }

    public string? TrueIcon { get; protected set; }
    public string? TrueColor { get; protected set; }

    public IconColumn<T> SetTrueIcon(string trueIcon, string trueColor = "green")
    {
        TrueIcon = trueIcon;
        TrueColor = trueColor;
        return this;
    }

    public T? FalseValue { get; protected set; }

    public IconColumn<T> SetFalseValue(T value)
    {
        FalseValue = value;
        return this;
    }

    public string? FalseIcon { get; protected set; }
    public string? FalseColor { get; protected set; }

    public IconColumn<T> SetFalseIcon(string falseIcon, string falseColor = "red")
    {
        FalseIcon = falseIcon;
        FalseColor = falseColor;
        return this;
    }
}

public class IconColumn : IconColumn<string>
{
    public IconColumn(string columnName) : base(columnName)
    {
    }
}