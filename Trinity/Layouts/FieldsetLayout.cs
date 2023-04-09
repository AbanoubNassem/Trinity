using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

/// <summary>
/// A layout that arranges form components in a fieldset format.
/// </summary>
public class FieldsetLayout : TrinityLayout<FieldsetLayout>
{
    /// <inheritdoc />
    public override string ComponentName => "FieldsetLayout";

    /// <inheritdoc />
    public FieldsetLayout(List<IFormComponent> schema) : base(schema, 2)
    {
    }


    /// <inheritdoc />
    public override string Label { get; protected set; } = "Fieldset";
}