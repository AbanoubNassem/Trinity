using System.Text.RegularExpressions;
using AbanoubNassem.Trinity.Components.TrinityField;
using AbanoubNassem.Trinity.Utilities;
using Microsoft.AspNetCore.Http;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Enumeration representing the different panel layout types.
/// </summary>
public enum PanelLayoutType : byte
{
    /// <summary>
    /// Integrated panel layout.
    /// </summary>
    Integrated,

    /// <summary>
    /// Compact panel layout.
    /// </summary>
    Compact,

    /// <summary>
    /// Circle panel layout.
    /// </summary>
    Circle,

    /// <summary>
    /// Integrated circle panel layout.
    /// </summary>
    IntegratedCircle,

    /// <summary>
    /// Compact circle panel layout.
    /// </summary>
    CompactCircle
}

/// <summary>
/// Enumeration representing the different types of item insert locations.
/// </summary>
public enum ItemInsertLocationType : byte
{
    /// <summary>
    /// Insert before the specified item.
    /// </summary>
    Before,

    /// <summary>
    /// Insert after the specified item.
    /// </summary>
    After
}

/// <summary>
/// Enumeration representing the different image resize modes.
/// </summary>
public enum ImageResizeModeType : byte
{
    /// <summary>
    /// Force the image to the specified dimensions, possibly distorting the image.
    /// </summary>
    Force,

    /// <summary>
    /// Resize the image to completely cover the target dimensions, cropping the image if necessary.
    /// </summary>
    Cover,

    /// <summary>
    /// Resize the image to fit completely inside the target dimensions, with no cropping.
    /// </summary>
    Contain
}

/// <summary>
/// Enumeration representing the different file upload templates.
/// </summary>
public enum FileUploadTemplate : byte
{
    /// <summary>
    /// Basic file upload template.
    /// </summary>
    Basic,

    /// <summary>
    /// Advanced file upload template.
    /// </summary>
    Advanced,

    /// <summary>
    /// Detailed file upload template.
    /// </summary>
    Detailed
}

/// <summary>
/// Represents a file upload field that can be added to a form.
/// </summary>
public class FileUploadField : CanUploadField<FileUploadField>
{
    /// <inheritdoc />
    public override string ComponentName => "FileUploadField";

    /// <inheritdoc />
    public FileUploadField(string columnName) : base(columnName)
    {
    }

    /// <inheritdoc />
    public override async Task<string?> Upload(IFormFile file)
    {
        if (MaximumFileSize != null && file.Length > MaximumFileSize)
        {
            TrinityNotificationsManager.NotifyError(Localizer["file_exceeded_max_size", file.FileName]);
            return null;
        }

        if (FileTypes != null)
        {
            var pattern = $"{string.Join("|", FileTypes)}";
            var match = Regex.Match(file.ContentType, pattern, RegexOptions.IgnoreCase);

            if (!match.Success)
            {
                TrinityNotificationsManager.NotifyError(Localizer["file_does_not_match_pattern", file.FileName, pattern]);
                return null;
            }
        }

        var res = ExtraUploadValidation?.Invoke(file);

        if (res != null)
        {
            TrinityNotificationsManager.NotifyError(res);
            return null;
        }

        if (!Directory.Exists(UploadTempDirectory))
        {
            Directory.CreateDirectory(UploadTempDirectory);
        }

        var randId = Guid.NewGuid().ToString();
        var path = Path.Combine(UploadTempDirectory, $"{randId}_{file.FileName}");

        await using var stream = new FileStream(path, FileMode.Create);
        await file.CopyToAsync(stream);

        TrinityNotificationsManager.NotifySuccess(Localizer["file_was_uploaded", file.FileName]);

        var moveUploadedFromTempToDirectory = Path.Combine("wwwroot", GetUploadDirectory());

        if (!Directory.Exists(moveUploadedFromTempToDirectory))
            Directory.CreateDirectory(moveUploadedFromTempToDirectory);

        return randId;
    }

