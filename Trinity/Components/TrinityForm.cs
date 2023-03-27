using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Utilities;

namespace AbanoubNassem.Trinity.Components;

public class TrinityForm
{
    public List<IFormComponent> Schema { get; private set; } = new();

    public TrinityForm SetSchema(List<IFormComponent> schema)
    {
        Schema = schema;
        return this;
    }

    private readonly Dictionary<string, object> _fields = new();

    public Dictionary<string, object> Fields
    {
        get
        {
            if (_fields.Any()) return _fields;

            foreach (var field in Schema)
            {
                TrinityUtils.GetInnerFields(in _fields, (ITrinityComponent)field);
            }

            return _fields;
        }
    }

    public static List<object> FilterSchema(IEnumerable<object>? schema, IServiceProvider serviceProvider,
        bool isCreateRequest = false, bool isUpdateRequest = false)
    {
        if (schema == null) return new List<object>();

        var filtered = schema.Select(x =>
        {
            var component = (ITrinityComponent)x;

            component.Init(serviceProvider);
            component.Setup();

            if (x is ITrinityLayout layout)
            {
                layout.Schema = FilterSchema(layout.Schema, serviceProvider, isCreateRequest, isUpdateRequest);
                return layout;
            }


            if (x is not ITrinityField field) return x;

            if (
                field is { OnlyOnCreate: false, OnlyOnUpdate: false } ||
                (!isCreateRequest && !isUpdateRequest) ||
                (isCreateRequest && field.OnlyOnCreate) ||
                (isUpdateRequest && field.OnlyOnUpdate))
            {
                return x;
            }


            return null;
        }).Where(x => x != null);

        return filtered.ToList()!;
    }
}