using System.Data;
using StackExchange.Profiling.Data;

namespace AbanoubNassem.Trinity.Extensions;

public static class QueryableExtensions
{
    private static string? ConnectionType { get; set; }

    public static string GetLastInsertedId(this IDbConnection connection, string idColumn)
    {
        ConnectionType ??= (connection is ProfiledDbConnection dbConnection
            ? dbConnection.WrappedConnection.GetType()
            : connection.GetType()).ToString().Split('.').Last();

        return ConnectionType switch
        {
            "SqlConnection" => ";SELECT SCOPE_IDENTITY();",
            "MySqlConnection" => ";SELECT LAST_INSERT_ID();",
            "NpgsqlConnection" => $"RETURNING {idColumn}",
            "SQLiteConnection" => ";SELECT last_insert_rowid()",
            _ => $"RETURNING {idColumn}"
        };
    }
}