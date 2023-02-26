using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Pages;

public abstract class BasePage
{
    public abstract string PageName { get; }

    public virtual string? Label { get; set; }

    public virtual string? To { get; set; }

    public virtual string? Icon { get; set; }

    private readonly List<object> _schema = new();

    public List<object> Schema
    {
        get
        {
            if (!_schema.Any())
                _schema.AddRange(GetSchema());
            
            return _schema;
        }
    }

    protected virtual List<IBaseWidget> GetSchema()
    {
        return new List<IBaseWidget>(0);
    }
}