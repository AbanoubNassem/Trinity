using AbanoubNassem.Trinity.Resources;
using FluentValidation;

namespace AbanoubNassem.Trinity.Validators;

/// <summary>
/// The FluentValidation Validator for <see cref="TrinityResource{TPrimaryKeyType}"/>
/// </summary>
public class ResourceValidator : AbstractValidator<Dictionary<string, object?>>
{
}