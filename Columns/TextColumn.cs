using AbanoubNassem.Trinity.Components.BaseColumn;
using AbanoubNassem.Trinity.Extensions;
using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Columns;

public class TextColumn : BaseColumn<TextColumn, string>
{
    public override string ComponentName => "TextColumn";

    public TextColumn(string columnName) : base(columnName)
    {
    }

    public override void Format(IDictionary<string, object?> record)
    {
        base.Format(record);

        if (UrlCallback != null)
        {
            record.Add($"{ColumnName}_url", UrlCallback(record));
        }

        if (_words != null)
        {
            record[ColumnName] = record[ColumnName]?.ToString()?.Words((int)_words);
        }

        if (_limit != null)
        {
            record[ColumnName] = record[ColumnName]?.ToString()?[..(int)_limit];
        }
    }

    private int? _limit;

    public TextColumn SetLimit(int limit)
    {
        _limit = limit;
        return this;
    }

    private int? _words;

    public TextColumn SetWordsCount(int words)
    {
        _words = words;
        return this;
    }

    public bool Url { get; protected set; }

    public bool OpenUrlInNewTab { get; protected set; }

    protected CallbackWithRecord<string>? UrlCallback { get; set; }

    public TextColumn SetAsUrl(CallbackWithRecord<string> callback, bool openUrlInNewTab = false)
    {
        UrlCallback = callback;
        Url = true;
        OpenUrlInNewTab = openUrlInNewTab;
        return this;
    }

    public string? DateTimeFormat { get; protected set; }

    public TextColumn SetAsDateTime(string format = "yyyy-MM-dd HH:mm:ss")
    {
        DateTimeFormat = format;
        return this;
    }

    public bool TimeAgo { get; protected set; }

    public TextColumn SetAsTimeAgo(bool timeAgo = true)
    {
        TimeAgo = timeAgo;
        return this;
    }

    public string? Currency { get; protected set; }

    public TextColumn SetAsCurrency(string currency = "USD")
    {
        Currency = currency;
        return this;
    }
}