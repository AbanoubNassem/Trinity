using AbanoubNassem.Trinity.Components.BaseColumn;

namespace AbanoubNassem.Trinity.Columns;

public enum BadgeSeverityType : byte
{
    None,
    Success,
    Info,
    Warning,
    Danger,
}

public enum BadgeSizeType
{
    Normal,
    Large,
    XLarge
}

public class BadgeColumn<T> : BaseColumn<BadgeColumn<T>, string>
{
    public BadgeColumn(string columnName) : base(columnName)
    {
        Size = "normal";
    }

    public override string ComponentName => "BadgeColumn";

    public List<object>? Options { get; protected set; }


    public BadgeColumn<T> SetOptions(params (T?, BadgeSeverityType)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                value = item.Item1,
                severity = item.Item2 == BadgeSeverityType.None ? null : Enum.GetName(item.Item2)?.ToLower(),
            });
        }

        return this;
    }

    public BadgeColumn<T> SetOptions(params (T?, BadgeSeverityType, string?)[] options)
    {
        Options = new List<object>(options.Length);
        foreach (var item in options)
        {
            Options.Add(new
            {
                value = item.Item1,
                severity = item.Item2 == BadgeSeverityType.None ? null : Enum.GetName(item.Item2)?.ToLower(),
                icon = item.Item3,
            });
        }

        return this;
    }

    public BadgeColumn<T> SetSize(BadgeSizeType size)
    {
        Size = Enum.GetName(size)?.ToLower() ?? "normal";
        return this;
    }
}

public class BadgeColumn : BadgeColumn<string>
{
    public BadgeColumn(string columnName) : base(columnName)
    {
    }
}