using AbanoubNassem.Trinity.Components.BaseField;

namespace AbanoubNassem.Trinity.Fields;

public enum OrientationType : byte
{
    Horizontal,
    Vertical
}

public class SliderField<T> : BaseField<SliderField<T>, T>
{
    public override string ComponentName => "SliderField";

    public SliderField(string columnName) : base(columnName)
    {
    }

    public int Min { get; protected set; } = 0;

    public SliderField<T> SetMin(int min)
    {
        Min = min;
        return this;
    }

    public int Max { get; protected set; } = 100;

    public SliderField<T> SetMax(int max)
    {
        Max = max;
        return this;
    }

    public int Step { get; protected set; } = 1;

    public SliderField<T> SetStep(int step)
    {
        Step = step;
        return this;
    }



    public string Orientation { get; protected set; } = "horizontal";

    public SliderField<T> SetOrientation(OrientationType orientation)
    {
        Orientation = Enum.GetName(orientation)?.ToLower() ?? "horizontal";
        return this;
    }
}

public class SliderField : SliderField<int>
{
    public SliderField(string columnName) : base(columnName)
    {
    }
}