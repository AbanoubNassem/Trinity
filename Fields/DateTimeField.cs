using AbanoubNassem.Trinity.Components;

namespace AbanoubNassem.Trinity.Fields;

public class DateTimeField : BaseField<DateTimeField, DateTime>
{
    public enum SelectionModeTypes : byte
    {
        Single,
        Multiple,
        Range
    }

    public enum HourFormatTypes : byte
    {
        AmPm,
        FullDay
    }

    public enum ViewTypes : byte
    {
        Month,
        Year
    }

    public DateTimeField(string columnName) : base(columnName)
    {
    }

    public override string ComponentName => "DateTimeField";
    
    public bool Inline { get; protected set; }

    public DateTimeField SetAsInline(bool inline = true)
    {
        Inline = inline;
        return this;
    }


    public string SelectionMode { get; protected set; } = "single";

    public DateTimeField SetSelectionMode(SelectionModeTypes mode = SelectionModeTypes.Single)
    {
        SelectionMode = Enum.GetName(mode) ?? "single";
        return this;
    }

    public string? DateFormat { get; protected set; }

    public DateTimeField SetDateFormat(string format)
    {
        DateFormat = format;
        return this;
    }

    public string? HourFormat { get; protected set; } = "12";

    public DateTimeField SetHourFormat(HourFormatTypes format = HourFormatTypes.AmPm)
    {
        HourFormat = format switch
        {
            HourFormatTypes.AmPm => "12",
            HourFormatTypes.FullDay => "24",
            _ => "12"
        };
        return this;
    }


    public bool ShowTime { get; protected set; }

    public DateTimeField SetShowTime(bool show = true)
    {
        ShowTime = show;
        return this;
    }

    public bool TimeOnly { get; protected set; }

    public DateTimeField SetTimeOnly(bool timeOnly = true)
    {
        TimeOnly = timeOnly;
        return this;
    }

    public DateTime? MinDate { get; protected set; }

    public DateTimeField SetMinDate(DateTime min)
    {
        MinDate = min;
        return this;
    }

    public DateTime? MaxDate { get; protected set; }

    public DateTimeField SetMaxDate(DateTime max)
    {
        MaxDate = max;
        return this;
    }

    public int[]? DisabledDays { get; protected set; }

    public DateTimeField SetDisabledDays(params int[] days)
    {
        DisabledDays = days;
        return this;
    }

    public DateTime[]? DisabledDates { get; protected set; }

    public DateTimeField SetDisabledDates(params DateTime[] dates)
    {
        DisabledDates = dates;
        return this;
    }

    public bool ShowIcon { get; protected set; }

    public string? IconPos { get; protected set; } = "left";

    public DateTimeField SetShowIcon(bool show = true, string iconPos = "left")
    {
        ShowIcon = show;
        IconPos = iconPos;
        return this;
    }

    public string? View { get; protected set; }

    public DateTimeField SetView(ViewTypes view)
    {
        switch (view)
        {
            default:
            case ViewTypes.Month:
            {
                View = "month";
                DateFormat = "mm/yy";
                break;
            }
            case ViewTypes.Year:
            {
                View = "year";
                DateFormat = "yy";
                break;
            }
        }

        return this;
    }
}