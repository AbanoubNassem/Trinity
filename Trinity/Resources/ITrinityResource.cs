using System.Text.Json;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Components.TrinityAction;
using AbanoubNassem.Trinity.RequestHelpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Resources;

/// <summary>
/// The interface of <see cref="TrinityResource{TPrimaryKeyType}"/>.
/// </summary>
public interface ITrinityResource
{
    /// <summary>
    /// the singular displayable label of the resource.
    /// </summary>
    public string? Label { get; }

    /// <summary>
    /// the plural displayable label of the resource.
    /// </summary>
    public string? PluralLabel { get; }

    /// <summary>
    /// The fields displayed by the resource
    /// </summary>
    [JsonIgnore]
    public Dictionary<string, object> Fields { get; }

    /// <summary>
    /// The actions available for the resource.
    /// </summary>
    List<object> Actions { get; }


    /// <summary>
    /// The bulk actions available for the resource.
    /// </summary>
    List<object> BulkActions { get; }

    /// <summary>
    /// Setup is being called on each request, once the Resource is resolved from the The <see cref="IServiceProvider"/>.
    /// Can be used to resolve extra Services or do some logic before using the Resource.
    /// </summary>
    public Task Setup();

    /// <summary>
    /// Retrieves all the records from the Database based on the  <see cref="TrinityTable.Columns"/> given.
    /// </summary>
    /// <returns><see cref="IPaginator"/> of all the records retrieved from the Database</returns>
    public Task<IPaginator?> GetTableData();

    /// <summary>
    /// Retrieves all the records from the Database based on the giving column key in <see cref="HttpRequest.Query"/>. 
    /// </summary>
    /// <returns>A list of all the related records.</returns>
    public Task<IActionResult> GetRelationData();

    /// <summary>
    /// Retrieves the record to be edited from the Database based on the given id in <see cref="HttpRequest.RouteValues"/>.
    /// </summary>
    /// <returns>The record to be edited from the Database.</returns>
    public Task<IDictionary<string, object?>?> GetEditData(object? key = null);

    /// <summary>
    /// Retrieves the records to be deleted from the Database based on the given ids in <see cref="HttpRequest.RouteValues"/>.
    /// </summary>
    /// <returns>The records to be deleted from the Database.</returns>
    public Task<List<IDictionary<string, object?>>?> GetDeletableData(List<string> keys);

    /// <summary>
    /// Validate the upcoming request based on the JsonFrom sent , and the registered
    /// (<see cref="Fields"/> , or any given custom fields).
    /// </summary>
    /// <param name="jsonForm">The JsonFrom sent.</param>
    /// <param name="fields">The registered Fields in the resource, or custom fields.</param>
    /// <returns>Null if validation failed, otherwise the validated values.</returns>
    public Task<Dictionary<string, object?>?> ValidateRequest(Dictionary<string, JsonElement>? jsonForm = null,
        Dictionary<string, object>? fields = null);

    /// <summary>
    /// Creates a new record in the Database based on the given <see cref="Fields"/>.
    /// </summary>
    /// <returns>The new record if it succeeded.</returns>
    public Task<object?> Create();

    /// <summary>
    /// Updates the given record in the Database with the given <see cref="Fields"/>.
    /// </summary>
    /// <returns>The updated record if it succeeded.</returns>
    public Task<object?> Update(IDictionary<string, object?>? record);

    /// <summary>
    /// Deletes all the records from the Database based on the sent or given keys.
    /// </summary>
    /// <returns>A fresh <see cref="GetTableData"/></returns>
    public Task<object?> Delete(List<IDictionary<string, object?>> records);

    /// <summary>
    /// Handle and Execute the action given.
    /// </summary>
    /// <param name="action">The <see cref="ITrinityAction"/> given in the request.</param>
    /// <param name="form">The form values sent with the action, if any.</param>
    /// <param name="primaryKeys">The keys of the records to apply the action to.</param>
    /// /// <param name="records">The records if it was already loaded.</param>
    /// <returns><see cref="TrinityActionResult"/></returns>
    public Task<object> HandleAction(ITrinityAction action, Dictionary<string, object?> form,
        List<string> primaryKeys, List<IDictionary<string, object?>>? records);

    /// <summary>
    /// Whether the user can View the resource or not.
    /// </summary>
    public bool CanView { get; }

    /// <summary>
    /// Whether the user can Create a new record in the resource or not.
    /// </summary>
    public bool CanCreate { get; }

    /// <summary>
    /// Whether the user can Update a record in the resource or not.
    /// </summary>
    public bool CanUpdate { get; }

    /// <summary>
    /// Whether the user can Delete records from the resource or not.
    /// </summary>
    public bool CanDelete { get; }

    /// <summary>
    /// Whether the user can Update a record in the resource or not.
    /// </summary>
    public bool CanUpdateRecord(IDictionary<string, object?>? record);

    /// <summary>
    /// Whether the user can Delete records from the resource or not.
    /// </summary>
    public bool CanDeleteRecord(IDictionary<string, object?>? record);
}