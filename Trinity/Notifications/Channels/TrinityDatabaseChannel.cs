using System.Text.Json;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Extensions;
using Microsoft.Extensions.DependencyInjection;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Notifications.Channels;

/// <summary>
/// Represents a notification channel which is used to send notifications to the Trinity database.
/// Implements the <see cref="ITrinityNotificationChannel"/> interface.
/// </summary>
public class TrinityDatabaseChannel : ITrinityNotificationChannel
{
    private static readonly string[] Cols = { "id", "type", "user_id", "data", "read_at", "created_at", "updated_at" };

    /// <summary>
    /// Asynchronously sends a <see cref="TrinityNotification"/> to a subset of users.
    /// </summary>
    /// <param name="serviceProvider">The service provider to resolve dependencies.</param>
    /// <param name="notification">The notification to be sent.</param>
    /// <param name="userIdentifiers">The identifiers of the users to whom the notification should be sent.</param>
    /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    public async Task Send(IServiceProvider serviceProvider, TrinityNotification notification,
        params string[] userIdentifiers)
    {
        var configurations = serviceProvider.GetRequiredService<TrinityConfigurations>();

        if (configurations.DatabaseNotifications == null) return;

        var query = configurations.ConnectionFactory().Query(configurations.DatabaseNotifications.NotificationsTable);

        var rows = new List<object?[]>(userIdentifiers.Length);
        foreach (var id in userIdentifiers)
        {
            rows.Add(new object?[]
            {
                Guid.NewGuid(),
                notification.Name ?? notification.GetType().Name,
                id,
                JsonSerializer.Serialize(notification.Data(serviceProvider, id)),
                null,
                DateTime.Now,
                DateTime.Now
            });
        }

        if (rows.Any())
            await query.InsertAsync(Cols, rows);
    }

    /// <summary>
    /// Asynchronously sends a <see cref="TrinityNotification"/> to all users in the database.
    /// </summary>
    /// <param name="serviceProvider">The service provider to resolve dependencies.</param>
    /// <param name="notification">The notification to be sent.</param>
    /// <returns>A <see cref="Task"/> representing the asynchronous operation.</returns>
    public async Task SendAll(IServiceProvider serviceProvider, TrinityNotification notification)
    {
        var configurations = serviceProvider.GetRequiredService<TrinityConfigurations>();

        if (configurations.DatabaseNotifications == null) return;

        var queryFactory = configurations.ConnectionFactory().QueryFactory();

        const int chunkSize = 10000;
        var userIdCount = await queryFactory.Query(configurations.DatabaseNotifications.UsersTable).CountAsync<long>();

        var data = JsonSerializer.Serialize(notification.Data(serviceProvider));

        for (var i = 0; i < userIdCount; i += chunkSize)
        {
            var users = (await queryFactory
                    .Query(configurations.DatabaseNotifications.UsersTable)
                    .Select(configurations.DatabaseNotifications.UsersTablePrimaryKey)
                    .Skip(i)
                    .Take(chunkSize)
                    .GetAsync())
                .Cast<IDictionary<string, object?>>()
                .ToList();


            var rows = new List<object?[]>(users.Count);
            foreach (var user in users)
            {
                if (user?[configurations.DatabaseNotifications.UsersTablePrimaryKey] == null) continue;

                rows.Add(new[]
                {
                    Guid.NewGuid(),
                    notification.Name ?? notification.GetType().Name,
                    user[configurations.DatabaseNotifications.UsersTablePrimaryKey]!,
                    data,
                    null,
                    DateTime.Now,
                    DateTime.Now
                });
            }

            if (rows.Any())
                await queryFactory.Query(configurations.DatabaseNotifications.NotificationsTable)
                    .InsertAsync(Cols, rows);
        }
    }
}