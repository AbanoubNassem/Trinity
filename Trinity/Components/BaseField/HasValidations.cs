using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AbanoubNassem.Trinity.Components.BaseField;

public abstract partial class BaseField<T, TDeserialization>

{
    public delegate void ValidateUsingDelegate(IValidator validator,
        Action<IRuleBuilderInitial<IDictionary<string, object?>, TDeserialization?>> rules,
        IReadOnlyDictionary<string, object?> form);

    protected ValidateUsingDelegate? ValidateUsingCallback;

    protected Action<IRuleBuilderInitial<IDictionary<string, object?>, TDeserialization?>>? Rules;

    private bool _isValidationRegistered;

    public virtual T SetValidateUsing(ValidateUsingDelegate validateUsingCallback)
    {
        ValidateUsingCallback = validateUsingCallback;
        return (this as T)!;
    }

    public virtual T SetValidationRules(
        Action<IRuleBuilderInitial<IDictionary<string, object?>, TDeserialization?>> rules)
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

        var rule = (validator as AbstractValidator<IDictionary<string, object?>>)!.RuleFor<TDeserialization?>(x =>
                x.ContainsKey(ColumnName) && x[ColumnName] != null ? (TDeserialization)x[ColumnName]! : default
            )
            .Cascade(CascadeMode.Stop);

        Rules(rule);

        ((IRuleBuilderOptions<IDictionary<string, object?>, TDeserialization?>)rule)
            .WithName(Label)
            .OverridePropertyName(ColumnName);

        _isValidationRegistered = true;
    }
}