    /// <inheritdoc />
    public override void Fill(ref Dictionary<string, object?> form,
        IReadOnlyDictionary<string, object?>? oldRecord = null)
    {
        if (!form.ContainsKey(ColumnName)) return;

        var oldFiles = oldRecord?[ColumnName]?.ToString()?.Split(',').Where(x => !string.IsNullOrEmpty(x)).ToArray() ??
                       Array.Empty<string>();
        var formFilesIds = form[ColumnName]?.ToString()?.Split(',').Where(x => !string.IsNullOrEmpty(x)).ToArray() ??
                           Array.Empty<string>();

        var files = new List<string>();

        foreach (var file in oldFiles)
        {
            var removed = formFilesIds.All(id => !file.Contains(id));

            if (removed)
            {
                try
                {
                    File.Delete(Path.Combine("wwwroot", file));
                }
                catch
                {
                    // ignored
                }
            }
            else
            {
                files.Add(file);
            }
        }

        if (formFilesIds.Any())
        {
            var tempFiles = Directory.EnumerateFiles(UploadTempDirectory).ToList();

            foreach (var fileId in formFilesIds)
            {
                var shouldBeAdded = oldFiles.All(x => !x.Contains(fileId));

                if (!shouldBeAdded) continue;

                var tempFile = tempFiles.FirstOrDefault(file => Path.GetFileName(file).StartsWith(fileId));

                if (tempFile == null) continue;

                var fileName = Path.GetFileName(tempFile);
                var moveUploadedFromTempToDirectory = Path.Combine("wwwroot", GetUploadDirectory());
                var newPath = Path.Combine(moveUploadedFromTempToDirectory, fileName);
                File.Move(tempFile, newPath);

                files.Add(Path.Combine(GetUploadDirectory(), fileName));
            }
        }

        form[ColumnName] = string.Join(',', files);
    }

    /// <summary>
    /// Gets or sets the template for the file upload field.
    /// </summary>
    /// <value>The default value is "basic".</value>
    public string Template { get; protected set; } = "basic";

    /// <summary>
    /// Gets or sets the icon for the file upload field.
    /// </summary>
    /// <value>The default value is "pi pi-image".</value>
    public string Icon { get; protected set; } = "pi pi-image";

