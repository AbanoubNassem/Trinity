using AbanoubNassem.Trinity.Components.TrinityColumn;

namespace AbanoubNassem.Trinity.Columns;

/// <summary>
/// Represents a column that displays an identifier value.
/// </summary>
/// <typeparam name="T">The type of the identifier value.</typeparam>
public class IdColumn<T> : TrinityColumn<IdColumn<T>, T>
{
    /// <inheritdoc />
    public override string ComponentName => "IdColumn";

    /// <inheritdoc />
    public IdColumn(string columnName = "id") : base(columnName)
    {
        SetAsToggleable();
        SetAsSortable();
    }
}

/// <inheritdoc />
public class IdColumn : IdColumn<string>
{
    /// <inheritdoc />
    public IdColumn(string columnName = "id") : base(columnName)
    {
    }
}