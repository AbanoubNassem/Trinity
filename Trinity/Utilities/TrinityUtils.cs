using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Utilities;

public static class TrinityUtils
{
    public static void GetInnerFields(in Dictionary<string, object> fields, ITrinityComponent component)
    {
        switch (component)
        {
            case ITrinityField baseField:
                fields.TryAdd(baseField.ColumnName, baseField);
                break;
            case IHasSchema baseLayout:
            {
                if (baseLayout.Schema != null)
                    foreach (var innerComponent in baseLayout.Schema)
                    {
                        GetInnerFields(in fields, (ITrinityComponent)innerComponent);
                    }

                break;
            }
        }
    }
}