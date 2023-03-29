namespace AbanoubNassem.Trinity.RequestHelpers;

/// <summary>
/// Represents a request to delete a file resource associated with a specific resource name and field name.
/// </summary>
public class DeleteFileRequest
{
    /// <summary>
    /// Gets or sets the unique file ID or URL associated with the file resource to delete.
    /// </summary>
    /// <value>The unique file ID or URL associated with the file resource to delete.</value>
    public string UniqueFileIdOrUrl { get; set; } = null!;

    /// <summary>
    /// Gets or sets the resource name associated with the file resource to delete.
    /// </summary>
    /// <value>The resource name associated with the file resource to delete.</value>
    public string ResourceName { get; set; } = null!;

    /// <summary>
    /// Gets or sets the field name associated with the file resource to delete.
    /// </summary>
    /// <value>The field name associated with the file resource to delete.</value>
    public string FieldName { get; set; } = null!;

    /// <summary>
    /// Gets or sets a value indicating whether the file should be reverted after deletion.
    /// </summary>
    /// <value>True to revert the file after deletion; otherwise, false.</value>
    public bool? Reverting { get; set; }
}