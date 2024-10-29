using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AbanoubNassem.Trinity.Components.TrinityField;

public abstract partial class TrinityField<T, TDeserialization>

{
    /// <summary>
    /// Delegate for validating a Trinity field.
    /// </summary>
    /// <param name="validator">The FluentValidation validator.</param>
    /// <param name="rules">The action to apply validation rules.</param>
    /// <param name="form">The dictionary of form values.</param>
    public delegate void ValidateUsingDelegate(IValidator validator,
        Action<IRuleBuilderInitial<Dictionary<string, object?>, TDeserialization?>> rules,
        IReadOnlyDictionary<string, object?> form);

    /// <summary>
    /// The validation delegate for the Trinity field.
    /// </summary>
    protected ValidateUsingDelegate? ValidateUsingCallback;

    /// <summary>
    /// The action to apply validation rules for the Trinity field.
    /// </summary>
    protected Action<IRuleBuilderInitial<Dictionary<string, object?>, TDeserialization?>>? Rules;

    private bool _isValidationRegistered;

    /// <summary>
    /// Sets the validation delegate for the Trinity field.
    /// </summary>
    /// <param name="validateUsingCallback">The validation delegate to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public virtual T SetValidateUsing(ValidateUsingDelegate validateUsingCallback)
    {
        ValidateUsingCallback = validateUsingCallback;
        return (this as T)!;
    }

    /// <summary>
    /// Sets the validation rules for the Trinity field.
    /// </summary>
    /// <param name="rules">The action to apply validation rules.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> field.</returns>
    public virtual T SetValidationRules(
        Action<IRuleBuilderInitial<Dictionary<string, object?>, TDeserialization?>> rules)
    {
        Rules = rules;

        return (this as T)!;
    }

    /// <inheritdoc />
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