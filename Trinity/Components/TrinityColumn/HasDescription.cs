using Microsoft.AspNetCore.Html;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

/// <summary>
/// The position of the description relative to the column.
/// </summary>
public enum DescriptionPositionTypes : byte
{
    /// <summary>
    /// The description is displayed below the column.
    /// </summary>
    Bellow,

    /// <summary>
    /// The description is displayed above the column.
    /// </summary>
    Above
}

public abstract partial class TrinityColumn<T, TDeserialization>
{
    /// <summary>
    /// Gets or sets the position of the description relative to the column.
    /// </summary>
    public string? DescriptionPosition { get; protected set; }

    /// <summary>
    /// Gets or sets the description of the column.
    /// </summary>
    public object? Description { get; protected set; }

    /// <summary>
    /// Gets or sets the description callback of the column.
    /// </summary>
    protected CallbackWithRecord<string>? DescriptionUsingCallback { get; set; }

    /// <summary>
    /// Sets the description of the column with the specified position.
    /// </summary>
    /// <param name="descriptionUsingCallback">The description of the column.</param>
    /// <param name="pos">The position of the description relative to the column. Default value is <see cref="DescriptionPositionTypes.Bellow"/>.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetDescription(CallbackWithRecord<string>? descriptionUsingCallback,
        DescriptionPositionTypes pos = DescriptionPositionTypes.Bellow)
    {
        DescriptionUsingCallback = descriptionUsingCallback;
        DescriptionPosition = Enum.GetName(pos)?.ToLower() ?? "bellow";
        return (this as T)!;
    }

    /// <summary>
    /// Sets the description of the column with the specified position.
    /// </summary>
    /// <param name="description">The description of the column.</param>
    /// <param name="pos">The position of the description relative to the column. Default value is <see cref="DescriptionPositionTypes.Bellow"/>.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetDescription(string description, DescriptionPositionTypes pos = DescriptionPositionTypes.Bellow)
    {
        Description = description;
        DescriptionPosition = Enum.GetName(pos)?.ToLower() ?? "bellow";
        return (this as T)!;
    }

    /// <summary>
    /// Sets the HTML description of the column with the specified position.
    /// </summary>
    /// <param name="description">The HTML description of the column.</param>
    /// <param name="pos">The position of the description relative to the column. Default value is <see cref="DescriptionPositionTypes.Bellow"/>.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> column.</returns>
    public T SetDescription(HtmlString description, DescriptionPositionTypes pos = DescriptionPositionTypes.Bellow)
    {
        Description = description;
        DescriptionPosition = Enum.GetName(pos)?.ToLower() ?? "bellow";
        return (this as T)!;
    }
}