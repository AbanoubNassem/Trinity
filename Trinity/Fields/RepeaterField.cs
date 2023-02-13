using System.Text.Json;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.BaseField;
using AbanoubNassem.Trinity.Utilities;
using AbanoubNassem.Trinity.Validators;
using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace AbanoubNassem.Trinity.Fields;

public class RepeaterField : BaseField<RepeaterField, string>, IHasSchema
{
    private readonly ResourceValidator _repeaterFieldValidator = new();

    public override string ComponentName => "RepeaterField";

    public RepeaterField(string columnName) : base(columnName)
    {
    }

    public override void PrepareForValidation(IValidator validator, IReadOnlyDictionary<string, object?> form,
        ModelStateDictionary modelState)
    {
        if (Schema == null) return;

        Dictionary<string, object> fields = new();

        foreach (var c in Schema)
        {
            TrinityUtils.GetInnerFields(fields, (c as IBaseComponent)!);
        }

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
                        : input.Value.Deserialize(((IBaseField)fields[input.Key]).GetDeserializationType())
                );
            }

            foreach (var field in fields)
            {
                ((dynamic)field.Value).PrepareForValidation(_repeaterFieldValidator, repeaterForm, modelState);
            }

            var validated = _repeaterFieldValidator.Validate(repeaterForm);

            if (validated.IsValid) continue;

            foreach (var err in validated.Errors)
            {
                modelState.AddModelError($"{ColumnName}.{err.PropertyName}.{i}", err.ErrorMessage);
            }
        }
    }

    public List<object>? Schema { get; set; }

    public RepeaterField SetSchema(List<IFormComponent> schema)
    {
        Schema = new List<object>(schema.Count);
        foreach (dynamic component in schema)
        {
            Schema.Add(component);
        }

        return this;
    }


    public bool IsCollapsible { get; protected set; }

    public RepeaterField SetCollapsible(bool isCollapsible = true)
    {
        IsCollapsible = isCollapsible;
        return this;
    }
}