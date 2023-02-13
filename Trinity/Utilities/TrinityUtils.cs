using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.BaseField;

namespace AbanoubNassem.Trinity.Utilities;

public static class TrinityUtils
{
    public static void GetInnerFields(in Dictionary<string, object> fields, IBaseComponent component)
    {
        switch (component)
        {
            case IBaseField baseField:
                fields.TryAdd(baseField.ColumnName, baseField);
                break;
            case IHasSchema baseLayout:
            {
                if (baseLayout.Schema != null)
                    foreach (var innerComponent in baseLayout.Schema)
                    {
                        GetInnerFields(in fields, (IBaseComponent)innerComponent);
                    }

                break;
            }
        }
    }
}