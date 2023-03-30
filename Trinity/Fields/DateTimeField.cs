using AbanoubNassem.Trinity.Components.TrinityField;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// A field for storing and displaying dates and times.
/// </summary>
public class DateTimeField : TrinityField<DateTimeField, DateTime>
{
    /// <summary>
    /// Specifies the mode of selection for the date time field.
    /// </summary>
    public enum SelectionModeTypes : byte
    {
        /// <summary>
        /// Only one date can be selected.
        /// </summary>
        Single,

        /// <summary>
        /// Multiple dates can be selected.
        /// </summary>
        Multiple,

        /// <summary>
        /// A range of dates can be selected.
        /// </summary>
        Range
    }

    /// <summary>
    /// Specifies the format of the hour for the date time field.
    /// </summary>
    public enum HourFormatTypes : byte
    {
        /// <summary>
        /// The hour is displayed in AM/PM format.
        /// </summary>
        AmPm,

        /// <summary>
        /// The hour is displayed in 24-hour format.
        /// </summary>
        FullDay
    }

    /// <summary>
    /// Specifies the type of view for the date time field.
    /// </summary>
    public enum ViewTypes : byte
    {
        /// <summary>
        /// The date time field displays a monthly calendar view.
        /// </summary>
        Month,

        /// <summary>
        /// The date time field displays a yearly calendar view.
        /// </summary>
        Year
    }

    /// <inheritdoc />
    public DateTimeField(string columnName) : base(columnName)
    {
    }

    /// <inheritdoc />
    public override string ComponentName => "DateTimeField";

    /// <summary>
    /// Gets or sets a value indicating whether the date time field should be displayed inline.
    /// </summary>
    public bool Inline { get; protected set; }

    /// <summary>
    /// Sets the date time field to be displayed inline or not.
    /// </summary>
    /// <param name="inline">A boolean value indicating whether the field should be displayed inline or not.</param>
    /// <returns>The current instance of the DateTimeField class.</returns>
    public DateTimeField SetAsInline(bool inline = true)
    {
        Inline = inline;
        return this;
    }

    /// <summary>
    /// Gets or sets the selection mode of the date time field.
    /// </summary>
    public string SelectionMode { get; protected set; } = "single";

    /// <summary>
    /// Sets the selection mode of the date time field.
    /// </summary>
    /// <param name="mode">The type of selection mode to be set.</param>
    /// <returns>The current instance of the DateTimeField class.</returns>
    public DateTimeField SetSelectionMode(SelectionModeTypes mode = SelectionModeTypes.Single)
    {
        SelectionMode = Enum.GetName(mode) ?? "single";
        return this;
    }

    /// <summary>
    /// Gets or sets the date format of the date time field.
    /// </summary>
    public string? DateFormat { get; protected set; }

    /// <summary>
    /// Sets the date format of the date time field.
    /// </summary>
    /// <param name="format">The format to be set.</param>
    /// <returns>The current instance of the DateTimeField class.</returns>
    public DateTimeField SetDateFormat(string format)
    {
        DateFormat = format;
        return this;
    }

    /// <summary>
    /// Gets or sets the hour format of the date time field.
    /// </summary>
    public string? HourFormat { get; protected set; } = "12";

    /// <summary>
    /// Sets the hour format of the date time field.
    /// </summary>
    /// <param name="format">The type of hour format to be set.</param>
    /// <returns>The current instance of the DateTimeField class.</returns>
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

    /// <summary>
    /// Gets or sets a value indicating whether to show the time portion of the date and time field.
    /// </summary>
    public bool ShowTime { get; protected set; }

