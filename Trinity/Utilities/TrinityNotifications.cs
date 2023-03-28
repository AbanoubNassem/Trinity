namespace AbanoubNassem.Trinity.Utilities;

/// <summary>
/// specifies the type of the message.
/// </summary>
public enum NotificationSeverity
{
    /// <summary>
    /// 
    /// </summary>
    Success,

    /// <summary>
    /// 
    /// </summary>
    Error,

    /// <summary>
    /// 
    /// </summary>
    Info,

    /// <summary>
    /// 
    /// </summary>
    Warn
}

/// <summary>
/// TrinityNotifications allow you to notify Nova users of events within your application.
/// </summary>
public static class TrinityNotifications
{
    private static readonly List<object> Notifications = new();

    /// <summary>
    /// Show a Toast of a successful message. 
    /// </summary>
    /// <param name="message">The message used for the notification.</param>
    /// <param name="title">The title used for the notification.</param>
    /// <param name="lifeTimeMs">Delay in milliseconds to close the message automatically.</param>
    /// <param name="closable">Whether the message can be closed manually using the close icon.</param>
    /// <param name="sticky">When enabled, message is not removed automatically.</param>
    public static void NotifySuccess(string message, string? title = null, int lifeTimeMs = 3000, bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "success", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    /// <summary>
    /// Show a Toast of an error message. 
    /// </summary>
    /// <param name="message">The message used for the notification.</param>
    /// <param name="title">The title used for the notification.</param>
    /// <param name="lifeTimeMs">Delay in milliseconds to close the message automatically.</param>
    /// <param name="closable">Whether the message can be closed manually using the close icon.</param>
    /// <param name="sticky">When enabled, message is not removed automatically.</param>
    public static void NotifyError(string message, string? title = null, int lifeTimeMs = 3000, bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "error", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    /// <summary>
    /// Show a Toast of an information message. 
    /// </summary>
    /// <param name="message">The message used for the notification.</param>
    /// <param name="title">The title used for the notification.</param>
    /// <param name="lifeTimeMs">Delay in milliseconds to close the message automatically.</param>
    /// <param name="closable">Whether the message can be closed manually using the close icon.</param>
    /// <param name="sticky">When enabled, message is not removed automatically.</param>
    public static void NotifyInformation(string message, string? title = null, int lifeTimeMs = 3000,
        bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "info", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    /// <summary>
    /// Show a Toast of a warning message. 
    /// </summary>
    /// <param name="message">The message used for the notification.</param>
    /// <param name="title">The title used for the notification.</param>
    /// <param name="lifeTimeMs">Delay in milliseconds to close the message automatically.</param>
    /// <param name="closable">Whether the message can be closed manually using the close icon.</param>
    /// <param name="sticky">When enabled, message is not removed automatically.</param>
    public static void NotifyWarning(string message, string? title = null, int lifeTimeMs = 3000, bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "warn", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    private static void Notify(object notification)
    {
        Notifications.Add(notification);
    }

    /// <summary>
    /// Flush the notifications and clear it.
    /// </summary>
    /// <returns>A list of all the notifications added before flushing.</returns>
    public static List<object> Flush()
    {
        var tmp = new List<object>(Notifications);

        Notifications.Clear();

        return tmp;
    }
}