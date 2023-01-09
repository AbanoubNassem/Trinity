using AbanoubNassem.Trinity.Components.BaseColumn;

namespace AbanoubNassem.Trinity.Columns;

public class ImageColumn : BaseColumn<ImageColumn, string>
{
    public ImageColumn(string columnName) : base(columnName)
    {
    }

    public override string ComponentName => "ImageColumn";

    public override void Format(IDictionary<string, object?> record)
    {
        base.Format(record);

        if (AltCallback != null)
        {
            record.Add($"{ColumnName}_alt", AltCallback(record));
        }
    }

    protected CallbackWithRecord<string>? AltCallback { get; set; }

    public ImageColumn SetAlt(CallbackWithRecord<string> altCallback)
    {
        AltCallback = altCallback;
        return this;
    }

    public string? Alt { get; protected set; }

    public ImageColumn SetAlt(string alt)
    {
        Alt = alt;

        return this;
    }

    public string? Width { get; protected set; }

    public ImageColumn SetWidth(string width)
    {
        Width = width;

        return this;
    }

    public string? Height { get; protected set; }

    public ImageColumn SetHeight(string height)
    {
        Height = height;

        return this;
    }

    public ImageColumn SetAsSquare(string size = "6rem")
    {
        Width = size;
        Height = size;
        return this;
    }

    public bool IsCircular { get; protected set; }

    public ImageColumn SetAsCircular(string size = "6rem")
    {
        Width = size;
        Height = size;
        IsCircular = true;
        return this;
    }

    public bool IsPreviewable { get; protected set; }

    public ImageColumn SetAsPreviewable(bool previewable = true)
    {
        IsPreviewable = previewable;
        return this;
    }
    
    public bool IsDownloadable { get; protected set; }

    public ImageColumn SetAsDownloadable(bool downloadable = true)
    {
        IsDownloadable = downloadable;
        return this;
    }
}