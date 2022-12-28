namespace AbanoubNassem.Trinity.Utilities;

public static class TrinityNotifications
{
    private static readonly List<object> Notifications = new();

    public static void NotifySuccess(string message, string? title = null, int lifeTimeMs = 3000, bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "success", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    public static void NotifyError(string message, string? title = null, int lifeTimeMs = 3000, bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "error", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

    public static void NotifyInformation(string message, string? title = null, int lifeTimeMs = 3000,
        bool closable = true,
        bool sticky = false)
    {
        Notify(new
        {
            severity = "info", summary = title, detail = message, life = lifeTimeMs, closable, sticky
        });
    }

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

    public static List<object> Flush()
    {
        var tmp = new List<object>(Notifications);

        Notifications.Clear();

        return tmp;
    }
}