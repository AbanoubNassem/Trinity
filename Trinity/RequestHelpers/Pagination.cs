using System.Collections;

namespace AbanoubNassem.Trinity.RequestHelpers;

/// <summary>
/// Represents an interface for pagination functionality.
/// </summary>
public interface IPaginator
{
    /// <summary>
    /// Gets or sets the current page number.
    /// </summary>
    /// <value>The current page number.</value>
    public int CurrentPage { get; set; }

    /// <summary>
    /// Gets or sets the data associated with the current page.
    /// </summary>
    /// <value>The data associated with the current page.</value>
    public IEnumerable Data { get; set; }

    /// <summary>
    /// Gets or sets the total number of items in the pagination result set.
    /// </summary>
    /// <value>The total number of items in the pagination result set.</value>
    public int TotalCount { get; set; }

    /// <summary>
    /// Gets or sets the number of items to display per page.
    /// </summary>
    /// <value>The number of items to display per page.</value>
    public int PerPage { get; set; }

    /// <summary>
    /// Gets or sets the total number of pages in the pagination result set.
    /// </summary>
    /// <value>The total number of pages in the pagination result set.</value>
    public int TotalPages { get; set; }
}

/// <summary>
/// Represents a pagination class that implements the <see cref="IPaginator"/> interface.
/// </summary>
public class Pagination : IPaginator
{
    /// <inheritdoc />
    public int CurrentPage { get; set; }

    /// <inheritdoc />
    public IEnumerable Data { get; set; } = null!;

    /// <inheritdoc />
    public int TotalCount { get; set; }

    /// <inheritdoc />
    public int PerPage { get; set; }

    /// <inheritdoc />
    public int TotalPages { get; set; }
}