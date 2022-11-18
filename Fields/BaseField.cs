namespace AbanoubNassem.Trinity.Fields;

public abstract class BaseField
{
    private string? _label;
    private string _attribute = null!;
    private object? _initialValue;

    public string? Label => _label;

    public string Attribute => _attribute;

    public object? InitialValue => _initialValue;

    public string? GetLabel() => _label;

    public BaseField SetLabel(string? value)
    {
        _label = value;

        return this;
    }

    public string GetAttribute() => _attribute;

    public BaseField SetAttribute(string value)
    {
        _attribute = value;
        return this;
    }

    public object? GetInitialValue() => _initialValue;

    public BaseField SetInitialValue(object? value)
    {
        _initialValue = value;
        return this;
    }
}