namespace AbanoubNassem.Trinity.Components.TrinityColumn;

/// <summary>
/// Specifies the available size types for a TrinityColumn.
/// </summary>
public enum SizeTypes : byte
{
    /// <summary>
    /// Extra small size.
    /// </summary>
    Xs,

    /// <summary>
    /// Small size.
    /// </summary>
    Sm,

    /// <summary>
    /// Base size.
    /// </summary>
    Base,

    /// <summary>
    /// Large size.
    /// </summary>
    Lg,

    /// <summary>
    /// Extra large size.
    /// </summary>
    Xl,

    /// <summary>
    /// Double extra large size.
    /// </summary>
    _2Xl,

    /// <summary>
    /// Triple extra large size.
    /// </summary>
    _3Xl,

    /// <summary>
    /// Quadruple extra large size.
    /// </summary>
    _4Xl,

    /// <summary>
    /// Quintuple extra large size.
    /// </summary>
    _5Xl,

    /// <summary>
    /// Sextuple extra large size.
    /// </summary>
    _6Xl,

    /// <summary>
    /// Septuple extra large size.
    /// </summary>
    _7Xl,

    /// <summary>
    /// Octuple extra large size.
    /// </summary>
    _8Xl,
}

public abstract partial class TrinityColumn<T, TDeserialization>
{
    /// <summary>
    /// Gets or sets the size of the column.
    /// </summary>
    /// <remarks>
    /// The size is specified using a <see cref="SizeTypes"/> value.
    /// </remarks>
    public string? Size { get; protected set; }

    /// <summary>
    /// Sets the size of the column.
    /// </summary>
    /// <param name="size">The size of the column as a <see cref="SizeTypes"/> value.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetSize(SizeTypes size)
    {
        Size = Enum.GetName(size)?.ToLower().Replace("_", "");
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the font weight of the column.
    /// </summary>
    public string? Weight { get; protected set; }

    /// <summary>
    /// Sets the weight of the column font.
    /// </summary>
    /// <param name="weight">The weight of the column font as a string.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetWeight(string weight)
    {
        Weight = weight;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the font family of the column.
    /// </summary>
    public string? FontFamily { get; protected set; }

    /// <summary>
    /// Sets the font family of the column.
    /// </summary>
    /// <param name="fontFamily">The font family of the column as a string. <seealso cref="FontFamily"/></param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetFontFamily(string fontFamily)
    {
        FontFamily = fontFamily;
        return (this as T)!;
    }
}