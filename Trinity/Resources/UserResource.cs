using AbanoubNassem.Trinity.Columns;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Fields;
using FluentValidation;
using Microsoft.AspNetCore.Identity;

namespace AbanoubNassem.Trinity.Resources;

/// <inheritdoc />
public class UserResource : TrinityResource
{
    /// <inheritdoc />
    public override string TitleColumn => "name";

    /// <inheritdoc />
    public override string Icon => "pi pi-user";

    /// <inheritdoc />
    protected override TrinityForm GetTrinityForm()
    {
        return new TrinityForm()
            .SetSchema(new List<IFormComponent>()
            {
                Make<TextField>("name")
                    .SetValidationRules(r => r.NotEmpty().NotNull().MinimumLength(4)),
                Make<TextField>("email")
                    .SetInputType("email")
                    .SetValidationRules(r => r.NotEmpty().NotNull().EmailAddress()),
                Make<TextField>("password")
                    .SetInputType("password")
                    .FormatUsing((form, _) => form["password"] = "********")
                    .SetFillUsing(password =>
                        new PasswordHasher<string>()
                            .HashPassword("", password!))
                    .SetValidationRules(r => r.NotEmpty().NotNull().MinimumLength(8)),
            });
    }

    /// <inheritdoc />
    protected override TrinityTable GetTrinityTable()
    {
        return new TrinityTable()
            .SetColumns(new List<ITrinityColumn>()
            {
                Make<IdColumn>()
                    .SetAsToggleable(false, false),
                Make<TextColumn>("name"),
                Make<TextColumn>("email"),
            });
    }
}