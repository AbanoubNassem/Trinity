using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Components.BaseField;

public interface ICanUploadField
{
    public Task<string?> Upload(IWebHostEnvironment webHostEnvironment, IFormFile files);
}

public abstract class CanUploadField<T> : BaseField<T, string>, ICanUploadField where T : CanUploadField<T>
{
    protected CanUploadField(string columnName) : base(columnName)
    {
    }

    public abstract Task<string?> Upload(IWebHostEnvironment webHostEnvironment, IFormFile files);

    protected string UploadTempDirectory { get; set; } = Path.Combine("wwwroot", "trinity_temp");

    protected string MoveUploadedFromTempToDirectory { get; set; } = null!;

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