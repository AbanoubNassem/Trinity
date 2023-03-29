using Microsoft.AspNetCore.Http;

namespace AbanoubNassem.Trinity.Components.TrinityField;

/// <summary>
/// Represents a field that can be uploaded.
/// </summary>
public interface ICanUploadField
{
    /// <summary>
    /// Uploads the specified file.
    /// </summary>
    /// <param name="files">The file to upload.</param>
    /// <returns>A task representing the asynchronous operation that returns the URL of the uploaded file.</returns>
    public Task<string?> Upload(IFormFile files);
}

/// <summary>
/// Represents a field that can be uploaded.
/// </summary>
/// <typeparam name="T">The type of the field.</typeparam>
public abstract class CanUploadField<T> : TrinityField<T, string>, ICanUploadField where T : CanUploadField<T>
{
    /// <inheritdoc />
    protected CanUploadField(string columnName) : base(columnName)
    {
    }

    /// <inheritdoc />
    public abstract Task<string?> Upload(IFormFile files);

    /// <summary>
    /// Gets or sets the directory where the temporary uploaded files are stored.
    /// </summary>
    protected string UploadTempDirectory { get; set; } = Path.Combine("wwwroot", "trinity_temp");

    /// <summary>
    /// Gets or sets the directory where the uploaded files are stored.
    /// </summary>
    protected string UploadDirectory = "trinity_public";

    /// <summary>
    /// Sets the upload directory.
    /// </summary>
    /// <param name="directory">The directory where the uploaded files are stored.</param>
    /// <returns>The current instance of the <see cref="CanUploadField{T}"/> field.</returns>
    public T SetUploadDirectory(string directory)
    {
        UploadDirectory = directory;
        return (this as T)!;
    }

    /// <summary>
    /// Gets the upload directory.
    /// </summary>
    /// <returns>The directory where the uploaded files are stored.</returns>
    protected string GetUploadDirectory()
    {
        return UploadDirectory;
    }
}