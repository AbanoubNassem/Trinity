using System.Text.Json;
using FluentValidation;

namespace AbanoubNassem.Trinity.Validators;

public class ResourceValidator : AbstractValidator<Dictionary<string, JsonElement>>
{
}