using System.Text.Json;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components.TrinityAction;
using AbanoubNassem.Trinity.RequestHelpers;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Resources;

public interface ITrinityResource
{
    public string Name { get; protected init; }
    public string? Label { get; init; }
    public string? PluralLabel { get; init; }
    public bool ShowGridlines => false;
    public bool StripedRows => false;
    public string? Icon => null;
    public string PrimaryKeyColumn { get; }
    public string TitleColumn { get; }
    [JsonIgnore] public Dictionary<string, object> Fields { get; }
    List<object> Actions { get; }
    List<object> BulkActions { get; }
    public Task Setup();
    public Task<IPaginator?> GetTableData();
    public Task<IActionResult> GetRelationData();
    public Task<IDictionary<string, object?>?> GetEditData();

    public Task<Dictionary<string, object?>?> ValidateRequest(Dictionary<string, JsonElement>? jsonForm = null,
        Dictionary<string, object>? fields = null);

    public Task<object?> Create();
    public Task<object?> Update();
    public Task<object?> Delete();

    public Task<object> HandleAction(ITrinityAction action, Dictionary<string, object?> form,
        List<string> primaryKeys);

    public bool CanView { get; }
    public bool CanCreate { get; }
    public bool CanUpdate { get; }
    public bool CanDelete { get; }
}