using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Providers;
using Microsoft.Extensions.DependencyInjection;

namespace AbanoubNassem.Trinity.Components;

/// <inheritdoc />
public abstract class TrinityComponent<T, TDeserialization> : ITrinityComponent
    where T : TrinityComponent<T, TDeserialization>
{
    /// <inheritdoc />
    public abstract string ComponentName { get; }

    /// <summary>
    /// Used on the front-end side to determine what type is the component , is it (field, columns , etc).
    /// </summary>
    public abstract string Type { get; }

    /// <summary>
    /// A reference to the <see cref="TrinityConfigurations"/> singleton.
    /// </summary>
    protected TrinityConfigurations Configurations { get; init; } = null!;

    /// <summary>
    /// A reference to the app <see cref="IServiceProvider"/>.
    /// </summary>
    protected IServiceProvider ServiceProvider { get; init; } = null!;

    /// <summary>
    /// A reference to the <see cref="TrinityLocalizer"/> singleton. 
    /// </summary>
    protected TrinityLocalizer Localizer { get; init; } = null!;
    

    /// <inheritdoc />
    public virtual void Setup()
    {
    }

    /// <summary>
    /// the displayable label of the component.
    /// </summary>
    public virtual string Label { get; protected set; } = null!;

    /// <summary>
    /// Set the component Label.
    /// </summary>
    /// <param name="value">component label.</param>
    /// <seealso cref="Label"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetLabel(string value)
    {
        Label = value;
        return (this as T)!;
    }

    private string? _id;

    /// <summary>
    /// A unique identifier for the component.
    /// </summary>
    public string Id => $"id_{_id ?? GetHashCode().ToString()}";

    /// <summary>
    /// Set the unique identifier of the component.
    /// </summary>
    /// <param name="value">The Id value</param>
    /// <seealso cref="Label"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetId(string value)
    {
        _id = value;
        return (this as T)!;
    }

    /// <summary>
    ///  Specify the number of columns that component may span in the parent grid.
    /// </summary>
    public virtual int ColumnSpan { get; protected set; }

    /// <summary>
    /// Sets the number of columns spanned by the control.
    /// </summary>
    /// <param name="columnSpan">The number of columns spanned by the control.</param>
    /// <seealso cref="ColumnSpan"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetColumnSpan(int columnSpan = 0)
    {
        ColumnSpan = columnSpan;
        return (this as T)!;
    }

    /// <summary>
    /// Hide or show the component. 
    /// </summary>
    public bool Toggleable { get; protected set; }

    /// <summary>
    /// Whether the the taggable component is hidden by default or not.
    /// </summary>
    public bool IsToggledHiddenByDefault { get; protected set; }

    /// <summary>
    /// Set the component as a toggleable component.
    /// </summary>
    /// <param name="toggleable">Whether is toggleable or not.</param>
    /// <param name="isToggledHiddenByDefault">Whether if it should be hidden by default.</param>
    /// <seealso cref="Toggleable"/>
    /// <seealso cref="IsToggledHiddenByDefault"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetAsToggleable(bool toggleable = true, bool isToggledHiddenByDefault = true)
    {
        Toggleable = toggleable;
        IsToggledHiddenByDefault = isToggledHiddenByDefault;
        return (this as T)!;
    }

    /// <summary>
    /// Component default value.
    /// </summary>
    public TDeserialization? DefaultValue { get; protected set; }

    /// <summary>
    /// Set the component default value.
    /// </summary>
    /// <param name="value">Set the default value of the component.</param>
    /// <seealso cref="DefaultValue"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetDefaultValue(TDeserialization value)
    {
        DefaultValue = value;
        return (this as T)!;
    }

    /// <summary>
    /// Whether the component is hidden or not.
    /// </summary>
    public bool Hidden { get; set; }

    /// <summary>
    /// Set whether the component is hidden or not.
    /// </summary>
    /// <param name="value">whether the component is hidden or not.</param>
    /// <seealso cref="Hidden"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetAsHidden(bool value = true)
    {
        Hidden = value;
        Visible = !value;
        return (this as T)!;
    }

    /// <summary>
    /// Whether the component is visible or not.
    /// </summary>
    public bool Visible { get; protected set; } = true;

    /// <summary>
    /// Set whether the component is visible or not.
    /// </summary>
    /// <param name="value">whether the component is visible or not.</param>
    /// <seealso cref="Visible"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetAsVisible(bool value = true)
    {
        Visible = value;
        Hidden = !value;
        return (this as T)!;
    }

    /// <summary>
    /// Component tooltip.
    /// </summary>
    public string? Tooltip { get; protected set; }

    /// <summary>
    /// Set Component tooltip.
    /// </summary>
    /// <param name="toolTip">Tooltip to be displayed.</param>
    /// <seealso cref="Tooltip"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetTooltip(string toolTip)
    {
        Tooltip = toolTip;
        return (this as T)!;
    }

    /// <summary>
    /// Component Style.
    /// </summary>
    public Dictionary<string, object>? Style { get; protected set; }

    /// <summary>
    /// Set component style.
    /// </summary>
    /// <param name="style">The style of component to be applied.</param>
    /// <seealso cref="Style"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetStyle(Dictionary<string, object> style)
    {
        Style = style;
        return (this as T)!;
    }

    /// <summary>
    /// Whether the component is disabled or not.
    /// </summary>
    public bool Disabled { get; protected set; }

    /// <summary>
    /// Set whether the component is disabled or not.
    /// </summary>
    /// <param name="value">whether the component is disabled or not.</param>
    /// <seealso cref="Disabled"/>
    /// <returns>The current component. for further chaining.</returns>
    public T SetAsDisabled(bool value = true)
    {
        Disabled = value;
        return (this as T)!;
    }
}