using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// Represents a number field in Trinity framework.
/// </summary>
public class NumberField<T> : TrinityField<NumberField<T>, T>
{
    /// <summary>
    /// The available format modes for displaying numbers in the number field.
    /// </summary>
    public enum FormatModeTypes : byte
    {
        /// <summary>
        /// Displays the number in decimal format.
        /// </summary>
        Decimal,

        /// <summary>
        /// Displays the number in currency format.
        /// </summary>
        Currency
    }

    /// <summary>
    /// The available types of currency displays for displaying numbers in currency format.
    /// </summary>
    public enum CurrencyDisplayTypes : byte
    {
        /// <summary>
        /// Displays the currency symbol (e.g., "$").
        /// </summary>
        Symbol,

        /// <summary>
        /// Displays the ISO code (e.g., "USD").
        /// </summary>
        Code
    }

    /// <summary>
    /// The available button layout options for the increment/decrement buttons.
    /// </summary>
    public enum ButtonLayoutTypes : byte
    {
        /// <summary>
        /// Displays the buttons stacked on top of each other.
        /// </summary>
        Stacked,

        /// <summary>
        /// Displays the buttons side by side horizontally.
        /// </summary>
        Horizontal
    }

    /// <inheritdoc />
    public override string ComponentName => "NumberField";

    /// <inheritdoc />
    public NumberField(string columnName) : base(columnName)
    {
    }

    /// <summary>
    /// Gets or sets the format mode of the field.
    /// </summary>
    public string FormatMode { get; protected set; } = "decimal";

    /// <summary>
    /// Sets the format mode of the field.
    /// </summary>
    /// <param name="mode">The format mode type.</param>
    /// <returns>The current <see cref="NumberField{T}"/> instance.</returns>
    public NumberField<T> SetFormatMode(FormatModeTypes mode = FormatModeTypes.Decimal)
    {
        FormatMode = Enum.GetName(mode)?.ToLower() ?? "decimal";
        return this;
    }

    /// <summary>
    /// Gets or sets the minimum fraction digits of the field.
    /// </summary>
    public int? MinFractionDigits { get; protected set; }

    /// <summary>
    /// Sets the minimum and maximum fraction digits of the field.
    /// </summary>
    /// <param name="minFractionDigits">The minimum number of fraction digits.</param>
    /// <returns>The current <see cref="NumberField{T}"/> instance.</returns>
    public NumberField<T> SetMinFractionDigits(int minFractionDigits)
    {
        MinFractionDigits = minFractionDigits;
        MaxFractionDigits = minFractionDigits;
        return this;
    }

    /// <summary>
    /// Gets or sets the maximum fraction digits of the field.
    /// </summary>
    public int? MaxFractionDigits { get; protected set; }

