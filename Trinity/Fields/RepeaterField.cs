using System.Text.Json;
using AbanoubNassem.Trinity.Components.TrinityField;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Utilities;
using AbanoubNassem.Trinity.Validators;
using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using SqlKata;
using SqlKata.Execution;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a repeater field that is used to repeat a set of form components.
/// </summary>
public class RepeaterField : TrinityField<RepeaterField, string>, IHasSchema, IHasRelationship
{
    private readonly ResourceValidator _repeaterFieldValidator = new();

    /// <inheritdoc />
    public override string ComponentName => "RepeaterField";

    /// <inheritdoc />
    public RepeaterField(string columnName) : base(columnName)
    {
    }

    /// <inheritdoc />
    public override void SelectQuery(Query query)
    {
        if (HasRelationshipByDefault) return;
        base.SelectQuery(query);
    }

    private bool _isSavable = true;

    /// <inheritdoc />
    public override bool IsSavable
    {
        set => _isSavable = value;
        get => (CanCreateItem || CanDeleteItem || CanMoveItem) && _isSavable;
    }

    /// <inheritdoc />
    public override void PrepareForValidation(IValidator validator, IReadOnlyDictionary<string, object?> form,
        ModelStateDictionary modelState)
    {
        if (Schema == null || !form.ContainsKey(ColumnName)) return;


        var repeaterJson = form[ColumnName]?.ToString();

        if (string.IsNullOrEmpty(repeaterJson)) return;

        var repeaters = JsonSerializer.Deserialize<List<Dictionary<string, JsonElement>>>(repeaterJson);

        if (repeaters == null) return;

        for (var i = 0; i < repeaters.Count; i++)
        {
            var repeater = repeaters[i];

            var repeaterForm = new Dictionary<string, object?>();

            foreach (var input in repeater)
            {
                repeaterForm.Add(input.Key,
                    input.Value.ValueKind == JsonValueKind.Null
                        ? null
                        : input.Value.Deserialize(((ITrinityField)Fields[input.Key]).GetDeserializationType())
                );
            }

            foreach (var field in Fields)
            {
                ((dynamic)field.Value).PrepareForValidation(_repeaterFieldValidator, repeaterForm, modelState);
            }

            var validated = _repeaterFieldValidator.Validate(repeaterForm);

            if (validated.IsValid) continue;

            foreach (var err in validated.Errors)
            {
                modelState.AddModelError($"{ColumnName}.{err.PropertyName}.{i}", err.ErrorMessage);
            }

            modelState.AddModelError(ColumnName, $"{Label} has some errors!");
        }
    }

    /// <summary>
    /// Gets or sets the dictionary of fields.
    /// </summary>
    protected Dictionary<string, object> Fields { get; set; } = new();

    /// <inheritdoc />
    public List<object>? Schema { get; set; }

    /// <summary>
    /// Sets the schema for the repeater field.
    /// </summary>
    /// <param name="schema">The schema to set.</param>
    /// <returns>The <see cref="RepeaterField"/> instance.</returns>
    public RepeaterField SetSchema(List<IFormComponent> schema)
    {
        Schema = new List<object>(schema.Count);
        foreach (dynamic component in schema)
        {
            Schema.Add(component);
            TrinityUtils.GetInnerFields(Fields, (component as ITrinityComponent)!);
        }

        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the user can create items.
    /// </summary>
    /// <value>
    ///   <c>true</c> if the user can create items; otherwise, <c>false</c>.
    /// </value>
    public bool CanCreateItem { get; set; } = true;

    /// <summary>
    /// Sets whether the user can create items.
    /// </summary>
    /// <param name="can">Whether the user can create items.</param>
    /// <returns>The <see cref="RepeaterField"/> instance.</returns>
    public virtual RepeaterField SetCanCreateItem(bool can = true)
    {
        CanCreateItem = can;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the user can delete items.
    /// </summary>
    /// <value>
    ///   <c>true</c> if the user can delete items; otherwise, <c>false</c>.
    /// </value>
    public bool CanDeleteItem { get; set; } = true;

    /// <summary>
    /// Sets whether the user can delete items.
    /// </summary>
    /// <param name="can">Whether the user can delete items.</param>
    /// <returns>The <see cref="RepeaterField"/> instance.</returns>
    public virtual RepeaterField SetCanDeleteItem(bool can = true)
    {
        CanDeleteItem = can;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the user can move items.
    /// </summary>
    /// <value>
    ///   <c>true</c> if the user can move items; otherwise, <c>false</c>.
    /// </value>
    public bool CanMoveItem { get; set; } = true;

    /// <summary>
    /// Sets whether the user can move items.
    /// </summary>
    /// <param name="can">Whether the user can move items.</param>
    /// <returns>The <see cref="RepeaterField"/> instance.</returns>
    public virtual RepeaterField SetCanMoveItem(bool can = true)
    {
        CanMoveItem = can;
        return this;
    }


    /// <inheritdoc />
    public bool HasRelationshipByDefault { get; set; }

    /// <summary>
    /// Gets or sets the name of the local column in the database.
    /// </summary>
    protected string? LocalColumnName { get; set; }

    /// <inheritdoc />
    public string? ForeignTable { get; set; }

    /// <inheritdoc />
    public string? ForeignColumn { get; set; }

    /// <inheritdoc />
    public string? RelationshipName { get; set; }

    /// <summary>
    /// Gets or sets the name of the foreign column in the database.
    /// </summary>
    public string? ForeignColumnName { get; set; }

    /// <summary>
    /// Gets or sets the name of the foreign table in the database.
    /// </summary>
    public string? ForeignTableName { get; set; }

    /// <summary>
    /// Sets the relationship between the local column and the foreign column in the database.
    /// </summary>
    /// <param name="localColumnName">The name of the local column in the database.</param>
    /// <param name="foreignColumnName">The name of the foreign column in the database.</param>
    /// <param name="foreignTableName">The name of the foreign table in the database.</param>
    /// <returns>The current instance of the <see cref="RepeaterField"/>.</returns>
    public RepeaterField SetRelationship(string localColumnName, string foreignColumnName, string foreignTableName)
    {
        HasRelationshipByDefault = true;
        LocalColumnName = localColumnName;
        ForeignColumnName = foreignColumnName;
        ForeignTableName = foreignTableName;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the repeater field is collapsible.
    /// </summary>
    public bool IsCollapsible { get; protected set; }

    /// <summary>
    /// Sets a value indicating whether the repeater field is collapsible.
    /// </summary>
    /// <param name="isCollapsible">The value indicating whether the repeater field is collapsible.</param>
    /// <returns>The current instance of the <see cref="RepeaterField"/>.</returns>
    public RepeaterField SetAsCollapsible(bool isCollapsible = true)
    {
        IsCollapsible = isCollapsible;
        return this;
    }

    /// <inheritdoc />
    public Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(QueryFactory queryFactory,
        List<IDictionary<string, object?>> records, Sort? sort = null)
    {
        return Task.FromResult(records);
    }

    /// <inheritdoc />
    public Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(QueryFactory queryFactory, string localTable,
        string? value, int offset, string? search = null)
    {
        return Task.FromResult(new List<KeyValuePair<string, string>>());
    }
}