using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a text field in Trinity Framework.
/// </summary>
public class TextField : TrinityField<TextField, string?>
{
    /// <inheritdoc />
    public override string ComponentName => "TextField";

    /// <inheritdoc />
    public TextField(string columnName) : base(columnName)
    {
    }
}