using System.Collections;

namespace AbanoubNassem.Trinity.RequestHelpers;

public interface IPaginator
{
    public int CurrentPage { get; set; }

    public IEnumerable Data { get; set; }

    public int TotalCount { get; set; }

    public int PerPage { get; set; }

    public int TotalPages { get; set; }
}
public class Pagination : IPaginator
{
    public int CurrentPage { get; set; }

    public IEnumerable Data { get; set; }

    public int TotalCount { get; set; }

    public int PerPage { get; set; }

    public int TotalPages { get; set; }
}