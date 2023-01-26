using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Components.BaseField;

public interface ICanUploadField
{
    public Task<List<string>?> Upload(IWebHostEnvironment webHostEnvironment, IFormFileCollection files);
    public Task<string?> Delete(string uniqueFileId);
}

public abstract class CanUploadField<T> : BaseField<T, string>, ICanUploadField where T : CanUploadField<T>
{
    protected CanUploadField(string columnName) : base(columnName)
    {
    }

    public abstract Task<List<string>?> Upload(IWebHostEnvironment webHostEnvironment, IFormFileCollection files);

    public abstract Task<string?> Delete(string uniqueFileId);
}