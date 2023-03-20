using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AbanoubNassem.Trinity.Components.TrinityField;

public abstract partial class TrinityField<T, TDeserialization>

{
    public delegate void ValidateUsingDelegate(IValidator validator,
        Action<IRuleBuilderInitial<Dictionary<string, object?>, TDeserialization?>> rules,
        IReadOnlyDictionary<string, object?> form);

    protected ValidateUsingDelegate? ValidateUsingCallback;

    protected Action<IRuleBuilderInitial<Dictionary<string, object?>, TDeserialization?>>? Rules;

    private bool _isValidationRegistered;

    public virtual T SetValidateUsing(ValidateUsingDelegate validateUsingCallback)
    {
        ValidateUsingCallback = validateUsingCallback;
        return (this as T)!;
    }

    public virtual T SetValidationRules(
        Action<IRuleBuilderInitial<Dictionary<string, object?>, TDeserialization?>> rules)
    {
        Rules = rules;

        return (this as T)!;
    }

    public virtual void PrepareForValidation(IValidator validator, IReadOnlyDictionary<string, object?> form,
        ModelStateDictionary _)
    {
        if (_isValidationRegistered || Rules == null) return;

        if (ValidateUsingCallback != null)
        {
            ValidateUsingCallback.Invoke(validator, Rules, form);
            return;
        }

        var rule = (validator as AbstractValidator<Dictionary<string, object?>>)!.RuleFor<TDeserialization?>(x =>
                x.ContainsKey(ColumnName) && x[ColumnName] != null ? (TDeserialization)x[ColumnName]! : default
            )
            .Cascade(CascadeMode.Stop);

        Rules(rule);

        ((IRuleBuilderOptions<Dictionary<string, object?>, TDeserialization?>)rule)
            .WithName(Label)
            .OverridePropertyName(ColumnName);

        _isValidationRegistered = true;
    }
}