using System.Data;
using SqlKata;
using SqlKata.Compilers;
using SqlKata.Execution;
using StackExchange.Profiling.Data;

namespace AbanoubNassem.Trinity.Extensions;

/// <summary>
/// Adds extra functionality to <see cref="IDbConnection" />.
/// </summary>
public static class QueryableExtensions
{
    private static string? ConnectionType { get; set; }
    private static Compiler? Compiler { get; set; }

    /// <summary>
    /// Creates a new instance of <see cref="QueryFactory"/>. 
    /// </summary>
    /// <param name="connection">The <see cref="IDbConnection" /> to create the <see cref="QueryFactory"/> from.</param>
    /// <returns><see cref="QueryFactory"/></returns>
    /// <exception cref="Exception">Throws an Exception if the Connection Provider is not supported.</exception>
    public static QueryFactory QueryFactory(this IDbConnection connection)
    {
        ConnectionType ??= (connection is ProfiledDbConnection dbConnection
            ? dbConnection.WrappedConnection.GetType()
            : connection.GetType()).ToString().Split('.').Last();

        Compiler ??= ConnectionType switch
        {
            "SqlConnection" => new SqlServerCompiler(),
            "MySqlConnection" => new MySqlCompiler(),
            "NpgsqlConnection" => new PostgresCompiler(),
            "SqliteConnection" => new SqliteCompiler(),
            "FbConnection" => new FirebirdCompiler(),
            "OracleConnection" => new OracleCompiler(),
            _ => throw new Exception($"{ConnectionType} is not supported!")
        };

        return new QueryFactory(connection, Compiler);
    }

    /// <summary>
    /// Creates a new instance of <see cref="SqlKata.Query"/>.
    /// </summary>
    /// <param name="connection">The <see cref="IDbConnection" /> to create the <see cref="SqlKata.Query"/> from.</param>
    /// <returns><see cref="SqlKata.Query"/></returns>
    public static Query Query(this IDbConnection connection)
    {
        return connection.QueryFactory().Query();
    }

    /// <summary>
    /// Creates a new instance of <see cref="SqlKata.Query"/>.
    /// </summary>
    /// <param name="connection">The <see cref="IDbConnection" /> to create the <see cref="SqlKata.Query"/> from.</param>
    /// <param name="table">The table name.</param>
    /// <returns><see cref="SqlKata.Query"/></returns>
    public static Query Query(this IDbConnection connection, string table)
    {
        return connection.QueryFactory().Query(table);
    }
}