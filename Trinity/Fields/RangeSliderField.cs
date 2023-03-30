namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a range slider field used to select a range of values within a specified range of values.
/// </summary>
/// <typeparam name="T">The type of the range slider field.</typeparam>
public class RangeSliderField<T> : SliderField<T[]>
{
    /// <inheritdoc />
    public RangeSliderField(string columnName) : base(columnName)
    {
    }

    /// <summary>
    /// Gets a value indicating whether the slider field represents a range of values.
    /// </summary>
    public bool Range => true;
}

/// <inheritdoc />
public class RangeSliderField : RangeSliderField<int>
{
    /// <inheritdoc />
    public RangeSliderField(string columnName) : base(columnName)
    {
    }
}