    /// <summary>
    /// Sets the maximum and minimum fraction digits of the field.
    /// </summary>
    /// <param name="maxFractionDigits">The maximum number of fraction digits.</param>
    /// <returns>The current <see cref="NumberField{T}"/> instance.</returns>
    public NumberField<T> SetMaxFractionDigits(int maxFractionDigits)
    {
        MaxFractionDigits = maxFractionDigits;
        MinFractionDigits = maxFractionDigits;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether to show icon in the field.
    /// </summary>
    public bool ShowIcon { get; protected set; }

    /// <summary>
    /// Gets or sets the currency symbol of the number field component.
    /// </summary>
    public string? Currency { get; protected set; }

    /// <summary>
    /// Gets or sets the display format of the currency symbol of the number field component.
    /// </summary>
    public string? CurrencyDisplay { get; protected set; }

    /// <summary>
    /// Sets the currency symbol and display format of the number field component.
    /// </summary>
    /// <param name="currency">The currency symbol to be set.</param>
    /// <param name="display">The display format of the currency symbol to be set.</param>
    /// <returns>The current <see cref="NumberField{T}"/> instance.</returns>
    public NumberField<T> SetCurrency(string currency, CurrencyDisplayTypes display = CurrencyDisplayTypes.Symbol)
    {
        Currency = currency;
        SetFormatMode(FormatModeTypes.Currency);
        CurrencyDisplay = Enum.GetName(display)?.ToLower() ?? "symbol";
        return this;
    }

    /// <summary>
    /// Gets or sets the input prefix of the number field component.
    /// </summary>
    public string? InputPrefix { get; protected set; }

    /// <summary>
    /// Sets the input prefix of the number field component.
    /// </summary>
    /// <param name="prefix">The input prefix to be set.</param>
    /// <returns>The current <see cref="NumberField{T}"/> instance.</returns>
    public NumberField<T> SetInputPrefix(string prefix)
    {
        InputPrefix = prefix;
        return this;
    }

    /// <summary>
    /// Gets or sets the input suffix of the number field component.
    /// </summary>
    public string? InputSuffix { get; protected set; }

    /// <summary>
    /// Sets the input suffix of the number field component.
    /// </summary>
    /// <param name="suffix">The input suffix to be set.</param>
    /// <returns>The current <see cref="NumberField{T}"/> instance.</returns>
    public NumberField<T> SetInputSuffix(string suffix)
    {
        InputSuffix = suffix;
        return this;
    }

    /// <summary>
    /// Gets or sets the minimum value of the number field component.
    /// </summary>
    public int? Min { get; protected set; }

    /// <summary>
    /// Sets the minimum value of the number field component.
    /// </summary>
    /// <param name="min">The minimum value to be set.</param>
    /// <returns>The current <see cref="NumberField{T}"/> instance.</returns>
    public NumberField<T> SetMin(int min)
    {
        Min = min;
        return this;
    }

    /// <summary>
    /// Gets or sets the maximum value of the number field component.
    /// </summary>
    public int? Max { get; protected set; }

    /// <summary>
    /// Sets the maximum value of the number field component.
    /// </summary>
    /// <param name="max">The maximum value to be set.</param>
    /// <returns>The current <see cref="NumberField{T}"/> instance.</returns>
    public NumberField<T> SetMax(int max)
    {
        Max = max;
        return this;
    }

    /// <summary>
    /// Gets or sets the step value used for incrementing or decrementing the value of the field.
    /// </summary>
    public float? Step { get; protected set; } = 1;

    /// <summary>
    /// Sets the step value used for incrementing or decrementing the value of the field.
    /// </summary>
    /// <param name="step">The step value to set.</param>
    /// <returns>The current instance of the <see cref="NumberField{T}"/> class.</returns>
    public NumberField<T> SetStep(float step)
    {
        Step = step;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether to display increment and decrement buttons.
    /// </summary>
    public bool ShowButtons { get; protected set; }

    /// <summary>
    /// Gets or sets the layout of the increment and decrement buttons.
    /// </summary>
    public string? ButtonLayout { get; protected set; }

    /// <summary>
    /// Sets whether to display increment and decrement buttons and the layout of the buttons.
    /// </summary>
    /// <param name="showButtons">Whether to display increment and decrement buttons.</param>
    /// <param name="buttonLayout">The layout of the buttons. Default value is <see cref="ButtonLayoutTypes.Stacked"/>.</param>
    /// <returns>The current instance of the <see cref="NumberField{T}"/> class.</returns>
    public NumberField<T> SetShowButtons(bool showButtons = true,
        ButtonLayoutTypes buttonLayout = ButtonLayoutTypes.Stacked)
    {
        ShowButtons = showButtons;
        ButtonLayout = Enum.GetName(buttonLayout)?.ToLower() ?? "stacked";
        SetIncrementButton();
        SetDecrementButton();
        return this;
    }

    /// <summary>
    /// Gets or sets the CSS class name for the increment button.
    /// </summary>
    public string? IncrementButtonClassName { get; protected set; }

    /// <summary>
    /// Gets or sets the icon class name for the increment button.
    /// </summary>
    public string? IncrementButtonIcon { get; protected set; }

    /// <summary>
    /// Sets the CSS class name and icon class name for the increment button.
    /// </summary>
    /// <param name="incrementButtonClassName">The CSS class name for the increment button. Default value is "p-button-success".</param>
    /// <param name="incrementButtonIcon">The icon class name for the increment button. Default value is "pi pi-plus".</param>
    /// <returns>The current instance of the <see cref="NumberField{T}"/> class.</returns>
    public NumberField<T> SetIncrementButton(string incrementButtonClassName = "p-button-success",
        string incrementButtonIcon = "pi pi-plus")
    {
        IncrementButtonClassName = incrementButtonClassName;
        IncrementButtonIcon = incrementButtonIcon;
        return this;
    }

    /// <summary>
    /// Gets or sets the CSS class name for the decrement button.
    /// </summary>
    public string? DecrementButtonClassName { get; protected set; }

    /// <summary>
    /// Gets or sets the icon class name for the decrement button.
    /// </summary>
    public string? DecrementButtonIcon { get; protected set; }

    /// <summary>
    /// Sets the class name and icon for the decrement button of the number field.
    /// </summary>
    /// <param name="decrementButtonClassName">The class name for the decrement button. Default is "p-button-danger".</param>
    /// <param name="decrementButtonIcon">The icon for the decrement button. Default is "pi pi-minus".</param>
    /// <returns>The current instance of the <see cref="NumberField{T}"/> class.</returns>
    public NumberField<T> SetDecrementButton(string decrementButtonClassName = "p-button-danger",
        string decrementButtonIcon = "pi pi-minus")
    {
        DecrementButtonClassName = decrementButtonClassName;
        DecrementButtonIcon = decrementButtonIcon;
        return this;
    }
}