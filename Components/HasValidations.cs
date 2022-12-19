using System.Text.Json;
using AbanoubNassem.Trinity.Validators;
using FluentValidation;

namespace AbanoubNassem.Trinity.Components;

public abstract partial class BaseField<T>

{
    protected ResourceValidator Validator { get; set; } = null!;

    public void AddValidator(ResourceValidator validator)
    {
        Validator = validator;
    }

    public virtual T SetValidationRules(Action<IRuleBuilderInitial<Dictionary<string, JsonElement>, string>> rules)
    {
        return SetValidationRules<string>(rules);
    }

    public virtual T SetValidationRules(Action<IRuleBuilderInitial<Dictionary<string, JsonElement>, int>> rules)
    {
        return SetValidationRules<int>(rules);
    }

    private bool _isRulesAdded;

    public T SetValidationRules<TType>(Action<IRuleBuilderInitial<Dictionary<string, JsonElement>, TType>> rules)
    {
        _validation = validator =>
        {
            var rule = validator.RuleFor(x => x[ColumnName].Deserialize<TType>(new JsonSerializerOptions())!);
            rules(rule);
            ((IRuleBuilderOptions<Dictionary<string, JsonElement>, TType>)rule)
                .WithName(Label)
                .OverridePropertyName(ColumnName);
            _isRulesAdded = true;
        };
        return (this as T)!;
    }

    private Action<ResourceValidator>? _validation;

    public void Validate()
    {
        if (!_isRulesAdded)
            _validation?.Invoke(Validator);
    }
}