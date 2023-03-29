namespace AbanoubNassem.Trinity.RequestHelpers;

/// <summary>
/// Represents a sort class used for sorting results in a specific field and order.
/// </summary>
public class Sort
{
    /// <summary>
    /// Gets or sets the field name to sort by.
    /// </summary>
    /// <value>The field name to sort by.</value>
    public string Field { get; set; } = null!;

    /// <summary>
    /// Gets or sets the sort order, either ascending or descending.
    /// </summary>
    /// <value>The sort order, either ascending or descending.</value>
    public int Order { get; set; }
}