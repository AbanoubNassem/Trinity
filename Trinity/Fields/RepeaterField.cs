using System.Data;
using System.Text.Json;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.BaseField;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Utilities;
using AbanoubNassem.Trinity.Validators;
using DapperQueryBuilder;
using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace AbanoubNassem.Trinity.Fields;

public class RepeaterField : BaseField<RepeaterField, string>, IHasSchema, IHasRelationship
{
    private readonly ResourceValidator _repeaterFieldValidator = new();

    public override string ComponentName => "RepeaterField";

    public RepeaterField(string columnName) : base(columnName)
    {
    }

    public override void SelectQuery(FluentQueryBuilder query)
    {
        if (!HasRelationshipByDefault)
        {
            base.SelectQuery(query);
            return;
        }

        var newQuery = query.Connection.QueryBuilder();
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
                        : input.Value.Deserialize(((IBaseField)Fields[input.Key]).GetDeserializationType())
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
            TrinityUtils.GetInnerFields(Fields, (component as IBaseComponent)!);
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

    public Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(FluentQueryBuilder query,
        List<IDictionary<string, object?>> records, Sort? sort = null)
    {
        return Task.FromResult(records);
    }

    public Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(IDbConnection connection,
        string? value, int offset, string? search = null)
    {
        return Task.FromResult(new List<KeyValuePair<string, string>>());
    }
}