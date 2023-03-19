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

public class RepeaterField : TrinityField<RepeaterField, string>, IHasSchema, IHasRelationship
{
    private readonly ResourceValidator _repeaterFieldValidator = new();

    public override string ComponentName => "RepeaterField";

    public RepeaterField(string columnName) : base(columnName)
    {
    }

    public override void SelectQuery(Query query)
    {
        if (HasRelationshipByDefault) return;
        base.SelectQuery(query);
    }

    public override void PrepareForValidation(IValidator validator, IReadOnlyDictionary<string, object?> form,
        ModelStateDictionary modelState)
    {
        if (Schema == null) return;


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

    protected Dictionary<string, object> Fields { get; set; } = new();
    public List<object>? Schema { get; set; }

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

    public bool HasRelationshipByDefault { get; set; }
    protected string? LocalColumnName { get; set; }

    public string? ForeignTable { get; set; }
    public string? ForeignColumn { get; set; }

    public string? RelationshipName { get; set; }
    public string? ForeignColumnName { get; set; }
    public string? ForeignTableName { get; set; }

    public RepeaterField SetRelationship(string localColumnName, string foreignColumnName, string foreignTableName)
    {
        HasRelationshipByDefault = true;
        LocalColumnName = localColumnName;
        ForeignColumnName = foreignColumnName;
        ForeignTableName = foreignTableName;
        return this;
    }

    public bool IsCollapsible { get; protected set; }

    public RepeaterField SetCollapsible(bool isCollapsible = true)
    {
        IsCollapsible = isCollapsible;
        return this;
    }

    public Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(QueryFactory queryFactory,
        List<IDictionary<string, object?>> records, Sort? sort = null)
    {
        return Task.FromResult(records);
    }

    public Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(QueryFactory queryFactory,
        string? value, int offset, string? search = null)
    {
        return Task.FromResult(new List<KeyValuePair<string, string>>());
    }
}