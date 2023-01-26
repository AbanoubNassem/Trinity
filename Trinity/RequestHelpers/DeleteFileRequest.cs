namespace AbanoubNassem.Trinity.RequestHelpers;

public class DeleteFileRequest
{
    public string UniqueFileIdOrUrl { get; set; } = null!;

    public string ResourceName { get; set; } = null!;

    public string FieldName { get; set; } = null!;

    public bool? Reverting { get; set; }
}