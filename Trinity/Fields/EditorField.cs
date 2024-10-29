using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a field for editing content with additional options.
/// </summary>
public class EditorField : TrinityField<EditorField, string?>
{
    /// <inheritdoc />
    public override string ComponentName => "EditorField";

    /// <inheritdoc />
    public EditorField(string columnName) : base(columnName)
    {
    }

    /// <summary>
    /// Gets or sets the height of the editor field.
    /// </summary>
    public string Height { get; protected set; } = "200px";

    /// <summary>
    /// Sets the height of the editor field and returns the instance of the <see cref="EditorField"/> class.
    /// </summary>
    /// <param name="height">The height of the editor field.</param>
    /// <returns>The instance of the <see cref="EditorField"/> class.</returns>
    public EditorField SetHeight(string height)
    {
        Height = height;
        return this;
    }

    /// <summary>
    /// Gets or sets the header buttons of the editor field.
    /// </summary>
    public string[]? HeaderButtons { get; protected set; }

    /// <summary>
    /// Sets the header buttons of the editor field and returns the instance of the <see cref="EditorField"/> class.
    /// </summary>
    /// <param name="headerButtonsClasses">The classes of the header buttons.</param>
    /// <returns>The instance of the <see cref="EditorField"/> class.</returns>
    public EditorField SetHeaderButtons(params string[] headerButtonsClasses)
    {
        HeaderButtons = headerButtonsClasses;
        return this;
    }

    /// <summary>
    /// Gets or sets the modules of the editor field.
    /// </summary>
    public object? Modules { get; protected set; }

    /// <summary>
    /// Sets the modules of the editor field and returns the instance of the <see cref="EditorField"/> class.
    /// </summary>
    /// <param name="modules">The modules of the editor field.</param>
    /// <returns>The instance of the <see cref="EditorField"/> class.</returns>
    public EditorField SetModules(object modules)
    {
        Modules = modules;
        return this;
    }

    /// <summary>
    /// Gets or sets the maximum length of the content of the editor field.
    /// </summary>
    public int? MaxLength { get; protected set; }

    /// <summary>
    /// Sets the maximum length of the content of the editor field and returns the instance of the <see cref="EditorField"/> class.
    /// </summary>
    /// <param name="maxLength">The maximum length of the content.</param>
    /// <returns>The instance of the <see cref="EditorField"/> class.</returns>
    public EditorField SetMaxLength(int maxLength)
    {
        MaxLength = maxLength;
        return this;
    }
}