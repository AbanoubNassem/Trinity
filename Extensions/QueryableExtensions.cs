using System.Data;
using StackExchange.Profiling.Data;

namespace AbanoubNassem.Trinity.Extensions;

public static class QueryableExtensions
{
    public static string GetLastInsertedId(this IDbConnection connection, string idColumn)
    {
        var type = (connection is ProfiledDbConnection dbConnection
            ? dbConnection.WrappedConnection.GetType()
            : connection.GetType()).ToString().Split('.').Last();

        return type switch
        {
            "SqlClient" => ";SELECT SCOPE_IDENTITY();",
            "MySqlConnection" => ";SELECT LAST_INSERT_ID();",
            "NpgsqlConnection" => $"RETURNING {idColumn}",
            "SQLiteConnection" => ";SELECT last_insert_rowid()",
            _ => $"RETURNING {idColumn}"
        };
    }
}