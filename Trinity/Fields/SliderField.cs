using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents the orientation types of a slider field.
/// </summary>
public enum OrientationType : byte
{
    /// <summary>
    /// The slider is horizontally oriented.
    /// </summary>
    Horizontal,

    /// <summary>
    /// The slider is vertically oriented.
    /// </summary>
    Vertical
}

/// <summary>
/// Represents a slider field.
/// </summary>
public class SliderField<T> : TrinityField<SliderField<T>, T>
{
    /// <inheritdoc />
    public override string ComponentName => "SliderField";

    /// <inheritdoc />
    public SliderField(string columnName) : base(columnName)
    {
    }

    /// <summary>
    /// Gets or sets the minimum value of the slider field.
    /// </summary>
    public int Min { get; protected set; }

    /// <summary>
    /// Sets the minimum value of the slider field.
    /// </summary>
    /// <param name="min">The minimum value of the slider field.</param>
    /// <returns>The current instance of the <see cref="SliderField{T}"/> class.</returns>
    public SliderField<T> SetMin(int min)
    {
        Min = min;
        return this;
    }

    /// <summary>
    /// Gets or sets the maximum value of the slider field.
    /// </summary>
    public int Max { get; protected set; } = 100;

    /// <summary>
    /// Sets the maximum value of the slider field.
    /// </summary>
    /// <param name="max">The maximum value of the slider field.</param>
    /// <returns>The current instance of the <see cref="SliderField{T}"/> class.</returns>
    public SliderField<T> SetMax(int max)
    {
        Max = max;
        return this;
    }

    /// <summary>
    /// Gets or sets the step of the slider field.
    /// </summary>
    public int Step { get; protected set; } = 1;

    /// <summary>
    /// Sets the step of the slider field.
    /// </summary>
    /// <param name="step">The step of the slider field.</param>
    /// <returns>The current instance of the <see cref="SliderField{T}"/> class.</returns>
    public SliderField<T> SetStep(int step)
    {
        Step = step;
        return this;
    }

    /// <summary>
    /// Gets or sets the orientation of the slider field.
    /// </summary>
    public string Orientation { get; protected set; } = "horizontal";

    /// <summary>
    /// Sets the orientation of the slider field.
    /// </summary>
    /// <param name="orientation">The orientation of the slider field.</param>
    /// <returns>The current instance of the <see cref="SliderField{T}"/> class.</returns>
    public SliderField<T> SetOrientation(OrientationType orientation)
    {
        Orientation = Enum.GetName(orientation)?.ToLower() ?? "horizontal";
        return this;
    }
}

/// <inheritdoc />
public class SliderField : SliderField<int>
{
    /// <inheritdoc />
    public SliderField(string columnName) : base(columnName)
    {
    }
}