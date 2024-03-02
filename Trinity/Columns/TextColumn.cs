using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Components.TrinityColumn;
using AbanoubNassem.Trinity.Extensions;

namespace AbanoubNassem.Trinity.Columns;

/// <summary>
/// Represents a column for showing text values in a Trinity table.
/// </summary>
public class TextColumn : TrinityColumn<TextColumn, string>
{
    /// <inheritdoc />
    public override string ComponentName => "TextColumn";

    /// <inheritdoc />
    public TextColumn(string columnName) : base(columnName)
    {
    }

    /// <inheritdoc />
    public override void Format()
    {
        base.Format();

        if (UrlCallback != null)
        {
            Record.Add($"{ColumnName}_url", UrlCallback(Record));
        }

        if (_words != null)
        {
            Record[ColumnName] = Record[ColumnName]?.ToString()?.Words((int)_words);
        }

        if (_limit != null)
        {
            Record[ColumnName] = Record[ColumnName]?.ToString()?[..(int)_limit];
        }
    }

    private int? _limit;

    /// <summary>
    /// Sets the maximum number of characters to be displayed in the column value.
    /// </summary>
    /// <param name="limit">The maximum number of characters.</param>
    /// <returns>The current instance of the <see cref="TextColumn"/>.</returns>
    public TextColumn SetLimit(int limit)
    {
        _limit = limit;
        return this;
    }

    private int? _words;

    /// <summary>
    /// Sets the maximum number of words to be displayed in the column value.
    /// </summary>
    /// <param name="words">The maximum number of words.</param>
    /// <returns>The current instance of the <see cref="TextColumn"/>.</returns>
    public TextColumn SetWordsCount(int words)
    {
        _words = words;
        return this;
    }

    /// <summary>
    /// Gets a value indicating whether the column value is a URL.
    /// </summary>
    public bool Url { get; protected set; }

    /// <summary>
    /// Gets a value indicating whether to open the URL in a new tab.
    /// </summary>
    public bool OpenUrlInNewTab { get; protected set; }

    /// <summary>
    /// The URL callback function.
    /// </summary>  
    protected CallbackWithRecord<string>? UrlCallback { get; set; }

    /// <summary>
    /// Sets the column value as a URL.
    /// </summary>
    /// <param name="callback">The URL callback function.</param>
    /// <param name="openUrlInNewTab">Whether to open the URL in a new tab.</param>
    /// <returns>The current instance of the <see cref="TextColumn"/>.</returns>
    public TextColumn SetAsUrl(CallbackWithRecord<string> callback, bool openUrlInNewTab = false)
    {
        UrlCallback = callback;
        Url = true;
        OpenUrlInNewTab = openUrlInNewTab;
        return this;
    }

    /// <summary>
    /// Gets the date/time format.
    /// </summary>
    public string? DateTimeFormat { get; protected set; }

    /// <summary>
    /// Sets the column value as a date/time.
    /// </summary>
    /// <param name="format">The date/time format.</param>
    /// <returns>The current instance of the <see cref="TextColumn"/>.</returns>
    public TextColumn SetAsDateTime(string format = "yyyy-MM-dd HH:mm:ss")
    {
        DateTimeFormat = format;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the column should be displayed as time ago.
    /// </summary>
    /// <value><c>true</c> if the column should be displayed as time ago; otherwise, <c>false</c>.</value>
    public bool TimeAgo { get; protected set; }

    /// <summary>
    /// Sets the column to be displayed as time ago.
    /// </summary>
    /// <param name="timeAgo">A value indicating whether the column should be displayed as time ago.</param>
    /// <returns>The current instance of the <see cref="TextColumn"/>.</returns>
    public TextColumn SetAsTimeAgo(bool timeAgo = true)
    {
        TimeAgo = timeAgo;
        return this;
    }

    /// <summary>
    /// Gets or sets the currency code to be displayed in the column.
    /// </summary>
    /// <value>The currency code to be displayed in the column.</value>
    public string? Currency { get; protected set; }

    /// <summary>
    /// Sets the column to display the specified currency code.
    /// </summary>
    /// <param name="currency">The currency code to be displayed in the column.</param>
    /// <returns>The current instance of the <see cref="TextColumn"/>.</returns>
    public TextColumn SetAsCurrency(string currency = "USD")
    {
        Currency = currency;
        return this;
    }

  
}