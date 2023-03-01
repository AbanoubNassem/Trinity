using Microsoft.AspNetCore.Http;

namespace AbanoubNassem.Trinity.Components.TrinityField;

public interface ICanUploadField
{
    public Task<string?> Upload(IFormFile files);
}

public abstract class CanUploadField<T> : TrinityField<T, string>, ICanUploadField where T : CanUploadField<T>
{
    protected CanUploadField(string columnName) : base(columnName)
    {
    }

    public abstract Task<string?> Upload(IFormFile files);

    protected string UploadTempDirectory { get; set; } = Path.Combine("wwwroot", "trinity_temp");
    

    protected string UploadDirectory = "trinity_public";

    public T SetUploadDirectory(string directory)
    {
        UploadDirectory = directory;
        return (this as T)!;
    }

    protected string GetUploadDirectory()
    {
        return UploadDirectory;
    }
}