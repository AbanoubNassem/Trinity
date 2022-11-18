using System.Linq.Expressions;
using AbanoubNassem.Trinity.Fields;
using Humanizer;

namespace AbanoubNassem.Trinity.Managers;

public class FieldManager<TModel>
{
    private readonly Dictionary<string, BaseField> _fields = new();

    public BaseField Make<TFiled>(Expression<Func<TModel, object>> property, object? initialValue = null)
        where TFiled : BaseField
    {
        string name;

        if (property.Body is UnaryExpression expression)
        {
            name = ((MemberExpression)expression.Operand).Member.Name;
        }
        else
        {
            name = ((MemberExpression)property.Body).Member.Name;
        }

        if (_fields.TryGetValue(name, out var f)) return f;

        var type = typeof(TFiled);
        var field = (BaseField)Activator.CreateInstance(type)!;

        if (field.GetLabel() == null)
            type.GetMethod("SetLabel")?.Invoke(field, new object?[] { name.Titleize() });

        type.GetMethod("SetAttribute")?.Invoke(field, new object?[] { name.Camelize() });

        type.GetMethod("SetInitialValue")?.Invoke(field, new[] { initialValue });

        _fields.Add(name, field);

        return field;
    }

    public Dictionary<string, BaseField> Fields => _fields;
}