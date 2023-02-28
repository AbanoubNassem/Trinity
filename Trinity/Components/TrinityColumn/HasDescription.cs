using Microsoft.AspNetCore.Html;

namespace AbanoubNassem.Trinity.Components.TrinityColumn;

public enum DescriptionPositionTypes : byte
{
    Bellow,
    Above
}
public abstract partial class TrinityColumn<T, TDeserialization>
{


    public string? DescriptionPosition { get; protected set; }
    public object? Description { get; protected set; }

    public T SetDescription(string description, DescriptionPositionTypes pos = DescriptionPositionTypes.Bellow)
    {
        Description = description;
        DescriptionPosition = Enum.GetName(pos)?.ToLower() ?? "bellow";
        return (this as T)!;
    }

    public T SetDescription(HtmlString description, DescriptionPositionTypes pos = DescriptionPositionTypes.Bellow)
    {
        Description = description;
        DescriptionPosition = Enum.GetName(pos)?.ToLower() ?? "bellow";
        return (this as T)!;
    }
}