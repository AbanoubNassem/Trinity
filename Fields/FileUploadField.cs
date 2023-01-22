using AbanoubNassem.Trinity.Components.BaseField;

namespace AbanoubNassem.Trinity.Fields;

public enum FileUploadTemplate : byte
{
    Basic,
    Advanced,
    Image
}

public class FileUploadField : BaseField<FileUploadField, string>
{
    public override string ComponentName => "FileUploadField";

    public FileUploadField(string columnName) : base(columnName)
    {
    }

    public string Template { get; protected set; } = "basic";
    public string Icon { get; protected set; } = "pi pi-image";

    public FileUploadField SetUploadTemplate(FileUploadTemplate template, string icon = "pi pi-image")
    {
        Template = Enum.GetName(template)?.ToLower() ?? "basic";
        Icon = icon;
        return this;
    }

    public bool Multiple { get; protected set; }

    public FileUploadField SetMultiple(bool multiple = true)
    {
        Multiple = multiple;
        return this;
    }

    public bool AutoUploads { get; protected set; }

    public FileUploadField SetAutoUploads(bool auto = true)
    {
        AutoUploads = auto;
        return this;
    }

    public string? FileTypes { get; protected set; }

    public FileUploadField SetFileTypes(string acceptTypes)
    {
        FileTypes = acceptTypes;
        return this;
    }

    public int? MaximumFileSize { get; protected set; }

    public FileUploadField SetMaximumFileSize(int maxBytes)
    {
        MaximumFileSize = maxBytes;
        return this;
    }
}