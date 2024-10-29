namespace AbanoubNassem.Trinity.Components.TrinityField;

public abstract partial class TrinityField<T, TDeserialization>
{
    /// <summary>
    /// Gets or sets the prefixes of the field.
    /// </summary>
    /// <value>An array of strings representing the prefixes.</value>
    public string[]? Prefixes { get; protected set; }

    /// <summary>
    /// Sets the prefixes of the field.
    /// </summary>
    /// <param name="prefixes">An array of strings representing the prefixes to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetPrefixes(params string[] prefixes)
    {
        Prefixes = prefixes;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the suffixes of the field.
    /// </summary>
    /// <value>An array of strings representing the suffixes.</value>
    public string[]? Suffixes { get; protected set; }

    /// <summary>
    /// Sets the suffixes of the field.
    /// </summary>
    /// <param name="suffixes">An array of strings representing the suffixes to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetSuffixes(params string[] suffixes)
    {
        Suffixes = suffixes;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the prefix icons of the field.
    /// </summary>
    /// <value>An array of strings representing the prefix icons.</value>
    public string[]? PrefixIcons { get; protected set; }

    /// <summary>
    /// Sets the prefix icons of the field.
    /// </summary>
    /// <param name="prefixIcons">An array of strings representing the prefix icons to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetPrefixIcons(params string[] prefixIcons)
    {
        PrefixIcons = prefixIcons;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the suffix icons of the field.
    /// </summary>
    /// <value>An array of strings representing the suffix icons.</value>
    public string[]? SuffixIcons { get; protected set; }

    /// <summary>
    /// Sets the suffix icons of the field.
    /// </summary>
    /// <param name="suffixIcons">An array of strings representing the suffix icons to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public T SetSuffixIcons(params string[] suffixIcons)
    {
        SuffixIcons = suffixIcons;
        return (this as T)!;
    }
}