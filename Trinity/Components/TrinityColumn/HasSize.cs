namespace AbanoubNassem.Trinity.Components.TrinityColumn;

public enum SizeTypes : byte
{
    Xs,
    Sm,
    Base,
    Lg,
    Xl,
    _2Xl,
    _3Xl,
    _4Xl,
    _5Xl,
    _6Xl,
    _7Xl,
    _8Xl,
}

public abstract partial class TrinityColumn<T, TDeserialization>
{
    public string? Size { get; protected set; }

    public T SetSize(SizeTypes size)
    {
        Size = Enum.GetName(size)?.ToLower().Replace("_", "");
        return (this as T)!;
    }

    public string? Weight { get; protected set; }

    public T SetWeight(string weight)
    {
        Weight = weight;
        return (this as T)!;
    }

    public string? FontFamily { get; protected set; }

    public T SetFontFamily(string fontFamily)
    {
        FontFamily = fontFamily;
        return (this as T)!;
    }
}