using AbanoubNassem.Trinity.Components.TrinityField;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Resources;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace AbanoubNassem.Trinity.Controllers;

/// <summary>
/// 
/// </summary>
public sealed class TrinityFileUploadController : TrinityController
{
    /// <summary>
    /// 
    /// </summary>
    public TrinityFileUploadController()
    {
      
    }

    /// <summary>
    /// Handles file uploads for a resource.
    /// </summary>
    /// <param name="file">The file to upload.</param>
    /// <param name="resourceName">The name of the resource for which to upload a file.</param>
    /// <param name="fieldName">The name of the field on the resource for which to upload a file.</param>
    [HttpPost]
    [Route("/upload/file")]
    public async Task<IActionResult> UploadFile(IFormFile? file, [FromForm] string resourceName,
        [FromForm] string fieldName)
    {
        if (!TrinityManager.Resources.TryGetValue(resourceName, out var resourceValue))
        {
            return NotFound(resourceName);
        }

        var resourceObject = HttpContext.RequestServices.GetRequiredService(resourceValue);
        var resource = (resourceObject as ITrinityResource)!;
        var field = resource.Fields[fieldName];

        if (field is not ICanUploadField uploadField) return UnprocessableEntity();

        if (file == null)
            return BadRequest(Localizer["no_file_selected"]);

        return Ok(new
        {
            data = await uploadField.Upload(file),
            notifications = TrinityNotifications.Flush(),
        });
    }

    /// <summary>
    /// Deletes a file from a resource.
    /// </summary>
    /// <param name="request">The request containing information about the file to delete.</param>
    [HttpPost]
    [Route("/delete/file")]
    public async Task<IActionResult> DeleteFile([FromBody] DeleteFileRequest request)
    {
        if (!TrinityManager.Resources.TryGetValue(request.ResourceName, out var resourceValue))
        {
            return await Task.FromResult<IActionResult>(NotFound(request.ResourceName));
        }

        var resourceObject = HttpContext.RequestServices.GetRequiredService(resourceValue);
        var resource = (resourceObject as ITrinityResource)!;
        var field = resource.Fields[request.FieldName];

        if (field is not ICanUploadField) return await Task.FromResult<IActionResult>(UnprocessableEntity());

        dynamic? data = null;

        if (request.Reverting is true)
        {
            var basePath = Path.Combine("wwwroot", "trinity_temp");

            var filesToDelete = Directory.EnumerateFiles(basePath)
                .Where(file => Path.GetFileName(file).StartsWith(request.UniqueFileIdOrUrl))
                .ToArray();

            if (!filesToDelete.Any())
            {
                TrinityNotifications.NotifyError(Localizer["nothing_to_delete_revert"]);
                return await Task.FromResult<IActionResult>(BadRequest(Localizer["nothing_to_delete_revert"]));
            }

            Parallel.ForEach(filesToDelete, System.IO.File.Delete);
        }


        return await Task.FromResult<IActionResult>(Ok(new
        {
            data,
            notifications = TrinityNotifications.Flush(),
        }));
    }
}