    /// <summary>
    /// Sets the value indicating whether to show the time portion of the date and time field.
    /// </summary>
    /// <param name="show">A value indicating whether to show the time portion of the date and time field. Default is true.</param>
    /// <returns>The current instance of the <see cref="DateTimeField"/> class.</returns>
    public DateTimeField SetShowTime(bool show = true)
    {
        ShowTime = show;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether to display only the time portion of the date and time field.
    /// </summary>
    public bool TimeOnly { get; protected set; }

    /// <summary>
    /// Sets the value indicating whether to display only the time portion of the date and time field.
    /// </summary>
    /// <param name="timeOnly">A value indicating whether to display only the time portion of the date and time field. Default is true.</param>
    /// <returns>The current instance of the <see cref="DateTimeField"/> class.</returns>
    public DateTimeField SetTimeOnly(bool timeOnly = true)
    {
        TimeOnly = timeOnly;
        return this;
    }

    /// <summary>
    /// Gets or sets the minimum date value allowed in the date and time field.
    /// </summary>
    public DateTime? MinDate { get; protected set; }

    /// <summary>
    /// Sets the minimum date value allowed in the date and time field.
    /// </summary>
    /// <param name="min">The minimum date value allowed in the date and time field.</param>
    /// <returns>The current instance of the <see cref="DateTimeField"/> class.</returns>
    public DateTimeField SetMinDate(DateTime min)
    {
        MinDate = min;
        return this;
    }

    /// <summary>
    /// Gets or sets the maximum date value allowed in the date and time field.
    /// </summary>
    public DateTime? MaxDate { get; protected set; }

    /// <summary>
    /// Sets the maximum date value allowed in the date and time field.
    /// </summary>
    /// <param name="max">The maximum date value allowed in the date and time field.</param>
    /// <returns>The current instance of the <see cref="DateTimeField"/> class.</returns>
    public DateTimeField SetMaxDate(DateTime max)
    {
        MaxDate = max;
        return this;
    }

    /// <summary>
    /// Gets or sets the days of the week that are disabled in the date and time field.
    /// </summary>
    public int[]? DisabledDays { get; protected set; }

    /// <summary>
    /// Sets the days of the week that are disabled in the date and time field.
    /// </summary>
    /// <param name="days">An array of integers representing the days of the week to disable in the date and time field.</param>
    /// <returns>The current instance of the <see cref="DateTimeField"/> class.</returns>
    public DateTimeField SetDisabledDays(params int[] days)
    {
        DisabledDays = days;
        return this;
    }

    /// <summary>
    /// Gets or sets an array of disabled dates. If a date is present in this array, it will be disabled in the date picker.
    /// </summary>
    public DateTime[]? DisabledDates { get; protected set; }

    /// <summary>
    /// Sets an array of disabled dates. If a date is present in this array, it will be disabled in the date picker.
    /// </summary>
    /// <param name="dates">An array of dates to disable.</param>
    /// <returns>The current instance of the <see cref="DateTimeField"/> class.</returns>
    public DateTimeField SetDisabledDates(params DateTime[] dates)
    {
        DisabledDates = dates;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether to show an icon in the date picker.
    /// </summary>
    public bool ShowIcon { get; protected set; }

    /// <summary>
    /// Gets or sets the position of the icon in the date picker.
    /// </summary>
    public string? IconPos { get; protected set; } = "left";

    /// <summary>
    /// Sets a value indicating whether to show an icon in the date picker and its position.
    /// </summary>
    /// <param name="show">True to show the icon, false to hide it.</param>
    /// <param name="iconPos">The position of the icon. Valid values are "left" and "right".</param>
    /// <returns>The current instance of the <see cref="DateTimeField"/> class.</returns>
    public DateTimeField SetShowIcon(bool show = true, string iconPos = "left")
    {
        ShowIcon = show;
        IconPos = iconPos;
        return this;
    }

    /// <summary>
    /// Gets or sets the current view of the date picker.
    /// </summary>
    public string? View { get; protected set; }

    /// <summary>
    /// Sets the view of the date picker.
    /// </summary>
    /// <param name="view">The view type to set.</param>
    /// <returns>The current instance of the <see cref="DateTimeField"/> class.</returns>
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