    /// <summary>
    /// Sets the template and icon for the file upload field.
    /// </summary>
    /// <param name="template">The template to set.</param>
    /// <param name="icon">The icon to set. The default value is "pi pi-image".</param>
    /// <returns>The <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetUploadTemplate(FileUploadTemplate template, string icon = "pi pi-image")
    {
        Template = Enum.GetName(template)?.ToLower() ?? "basic";
        Icon = icon;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether multiple files can be uploaded at once.
    /// </summary>
    /// <value><c>true</c> if multiple files can be uploaded; otherwise, <c>false</c>. The default value is <c>false</c>.</value>
    public bool Multiple { get; protected set; }

    /// <summary>
    /// Sets whether multiple files can be uploaded at once.
    /// </summary>
    /// <param name="multiple"><c>true</c> to allow multiple files to be uploaded; otherwise, <c>false</c>.</param>
    /// <returns>The <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetAsMultiple(bool multiple = true)
    {
        Multiple = multiple;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the user is allowed to reorder the uploaded files.
    /// </summary>
    public bool AllowReorder { get; protected set; }

    /// <summary>
    /// Sets whether the user is allowed to reorder the uploaded files.
    /// </summary>
    /// <param name="allowReorder">Whether the user is allowed to reorder the uploaded files.</param>
    /// <returns>The <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetAllowReorder(bool allowReorder = true)
    {
        AllowReorder = allowReorder;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether uploaded files are automatically uploaded to the server.
    /// </summary>
    public bool AutoUploads { get; protected set; }

    /// <summary>
    /// Sets whether uploaded files are automatically uploaded to the server.
    /// </summary>
    /// <param name="auto">Whether uploaded files are automatically uploaded to the server.</param>
    /// <returns>The <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetAutoUploads(bool auto = true)
    {
        AutoUploads = auto;
        return this;
    }

    /// <summary>
    /// Gets or sets the file types that the user can select.
    /// </summary>
    public string[]? FileTypes { get; protected set; }

    /// <summary>
    /// Sets the file types that the user can select.
    /// </summary>
    /// <param name="acceptTypes">The file types that the user can select.</param>
    /// <returns>The <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetFileTypes(params string[] acceptTypes)
    {
        FileTypes = acceptTypes;
        return this;
    }

    /// <summary>
    /// Gets or sets the minimum file size that the user can upload.
    /// </summary>
    public string? MinFileSize { get; protected set; }

    /// <summary>
    /// Gets or sets the minimum file size that the user can upload.
    /// </summary>
    public long? MinimumFileSize { get; protected set; }

    /// <summary>
    /// Sets the minimum file size that the user can upload.
    /// </summary>
    /// <param name="minBytes">The minimum file size that the user can upload.</param>
    /// <returns>The <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetMinimumFileSize(long minBytes)
    {
        MinimumFileSize = minBytes;
        MinFileSize = FileFormatter.FormatBytes(minBytes);
        return this;
    }

    /// <summary>
    /// Gets or sets the maximum file size that the user can upload.
    /// </summary>
    public string? MaxFileSize { get; protected set; }

    /// <summary>
    /// Gets or sets the maximum file size that the user can upload.
    /// </summary>
    public long? MaximumFileSize { get; protected set; }

    /// <summary>
    /// Sets the maximum file size that the user can upload.
    /// </summary>
    /// <param name="maxBytes">The maximum file size that the user can upload.</param>
    /// <returns>The <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetMaximumFileSize(long maxBytes)
    {
        MaximumFileSize = maxBytes;
        MaxFileSize = FileFormatter.FormatBytes(maxBytes);
        return this;
    }

    /// <summary>
    /// Gets or sets the extra upload validation function.
    /// </summary>
    /// <remarks>
    /// The function should return a string message if the validation fails, or null if it passes.
    /// </remarks>
    protected Func<IFormFile, string?>? ExtraUploadValidation { get; set; }

    /// <summary>
    /// Sets the extra upload validation function for the file upload field.
    /// </summary>
    /// <param name="extraUploadValidation">The extra upload validation function to set.</param>
    /// <returns>The current <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetExtraUploadValidation(Func<IFormFile, string?> extraUploadValidation)
    {
        ExtraUploadValidation = extraUploadValidation;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the uploaded image should be oriented from EXIF data.
    /// </summary>
    public bool ShouldOrientImageFromExif { get; protected set; } = true;

    /// <summary>
    /// Sets the value indicating whether the uploaded image should be oriented from EXIF data.
    /// </summary>
    /// <param name="shouldOrientImageFromExif">The value to set.</param>
    /// <returns>The current <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetShouldOrientImageFromExif(bool shouldOrientImageFromExif = true)
    {
        ShouldOrientImageFromExif = shouldOrientImageFromExif;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the file can be previewed.
    /// </summary>
    public bool CanPreview { get; protected set; } = true;

    /// <summary>
    /// Sets a value indicating whether the file can be previewed.
    /// </summary>
    /// <param name="auto">The value to set.</param>
    /// <returns>The current <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetCanPreview(bool auto = true)
    {
        CanPreview = auto;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether image transform is allowed.
    /// </summary>
    public bool AllowImageTransform { get; protected set; }

    /// <summary>
    /// Sets a value indicating whether image transform is allowed.
    /// </summary>
    /// <param name="allow">The value to set.</param>
    /// <returns>The current <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetAllowImageTransform(bool allow = true)
    {
        AllowImageTransform = allow;
        return this;
    }

    /// <summary>
    /// Gets or sets the aspect ratio of the image crop.
    /// </summary>
    public string? ImageCropAspectRatio { get; protected set; }

    /// <summary>
    /// Sets the aspect ratio of the image crop.
    /// </summary>
    /// <param name="imageCropAspectRatio">The aspect ratio to set.</param>
    /// <returns>The current <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetImageCropAspectRatio(string imageCropAspectRatio)
    {
        ImageCropAspectRatio = imageCropAspectRatio;
        return this;
    }

    /// <summary>
    /// Gets or sets the height of the image preview.
    /// </summary>
    public int? ImagePreviewHeight { get; protected set; }

    /// <summary>
    /// Sets the height of the image preview.
    /// </summary>
    /// <param name="imagePreviewHeight">The height of the image preview.</param>
    /// <returns>The updated <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetImagePreviewHeight(int imagePreviewHeight)
    {
        ImagePreviewHeight = imagePreviewHeight;
        return this;
    }

    /// <summary>
    /// Gets or sets the height of the target image after resize.
    /// </summary>
    public int? ImageResizeTargetHeight { get; protected set; }

    /// <summary>
    /// Sets the height of the target image after resize.
    /// </summary>
    /// <param name="imageResizeTargetHeight">The height of the target image after resize.</param>
    /// <returns>The updated <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetImageResizeTargetHeight(int imageResizeTargetHeight)
    {
        ImageResizeTargetHeight = imageResizeTargetHeight;
        return this;
    }

    /// <summary>
    /// Gets or sets the width of the target image after resize.
    /// </summary>
    public int? ImageResizeTargetWidth { get; protected set; }

    /// <summary>
    /// Sets the width of the target image after resize.
    /// </summary>
    /// <param name="imageResizeTargetWidth">The width of the target image after resize.</param>
    /// <returns>The updated <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetImageResizeTargetWidth(int imageResizeTargetWidth)
    {
        ImageResizeTargetWidth = imageResizeTargetWidth;
        return this;
    }

    /// <summary>
    /// Gets or sets the mode used for image resizing.
    /// </summary>
    public string? ImageResizeMode { get; protected set; }

    /// <summary>
    /// Sets the mode used for image resizing.
    /// </summary>
    /// <param name="mode">The mode used for image resizing.</param>
    /// <returns>The updated <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetImageResizeMode(ImageResizeModeType mode)
    {
        ImageResizeMode = Enum.GetName(mode)?.ToLower();
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether to upscale the image during resizing.
    /// </summary>
    public bool? ImageResizeUpscale { get; protected set; }

    /// <summary>
    /// Sets a value indicating whether to upscale the image during resizing.
    /// </summary>
    /// <param name="imageResizeUpscale">The value indicating whether to upscale the image during resizing.</param>
    /// <returns>The updated <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetImageResizeUpscale(bool imageResizeUpscale = true)
    {
        ImageResizeUpscale = imageResizeUpscale;
        return this;
    }

    /// <summary>
    /// Gets or sets the location where the item will be inserted.
    /// </summary>
    public string? ItemInsertLocation { get; protected set; }

    /// <summary>
    /// Sets the location where the item will be inserted.
    /// </summary>
    /// <param name="itemInsertLocation">The location where the item will be inserted.</param>
    /// <returns>The updated <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetItemInsertLocation(ItemInsertLocationType itemInsertLocation)
    {
        ItemInsertLocation = Enum.GetName(itemInsertLocation)?.ToLower();
        return this;
    }

    /// <summary>
    /// Gets or sets the position of the "process" button in the file upload field.
    /// </summary>
    public string? ButtonProcessItemPosition { get; protected set; }

    /// <summary>
    /// Sets the position of the "process" button in the file upload field.
    /// </summary>
    /// <param name="buttonProcessItemPosition">The position of the "process" button.</param>
    /// <returns>The current <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetButtonProcessItemPosition(string buttonProcessItemPosition)
    {
        ButtonProcessItemPosition = buttonProcessItemPosition;
        return this;
    }

    /// <summary>
    /// Gets or sets the position of the "remove" button in the file upload field.
    /// </summary>
    public string? ButtonRemoveItemPosition { get; protected set; }

    /// <summary>
    /// Sets the position of the "remove" button in the file upload field.
    /// </summary>
    /// <param name="buttonRemoveItemPosition">The position of the "remove" button.</param>
    /// <returns>The current <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetButtonRemoveItemPosition(string buttonRemoveItemPosition)
    {
        ButtonRemoveItemPosition = buttonRemoveItemPosition;
        return this;
    }

    /// <summary>
    /// Gets or sets the position of the "remove uploaded file" button in the file upload field.
    /// </summary>
    public string? RemoveUploadedFileButtonPosition { get; protected set; }

    /// <summary>
    /// Sets the position of the "remove uploaded file" button in the file upload field.
    /// </summary>
    /// <param name="removeUploadedFileButtonPosition">The position of the "remove uploaded file" button.</param>
    /// <returns>The current <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetRemoveUploadedFileButtonPosition(string removeUploadedFileButtonPosition)
    {
        RemoveUploadedFileButtonPosition = removeUploadedFileButtonPosition;
        return this;
    }

    /// <summary>
    /// Gets or sets the position of the load indicator element.
    /// </summary>
    public string? LoadIndicatorPosition { get; protected set; }

    /// <summary>
    /// Sets the position of the load indicator element.
    /// </summary>
    /// <param name="loadIndicatorPosition">The position of the load indicator element.</param>
    /// <returns>The current instance of the <see cref="FileUploadField"/> class.</returns>
    public FileUploadField SetLoadIndicatorPosition(string loadIndicatorPosition)
    {
        LoadIndicatorPosition = loadIndicatorPosition;
        return this;
    }

    /// <summary>
    /// Gets or sets the aspect ratio of the panel element.
    /// </summary>
    public string? PanelAspectRatio { get; protected set; }

    /// <summary>
    /// Sets the aspect ratio of the panel element.
    /// </summary>
    /// <param name="panelAspectRatio">The aspect ratio of the panel element.</param>
    /// <returns>The current instance of the <see cref="FileUploadField"/> class.</returns>
    public FileUploadField SetPanelAspectRatio(string panelAspectRatio)
    {
        PanelAspectRatio = panelAspectRatio;
        return this;
    }

    /// <summary>
    /// Gets or sets the layout of the panel element.
    /// </summary>
    public string? PanelLayout { get; protected set; }

    /// <summary>
    /// Sets the layout of the panel element.
    /// </summary>
    /// <param name="panelLayout">The layout of the panel element.</param>
    /// <returns>The current instance of the <see cref="FileUploadField"/> class.</returns>
    public FileUploadField SetPanelLayout(PanelLayoutType panelLayout)
    {
        PanelLayout = Regex.Replace(Enum.GetName(panelLayout) ?? "", @"(\B[A-Z])", " $1").ToLower();
        return this;
    }

    /// <summary>
    /// Gets or sets the position of the progress indicator element.
    /// </summary>
    public string? ProgressIndicatorPosition { get; protected set; }

    /// <summary>
    /// Sets the position of the progress indicator element.
    /// </summary>
    /// <param name="progressIndicatorPosition">The position of the progress indicator element.</param>
    /// <returns>The current instance of the <see cref="FileUploadField"/> class.</returns>
    public FileUploadField SetProgressIndicatorPosition(string progressIndicatorPosition)
    {
        ProgressIndicatorPosition = progressIndicatorPosition;
        return this;
    }

    /// <summary>
    /// Gets or sets the position of the upload progress indicator element.
    /// </summary>
    public string? UploadProgressIndicatorPosition { get; protected set; }

    /// <summary>
    /// Sets the position of the upload progress indicator element.
    /// </summary>
    /// <param name="uploadProgressIndicatorPosition">The position of the upload progress indicator element.</param>
    /// <returns>The current instance of the <see cref="FileUploadField"/> class.</returns>
    public FileUploadField SetUploadProgressIndicatorPosition(string uploadProgressIndicatorPosition)
    {
        UploadProgressIndicatorPosition = uploadProgressIndicatorPosition;
        return this;
    }

    /// <summary>
    /// Sets the accepted file types for the file upload field to images only.
    /// </summary>
    /// <returns>The current instance of the <see cref="FileUploadField"/> class.</returns>
    public FileUploadField SetAsImage()
    {
        SetFileTypes("image/*");
        return this;
    }
    
    /// <summary>
    /// Gets or sets a value indicating whether the file can be downloaded.
    /// </summary>
    public bool CanDownload { get; protected set; } = true;

    /// <summary>
    /// Sets a value indicating whether the file can be previewed.
    /// </summary>
    /// <param name="can">The value to set.</param>
    /// <returns>The current <see cref="FileUploadField"/> instance.</returns>
    public FileUploadField SetCanDownload(bool can = true)
    {
        CanDownload = can;
        return this;
    }
}