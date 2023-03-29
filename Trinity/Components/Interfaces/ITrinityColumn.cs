using SqlKata;

namespace AbanoubNassem.Trinity.Components.Interfaces;

/// <summary>
/// <see cref="TrinityTable"/> Column.
/// </summary>
public interface ITrinityColumn : ITrinityComponent
{
    /// <summary>
    /// The column name in the table.
    /// </summary>
    public string ColumnName { get; set; }

    /// <summary>
    /// Whether the column is globally searched within the table , or should have it's own search input.
    /// </summary>
    bool IsGloballySearchable { get; set; }

    /// <summary>
    /// How a column is being selected from the database.
    /// </summary>
    /// <param name="query">the query being applied to the database.</param>
    void SelectQuery(Query query);

    /// <summary>
    /// Filters the data in this column according to the specified query and search term.
    /// </summary>
    /// <param name="query">The query used for filtering.</param>
    /// <param name="search">The search term used for filtering.</param>
    void Filter(Query query, string search);

    /// <summary>
    /// How a column is formatted after it is retrieved from the database, but before it is sent to the Trinity front-end.
    /// </summary>
    void Format();

    /// <summary>
    /// Sorts the data in this column according to the specified query and sorting direction.
    /// </summary>
    /// <param name="query">The query used for sorting.</param>
    /// <param name="direction">The sorting direction ("ASC" for ascending, "DESC" for descending).</param>
    void Sort(Query query, string direction);

    /// <summary>
    /// Setting the record after it's retrieved from the database.
    /// </summary>
    /// <param name="record">The record retrieved from the database.</param>
    void SetRecord(IDictionary<string, object?> record);
}