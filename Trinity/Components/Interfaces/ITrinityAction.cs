using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components.TrinityAction;

namespace AbanoubNassem.Trinity.Components.Interfaces;

/// <summary>
/// Represents an action that can be performed.
/// </summary>
public interface ITrinityAction : ITrinityComponent
{
    /// <summary>
    /// Gets the name of the action.
    /// </summary>
    public string ActionName { get; init; }

    /// <summary>
    /// Gets or sets the form associated with the action.
    /// </summary>
    [JsonIgnore]
    public TrinityForm? Form { get; set; }

    /// <summary>
    /// Gets the fields of the form.
    /// </summary>
    /// <value>The fields of the form.</value>
    Dictionary<string, object>? Fields { get; }

    /// <summary>
    /// Handles the action and returns the result of the action.
    /// </summary>
    /// <param name="form">The form data associated with the action.</param>
    /// <param name="records">The records associated with the action.</param>
    /// <returns>The result of the action.</returns>
    public Task<List<TrinityActionResult>> Handle(Dictionary<string, object?> form,
        List<IDictionary<string, object?>> records);
    
    /// <summary>
    /// Setting the record after it's retrieved from the database.
    /// </summary>
    /// <param name="record">The record retrieved from the database.</param>
    void SetRecord(IDictionary<string, object?> record);
}