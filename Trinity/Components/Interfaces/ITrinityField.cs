using System.Text.Json.Serialization;
using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using SqlKata;

namespace AbanoubNassem.Trinity.Components.Interfaces;

/// <summary>
/// Represents a field in a <see cref="TrinityForm"/>.
/// </summary>
public interface ITrinityField
{
    /// <summary>
    /// Gets or sets the name of the column associated with the field.
    /// </summary>
    public string ColumnName { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether the field should be used only during creation.
    /// </summary>
    public bool OnlyOnCreate { get; set; }

    /// <summary>
    /// Gets or sets a value indicating whether the field should be used only during updates.
    /// </summary>
    public bool OnlyOnUpdate { get; set; }

    /// <summary>
    /// Whether the field should be saved into the database or not.
    /// </summary>
    [JsonIgnore]
    bool IsSavable { get; set; }

    /// <summary>
    /// Formats a record for the field, after it is retrieved from the database, but before it is sent to the Trinity front-end.
    /// </summary>
    /// <param name="record">The record to format.</param>
    public void Format(ref IDictionary<string, object?> record);

    /// <summary>
    /// Fills a form with data from a record for the field.
    /// </summary>
    /// <param name="form">The form to fill.</param>
    /// <param name="oldRecord">The old record to use for the field.</param>
    public void Fill(ref Dictionary<string, object?> form, IReadOnlyDictionary<string, object?>? oldRecord = null);

    /// <summary>
    /// Adds a select query for the field to a query builder.
    /// </summary>
    /// <param name="query">The query builder to use.</param>
    public void SelectQuery(Query query);

    /// <summary>
    /// Sets the select query for the field using a callback function.
    /// </summary>
    /// <param name="query">The callback function to use.</param>
    public void SetSelectQueryUsing(Action<Query> query);

    /// <summary>
    /// Adds a filter query for the field to a query builder.
    /// </summary>
    /// <param name="query">The query builder to use.</param>
    /// <param name="search">The search term to use.</param>
    public void FilterQuery(Query query, string search);

    /// <summary>
    /// Sets the filter query for the field using a callback function.
    /// </summary>
    /// <param name="filter">The callback function to use.</param>
    void SetFilterQueryUsing(Action<Query, string> filter);

    /// <summary>
    /// Prepares the field for validation.
    /// </summary>
    /// <param name="validator">The validator to use.</param>
    /// <param name="form">The form to validate.</param>
    /// <param name="modelState">The model state to use.</param>
    public void PrepareForValidation(IValidator validator, IReadOnlyDictionary<string, object?> form,
        ModelStateDictionary modelState);

    /// <summary>
    /// Gets the deserialization type for the field, to be deserialized from JSON.
    /// </summary>
    /// <returns>The deserialization type for the field.</returns>
    Type GetDeserializationType();
}