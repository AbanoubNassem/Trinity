namespace AbanoubNassem.Trinity.Configurations;

/// <summary>
/// Represents the database configurations for Trinity notifications.
/// </summary>
public class TrinityDatabaseNotificationsConfigurations
{
    /// <summary>
    /// Initializes a new instance of the <see cref="TrinityDatabaseNotificationsConfigurations"/> class.
    /// </summary>
    /// <param name="usersTable">The name of the users table that Trinity will use. Defaults to "users".</param>
    /// <param name="usersTablePrimaryKey">The primary key of the users table that Trinity will use. Defaults to "id".</param>
    /// <param name="notificationsTable">The name of the notifications table that Trinity will use. Defaults to "trinity_notifications".</param>
    public TrinityDatabaseNotificationsConfigurations(string usersTable = "users", string usersTablePrimaryKey = "id",
        string notificationsTable = "trinity_notifications")
    {
        UsersTable = usersTable;
        UsersTablePrimaryKey = usersTablePrimaryKey;
        NotificationsTable = notificationsTable;
    }

    /// <summary>
    /// The name of the users table trinity will use.
    /// </summary>
    public string UsersTable { get; set; }

    /// <summary>
    /// The primary key of the users table that Trinity will use.
    /// </summary>
    public string UsersTablePrimaryKey { get; set; }

    /// <summary>
    /// The name of the notifications table trinity will use.
    /// </summary>
    public string NotificationsTable { get; set; }
}