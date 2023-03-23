using AbanoubNassem.Trinity.Components.TrinityColumn;
using AbanoubNassem.Trinity.Extensions;

namespace AbanoubNassem.Trinity.Columns;

public class TextColumn : TrinityColumn<TextColumn, string>
{
    public override string ComponentName => "TextColumn";

    public TextColumn(string columnName) : base(columnName)
    {
    }

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