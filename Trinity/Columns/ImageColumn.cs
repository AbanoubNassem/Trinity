using AbanoubNassem.Trinity.Components.TrinityColumn;

namespace AbanoubNassem.Trinity.Columns;

/// <summary>
/// Represents a column in a Trinity table that stores image data.
/// </summary>
/// <remarks>
/// ImageColumn inherits from TrinityColumn and stores image data as a string.
/// </remarks>
public class ImageColumn : TrinityColumn<ImageColumn, string>
{
    /// <inheritdoc />
    public ImageColumn(string columnName) : base(columnName)
    {
    }

    /// <inheritdoc />
    public override string ComponentName => "ImageColumn";

    /// <inheritdoc />
    public override void Format()
    {
        base.Format();

        if (AltCallback != null)
        {
            Record.Add($"{ColumnName}_alt", AltCallback(Record));
        }
    }

    /// <summary>
    /// Gets or sets the callback function that returns the alternate text for the image.
    /// </summary>
    protected CallbackWithRecord<string>? AltCallback { get; set; }

    /// <summary>
    /// Sets the callback function that returns the alternate text for the image.
    /// </summary>
    /// <param name="altCallback">The callback function to set.</param>
    /// <returns>The updated <see cref="ImageColumn"/> instance.</returns>
    public ImageColumn SetAlt(CallbackWithRecord<string> altCallback)
    {
        AltCallback = altCallback;
        return this;
    }

    /// <summary>
    /// Gets or sets the alternate text for the image.
    /// </summary>
    public string? Alt { get; protected set; }

    /// <summary>
    /// Sets the alternate text for the image.
    /// </summary>
    /// <param name="alt">The alternate text to set.</param>
    /// <returns>The updated <see cref="ImageColumn"/> instance.</returns>
    public ImageColumn SetAlt(string alt)
    {
        Alt = alt;

        return this;
    }

    /// <summary>
    /// Gets or sets the width of the image.
    /// </summary>
    public string? Width { get; protected set; }

    /// <summary>
    /// Sets the width of the image.
    /// </summary>
    /// <param name="width">The width to set.</param>
    /// <returns>The updated <see cref="ImageColumn"/> instance.</returns>
    public ImageColumn SetWidth(string width)
    {
        Width = width;

        return this;
    }

    /// <summary>
    /// Gets or sets the height of the image.
    /// </summary>
    public string? Height { get; protected set; }

    /// <summary>
    /// Sets the height of the image.
    /// </summary>
    /// <param name="height">The height to set.</param>
    /// <returns>The updated <see cref="ImageColumn"/> instance.</returns>
    public ImageColumn SetHeight(string height)
    {
        Height = height;

        return this;
    }

    /// <summary>
    /// Sets the width and height of the image to the same value to create a square image.
    /// </summary>
    /// <param name="size">The size to set.</param>
    /// <returns>The updated <see cref="ImageColumn"/> instance.</returns>
    public ImageColumn SetAsSquare(string size = "6rem")
    {
        Width = size;
        Height = size;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the image should be displayed as circular.
    /// </summary>
    public bool IsCircular { get; protected set; }

    /// <summary>
    /// Sets the image to be displayed as circular with the specified size.
    /// </summary>
    /// <param name="size">The size of the circular image. Default is 6rem.</param>
    /// <returns>The updated <see cref="ImageColumn"/> instance.</returns>
    public ImageColumn SetAsCircular(string size = "6rem")
    {
        Width = size;
        Height = size;
        IsCircular = true;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the image should be previewable.
    /// </summary>
    public bool IsPreviewable { get; protected set; }

    /// <summary>
    /// Sets the image to be previewable or not.
    /// </summary>
    /// <param name="previewable">A boolean value indicating whether the image should be previewable.</param>
    /// <returns>The updated <see cref="ImageColumn"/> instance.</returns>
    public ImageColumn SetAsPreviewable(bool previewable = true)
    {
        IsPreviewable = previewable;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the image should be downloadable.
    /// </summary>
    public bool IsDownloadable { get; protected set; }

    /// <summary>
    /// Sets the image to be downloadable or not.
    /// </summary>
    /// <param name="downloadable">A boolean value indicating whether the image should be downloadable.</param>
    /// <returns>The updated <see cref="ImageColumn"/> instance.</returns>
    public ImageColumn SetAsDownloadable(bool downloadable = true)
    {
        IsDownloadable = downloadable;
        return this;
    }
}