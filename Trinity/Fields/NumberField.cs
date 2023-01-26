using AbanoubNassem.Trinity.Components.BaseField;

namespace AbanoubNassem.Trinity.Fields;

public class NumberField<T> : BaseField<NumberField<T>, T>
{
    public enum FormatModeTypes : byte
    {
        Decimal,
        Currency
    }

    public enum CurrencyDisplayTypes : byte
    {
        Symbol,
        Code
    }

    public enum ButtonLayoutTypes : byte
    {
        Stacked,
        Horizontal
    }

    public override string ComponentName => "NumberField";

    public NumberField(string columnName) : base(columnName)
    {
    }


    public string FormatMode { get; protected set; } = "decimal";

    public NumberField<T> SetFormatMode(FormatModeTypes mode = FormatModeTypes.Decimal)
    {
        FormatMode = Enum.GetName(mode)?.ToLower() ?? "decimal";
        return this;
    }

    public int? MinFractionDigits { get; protected set; }

    public NumberField<T> SetMinFractionDigits(int minFractionDigits)
    {
        MinFractionDigits = minFractionDigits;
        MaxFractionDigits = minFractionDigits;
        return this;
    }


    public int? MaxFractionDigits { get; protected set; }

    public NumberField<T> SetMaxFractionDigits(int maxFractionDigits)
    {
        MaxFractionDigits = maxFractionDigits;
        MinFractionDigits = maxFractionDigits;
        return this;
    }

    public bool ShowIcon { get; protected set; }

    public string? Currency { get; protected set; }

    public string? CurrencyDisplay { get; protected set; }

    public NumberField<T> SetCurrency(string currency, CurrencyDisplayTypes display = CurrencyDisplayTypes.Symbol)
    {
        Currency = currency;
        SetFormatMode(FormatModeTypes.Currency);
        CurrencyDisplay = Enum.GetName(display)?.ToLower() ?? "symbol";
        return this;
    }

    public string? InputPrefix { get; protected set; }

    public NumberField<T> SetInputPrefix(string prefix)
    {
        InputPrefix = prefix;
        return this;
    }


    public string? InputSuffix { get; protected set; }

    public NumberField<T> SetInputSuffix(string suffix)
    {
        InputSuffix = suffix;
        return this;
    }

    public int? Min { get; protected set; }

    public NumberField<T> SetMin(int min)
    {
        Min = min;
        return this;
    }

    public int? Max { get; protected set; }

    public NumberField<T> SetMax(int max)
    {
        Max = max;
        return this;
    }

    public float? Step { get; protected set; } = 1;

    public NumberField<T> SetStep(float step)
    {
        Step = step;
        return this;
    }

    public bool ShowButtons { get; protected set; }
    public string? ButtonLayout { get; protected set; }

    public NumberField<T> SetShowButtons(bool showButtons = true,
        ButtonLayoutTypes buttonLayout = ButtonLayoutTypes.Stacked)
    {
        ShowButtons = showButtons;
        ButtonLayout = Enum.GetName(buttonLayout)?.ToLower() ?? "stacked";
        SetIncrementButton();
        SetDecrementButton();
        return this;
    }

    public string? IncrementButtonClassName { get; protected set; }
    public string? IncrementButtonIcon { get; protected set; }

    public NumberField<T> SetIncrementButton(string incrementButtonClassName = "p-button-success",
        string incrementButtonIcon = "pi pi-plus")
    {
        IncrementButtonClassName = incrementButtonClassName;
        IncrementButtonIcon = incrementButtonIcon;
        return this;
    }

    public string? DecrementButtonClassName { get; protected set; }
    public string? DecrementButtonIcon { get; protected set; }

    public NumberField<T> SetDecrementButton(string decrementButtonClassName = "p-button-danger",
        string decrementButtonIcon = "pi pi-minus")
    {
        DecrementButtonClassName = decrementButtonClassName;
        DecrementButtonIcon = decrementButtonIcon;
        return this;
    }
}