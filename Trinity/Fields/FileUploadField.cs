using System.Text.RegularExpressions;
using AbanoubNassem.Trinity.Components.BaseField;
using AbanoubNassem.Trinity.Utilities;
using Humanizer;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace AbanoubNassem.Trinity.Fields;

public enum PanelLayoutType : byte
{
    Integrated,
    Compact,
    Circle,
    IntegratedCircle,
    CompactCircle
}

public enum ItemInsertLocationType : byte
{
    Before,
    After
}

public enum ImageResizeModeType : byte
{
    Force,
    Cover,
    Contain
}

public enum FileUploadTemplate : byte
{
    Basic,
    Advanced,
    Detailed
}

public class FileUploadField : CanUploadField<FileUploadField>
{
    public override string ComponentName => "FileUploadField";

    public FileUploadField(string columnName) : base(columnName)
    {
    }

    public override async Task<List<string>?> Upload(IWebHostEnvironment webHostEnvironment, IFormFileCollection files)
    {
        var randIds = new List<string>();

        foreach (var file in files)
        {
            if (MaximumFileSize != null && file.Length > MaximumFileSize)
            {
                TrinityNotifications.NotifyError(
                    $"{file.FileName} was not uploaded size exceeded the maximum allowed size."
                );
                continue;
            }

            if (FileTypes != null)
            {
                var pattern = $"{string.Join("|", FileTypes)}";
                var match = Regex.Match(file.ContentType, pattern, RegexOptions.IgnoreCase);

                if (!match.Success)
                {
                    TrinityNotifications.NotifyError(
                        $"{file.FileName} was not uploaded file type doesn't match ${pattern}."
                    );
                    continue;
                }
            }

            var res = ExtraUploadValidation?.Invoke(file);

            if (res != null)
            {
                TrinityNotifications.NotifyError(res);
                continue;
            }

            var basePath = Path.Combine(webHostEnvironment.WebRootPath, "trinity_temp");
            if (!Directory.Exists(basePath))
            {
                Directory.CreateDirectory(basePath);
            }

            var randId = Guid.NewGuid().ToString();
            var path = Path.Combine(basePath, $"{randId}_{file.FileName}");

            await using var stream = new FileStream(path, FileMode.Create);
            await file.CopyToAsync(stream);

            TrinityNotifications.NotifySuccess(
                $"{file.FileName} was uploaded successfully."
            );

            randIds.Add(randId);
        }


        return randIds;
    }

