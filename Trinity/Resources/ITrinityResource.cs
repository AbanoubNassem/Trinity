using System.Text.Json.Serialization;
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
    public Task Setup();
    public Task<IPaginator?> GetTableData();
    public Task<IActionResult> GetRelationData();
    public Task<IDictionary<string, object?>?> GetEditData();
    public Task<object?> Create();
    public Task<object?> Update();
    public Task<object?> Delete();
    public bool CanView();
    public bool CanCreate();
    public bool CanUpdate();
    public bool CanDelete();
}