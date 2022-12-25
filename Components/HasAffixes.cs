namespace AbanoubNassem.Trinity.Components;

public abstract partial class BaseField<T, TDeserialization>
{
    public string[]? Prefixes { get; protected set; }

    public T SetPrefixes(params string[] prefixes)
    {
        Prefixes = prefixes;
        return (this as T)!;
    }

    public string[]? Suffixes { get; protected set; }

    public T SetSuffixes(params string[] suffixes)
    {
        Suffixes = suffixes;
        return (this as T)!;
    }

    public string[]? PrefixIcons { get; protected set; }

    public T SetPrefixIcons(params string[] prefixIcons)
    {
        PrefixIcons = prefixIcons;
        return (this as T)!;
    }

    public string[]? SuffixIcons { get; protected set; }

    public T SetSuffixIcons(params string[] suffixIcons)
    {
        SuffixIcons = suffixIcons;
        return (this as T)!;
    }
}