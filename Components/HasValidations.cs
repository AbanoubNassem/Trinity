using System.Text.Json;
using AbanoubNassem.Trinity.Validators;
using FluentValidation;

namespace AbanoubNassem.Trinity.Components;

public abstract partial class BaseField<T, TDeserialization>

{
    protected ResourceValidator Validator { get; set; } = null!;

    public void AddValidator(ResourceValidator validator)
    {
        Validator = validator;
    }

    private bool _isRulesAdded;


    public T SetValidationRules(Action<IRuleBuilderInitial<IDictionary<string, object?>, TDeserialization?>> rules)
    {
        _validation = validator =>
        {
            var rule = validator.RuleFor<TDeserialization?>(x =>
                    x.ContainsKey(ColumnName) && x[ColumnName] != null ? (TDeserialization)x[ColumnName]! : default
                )
                .Cascade(CascadeMode.Stop);

            rules(rule);

            ((IRuleBuilderOptions<IDictionary<string, object?>, TDeserialization?>)rule)
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