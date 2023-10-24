using System.Text.Json;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Components.TrinityAction;
using Humanizer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Controllers;

/// <summary>
/// Handles resource actions.
/// </summary>
public sealed class TrinityActionController : TrinityController
{
    /// <summary>
    /// Handles an action on a resource.
    /// </summary>
    /// <param name="resourceName">The name of the resource on which to handle the action.</param>
    /// <param name="actionName">The name of the action to handle.</param>
    [HttpPost]
    [Route("/actions/{resourceName}/{actionName}")]
    public async Task<IActionResult> HandleAction(string resourceName, string actionName)
    {
        var resource = await GetResource(resourceName);

        if (resource == null) return NotFound();

        if (!resource.CanView)
            return UnAuthorised();

        var actionObj = resource.Actions.SingleOrDefault(x => ((ITrinityAction)x).ActionName == actionName) ??
                        resource.BulkActions.SingleOrDefault(x => ((ITrinityAction)x).ActionName == actionName);

        if (actionObj == null)
            return NotFound();

        var action = (ITrinityAction)actionObj;

        if (!action.Visible || action.Hidden)
            return UnAuthorised();

        var body = await Request.ReadFromJsonAsync<Dictionary<string, JsonElement>>() ??
                   new Dictionary<string, JsonElement>();

        var primaryKeys = body["primaryKeys"].Deserialize<List<string>>() ?? new List<string>();

        var validated = new Dictionary<string, object?>(0);

        if (action.Fields != null)
        {
            var form = body["form"].Deserialize<Dictionary<string, JsonElement>>() ??
                       new Dictionary<string, JsonElement>();

            validated = await resource.ValidateRequest(form, action.Fields);
        }

        if (validated == null)
        {
            return Ok(TrinityAction.Errors(TrinityNotificationsManager.Flush(),
                ModelState.ToDictionary(k => k.Key.Camelize(),
                    v => v.Value?.Errors.FirstOrDefault()?.ErrorMessage ?? ""
                ))
            );
        }

        return Ok(await resource.HandleAction(action, validated, primaryKeys));
    }
}