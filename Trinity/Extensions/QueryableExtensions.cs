using System.Data;
using SqlKata;
using SqlKata.Compilers;
using SqlKata.Execution;
using StackExchange.Profiling.Data;

namespace AbanoubNassem.Trinity.Extensions;

public static class QueryableExtensions
{
    private static string? ConnectionType { get; set; }
    private static Compiler? Compiler { get; set; }

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

    public static Query Query(this IDbConnection connection)
    {
        return connection.QueryFactory().Query();
    }
}