    public override Task<string?> Delete(string uniqueFileId)
    {
        throw new NotImplementedException();
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

    public bool AllowReorder { get; protected set; }

    public FileUploadField SetAllowReorder(bool allowReorder = true)
    {
        AllowReorder = allowReorder;
        return this;
    }

    public bool AutoUploads { get; protected set; }

    public FileUploadField SetAutoUploads(bool auto = true)
    {
        AutoUploads = auto;
        return this;
    }

    public string[]? FileTypes { get; protected set; }

    public FileUploadField SetFileTypes(params string[] acceptTypes)
    {
        FileTypes = acceptTypes;
        return this;
    }

    public string? MinFileSize { get; protected set; }
    public long? MinimumFileSize { get; protected set; }

    public FileUploadField SetMinimumFileSize(long minBytes)
    {
        MinimumFileSize = minBytes;
        MinFileSize = FileFormatter.FormatBytes(minBytes);
        return this;
    }

    public string? MaxFileSize { get; protected set; }
    public long? MaximumFileSize { get; protected set; }

    public FileUploadField SetMaximumFileSize(long maxBytes)
    {
        MaximumFileSize = maxBytes;
        MaxFileSize = FileFormatter.FormatBytes(maxBytes);
        return this;
    }

    protected string? UploadDirectory { get; set; }

    public FileUploadField SetUploadDirectory(string directory)
    {
        UploadDirectory = directory;
        return this;
    }

    protected Func<IFormFile, string?>? ExtraUploadValidation { get; set; }

    public FileUploadField SetExtraUploadValidation(Func<IFormFile, string?> extraUploadValidation)
    {
        ExtraUploadValidation = extraUploadValidation;
        return this;
    }

    public bool ShouldOrientImageFromExif { get; protected set; } = true;

    public FileUploadField SetShouldOrientImageFromExif(bool shouldOrientImageFromExif = true)
    {
        ShouldOrientImageFromExif = shouldOrientImageFromExif;
        return this;
    }

    public bool CanPreview { get; protected set; } = true;

    public FileUploadField SetCanPreview(bool auto = true)
    {
        CanPreview = auto;
        return this;
    }

    public bool AllowImageTransform { get; protected set; }

    public FileUploadField SetAllowImageTransform(bool allow = true)
    {
        AllowImageTransform = allow;
        return this;
    }

    public string? ImageCropAspectRatio { get; protected set; }

    public FileUploadField SetImageCropAspectRatio(string imageCropAspectRatio)
    {
        ImageCropAspectRatio = imageCropAspectRatio;
        return this;
    }

    public int? ImagePreviewHeight { get; protected set; }

    public FileUploadField SetImagePreviewHeight(int imagePreviewHeight)
    {
        ImagePreviewHeight = imagePreviewHeight;
        return this;
    }

    public int? ImageResizeTargetHeight { get; protected set; }

    public FileUploadField SetImageResizeTargetHeight(int imageResizeTargetHeight)
    {
        ImageResizeTargetHeight = imageResizeTargetHeight;
        return this;
    }

    public int? ImageResizeTargetWidth { get; protected set; }

    public FileUploadField SetImageResizeTargetWidth(int imageResizeTargetWidth)
    {
        ImageResizeTargetWidth = imageResizeTargetWidth;
        return this;
    }

    public string? ImageResizeMode { get; protected set; }

    public FileUploadField SetImageResizeMode(ImageResizeModeType mode)
    {
        ImageResizeMode = Enum.GetName(mode)?.ToLower();
        return this;
    }

    public bool? ImageResizeUpscale { get; protected set; }

    public FileUploadField SetImageResizeUpscale(bool imageResizeUpscale = true)
    {
        ImageResizeUpscale = imageResizeUpscale;
        return this;
    }

    public string? ItemInsertLocation { get; protected set; }

    public FileUploadField SetItemInsertLocation(ItemInsertLocationType itemInsertLocation)
    {
        ItemInsertLocation = Enum.GetName(itemInsertLocation)?.ToLower();
        return this;
    }

    public string? ButtonProcessItemPosition { get; protected set; }

    public FileUploadField SetButtonProcessItemPosition(string buttonProcessItemPosition)
    {
        ButtonProcessItemPosition = buttonProcessItemPosition;
        return this;
    }

    public string? ButtonRemoveItemPosition { get; protected set; }

    public FileUploadField SetButtonRemoveItemPosition(string buttonRemoveItemPosition)
    {
        ButtonRemoveItemPosition = buttonRemoveItemPosition;
        return this;
    }

    public string? RemoveUploadedFileButtonPosition { get; protected set; }

    public FileUploadField SetRemoveUploadedFileButtonPosition(string removeUploadedFileButtonPosition)
    {
        RemoveUploadedFileButtonPosition = removeUploadedFileButtonPosition;
        return this;
    }

    public string? LoadIndicatorPosition { get; protected set; }

    public FileUploadField SetLoadIndicatorPosition(string loadIndicatorPosition)
    {
        LoadIndicatorPosition = loadIndicatorPosition;
        return this;
    }

    public string? PanelAspectRatio { get; protected set; }

    public FileUploadField SetPanelAspectRatio(string panelAspectRatio)
    {
        PanelAspectRatio = panelAspectRatio;
        return this;
    }

    public string? PanelLayout { get; protected set; }

    public FileUploadField SetPanelLayout(PanelLayoutType panelLayout)
    {
        PanelLayout = Regex.Replace(Enum.GetName(panelLayout) ?? "", @"(\B[A-Z])", " $1").ToLower();
        return this;
    }

    public string? ProgressIndicatorPosition { get; protected set; }

    public FileUploadField SetProgressIndicatorPosition(string progressIndicatorPosition)
    {
        ProgressIndicatorPosition = progressIndicatorPosition;
        return this;
    }

    public string? UploadProgressIndicatorPosition { get; protected set; }

    public FileUploadField SetUploadProgressIndicatorPosition(string uploadProgressIndicatorPosition)
    {
        UploadProgressIndicatorPosition = uploadProgressIndicatorPosition;
        return this;
    }


    public FileUploadField SetAsImage()
    {
        SetFileTypes("image/*");
        return this;
    }
}