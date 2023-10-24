using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Controllers;

/// <summary>
/// Controller for the main pages of the application.
/// </summary>
/// <remarks>
/// Handles the rendering of the dashboard and login pages, as well as handling user authentication and authorization.
/// </remarks>
public sealed class TrinityResourceController : TrinityController
{
    /// <summary>
    /// Handles the request for a resource based on HTTP method and view.
    /// </summary>
    /// <param name="name">The name of the resource to handle.</param>
    /// <param name="view">The view to handle (defaults to 'index').</param>
    [HttpGet]
    [HttpPost]
    [HttpPut]
    [HttpDelete]
    [Route("/{name}/{view=index}/{id?}")]
    public async Task<IActionResult> HandleResource(string name, string view)
    {
        var resource = await GetResource(name);

        if (resource == null) return NotFound();

        if (!resource.CanView)
            return UnAuthorised();

        var responseData = await CreateResponse();

        responseData.Resource = resource;


        switch (Request.Method)
        {
            case "GET" when view == "index":
                if (!resource.CanView) return UnAuthorised();

                responseData.Data = await resource.GetTableData();
                break;
            case "GET" when view == "create":
                if (!resource.CanCreate) return UnAuthorised();

                break;
            case "GET" when view == "edit":
                if (!resource.CanUpdate) return UnAuthorised();

                responseData.Data = await resource.GetEditData();
                if (responseData.Data == null)
                {
                    return NotFound();
                }

                break;
            case "GET" when view == "relationship":
                return await resource.GetRelationData();
            case "POST" when view == "create":
                if (!resource.CanCreate) return UnAuthorised();

                responseData.Data = await resource.Create();
                break;
            case "PUT" when view == "edit":
                if (!resource.CanUpdate) return UnAuthorised();

                responseData.Data = await resource.Update();
                break;
            case "DELETE" when view is "delete" or "index" or "edit":
                if (!resource.CanDelete) return UnAuthorised();

                responseData.Data = await resource.Delete();
                break;
        }

        responseData.Notifications = TrinityNotificationsManager.Flush();
        return Inertia.Render(view, responseData);
    }
}