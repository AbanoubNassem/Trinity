namespace AbanoubNassem.Trinity.Fields;

public class RangeSliderField<T> : SliderField<T[]>
{
    public RangeSliderField(string columnName) : base(columnName)
    {
    }

    public bool Range => true;
}

public class RangeSliderField : RangeSliderField<int>
{
    public RangeSliderField(string columnName) : base(columnName)
    {
    }
}