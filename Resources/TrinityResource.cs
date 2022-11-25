using System.Collections;
using System.Data;
using System.Linq.Expressions;
using System.Reflection;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Fields;
using AbanoubNassem.Trinity.Managers;
using AbanoubNassem.Trinity.RequestHelpers;
using Dapper;
using DapperQueryBuilder;
using Microsoft.AspNetCore.Http;

namespace AbanoubNassem.Trinity.Resources;

public interface ITrinityResource
{
    public string? Label { get; set; }
    public string? PluralLabel { get; set; }
    public string? Table { get; set; }
    public string? GetDbSetName();
    public Task Setup();
    public Task<IPaginator> GetIndexData();

    public Dictionary<string, object> Fields { get; }
}

public abstract class TrinityResource : ITrinityResource
{
    protected IServiceProvider ServiceProvider { get; init; } = null!;

    protected HttpRequest Request { get; init; } = null!;

    protected HttpResponse Response { get; init; } = null!;
    [JsonIgnore] protected Func<IDbConnection> ConnectionFactory { get; init; } = null!;

    public virtual string? Label { get; set; }
    public virtual string? PluralLabel { get; set; }

    public object? Record { get; set; }
    public virtual string? Icon => null;
    [JsonIgnore] public virtual string? Table { get; set; }

    private Dictionary<string, object> _fields = new();

    public virtual string? GetDbSetName() => null;

    public virtual async Task Setup()
    {
        await Task.CompletedTask;
    }

    public abstract IList<BaseField> GetFields();

    public Dictionary<string, object> Fields
    {
        get
        {
            if (_fields.Count != 0) return _fields;

            foreach (var field in GetFields())
            {
                _fields.Add(field.ColumnName, field);
            }

            return _fields;
        }
    }


    public virtual async Task<IPaginator> GetIndexData()
    {
        using var conn = ConnectionFactory();

        var query = (FluentQueryBuilder)conn.FluentQueryBuilder();

        query.From($"{Table:raw} t");


        foreach (var field in Fields.Values)
        {
            ((BaseField)field).SelectQuery(query);
        }

        var countQuery = query.Connection.FluentQueryBuilder()
            .Select($"COUNT(*)")
            .From($"{Table:raw}").Sql;

        var selectQuery = query
            .Limit((1 - 1) * 250, 250)
            .Sql;


        using var multi =
            await query.Connection.QueryMultipleAsync($"{countQuery};{selectQuery};");

        Console.WriteLine($"{selectQuery};");

        var count = await multi.ReadSingleAsync<int>();

        var li = (await multi.ReadAsync()).Cast<IDictionary<string, object>>();

        foreach (var filed in Fields.Values)
        {
            if (filed is not HasRelationshipField field) continue;

            var columnName = field.ColumnName.Split('.')[0];
            var foreignColumn = field.ForeignColumn.Split('.')[0];
            var relationshipName = field.RelationshipName.Split('.')[0];

            var ids = li.Select(x => x[columnName]);
            var results = (await field.RunRelationQuery((FluentQueryBuilder)conn.FluentQueryBuilder(), ids))
                .Cast<IDictionary<string, object>>();


            foreach (var result in results)
            {
                var relation = li.First(x => x[columnName].Equals(result[foreignColumn]));

                if (relation != null)
                {
                    relation[relationshipName] = result;
                }
                else
                {
                    relation.Add(relationshipName, result);
                }
            }
        }

        foreach (var result in li)
        {
            foreach (BaseField field in Fields.Values)
            {
                field.Format(result);
            }
        }


        return new Pagination
        {
            TotalCount = count,
            Data = li,
            CurrentPage = 1,
            PerPage = 250,
            TotalPages = (int)Math.Ceiling(count / (double)250)
        };
        // return await query.Paginate<TModel>(Table!, 1, 250);
    }


    // public virtual async Task<IPaginator> GetIndexDataDyna()
    // {
    //     using var conn = ConnectionFactory();
    //
    //     var query = (FluentQueryBuilder)conn.FluentQueryBuilder();
    //
    //     query.From($"{Table:raw} t");
    //
    //     var modelExpr = Expression.Parameter(typeof(TModel), "model");
    //     var parameters = new List<ParameterExpression>();
    //     var expressions = new List<Expression>();
    //     var types = new List<Type> { typeof(TModel) };
    //
    //     parameters.Add(modelExpr);
    //
    //     foreach (var field in Fields.Fields.Values)
    //     {
    //         if (field is IRelationshipField)
    //         {
    //             types.Add(typeof(TModel).GetProperty(field.PropertyName)!.PropertyType);
    //
    //             var parameter = Expression.Parameter(types.Last(),
    //                 field.PropertyName);
    //             parameters.Add(parameter);
    //
    //             var propertyExpression = Expression.Property(modelExpr, field.PropertyName);
    //             expressions.Add(Expression.Assign(propertyExpression, parameter));
    //         }
    //
    //         field.SelectQuery(query);
    //     }
    //
    //     Console.WriteLine(query.Sql);
    //
    //     types.Add(typeof(TModel));
    //     expressions.Add(modelExpr);
    //
    //     var c = Expression.Lambda(Expression.Block(expressions),
    //         "BelongsTo",
    //         true,
    //         parameters
    //     ).Compile();
    //
    //     IEnumerable<TModel> li;
    //
    //     query.Limit((1 - 1) * 250, 250);
    //
    //     if (parameters.Count > 1)
    //     {
    //         var t = typeof(SqlMapper)
    //             .GetMethods(BindingFlags.Public | BindingFlags.Static)
    //             .FirstOrDefault(x =>
    //                 x.Name == "QueryAsync" && x.ContainsGenericParameters &&
    //                 x.GetGenericArguments().Length == parameters.Count + 1);
    //
    //
    //         li = (await ((Task<IEnumerable<TModel>>)t?.MakeGenericMethod(types.ToArray())
    //             .Invoke(conn, new object?[] { conn, query.Sql, c, null, null, true, "customerNumber", null, null })!)!);
    //     }
    //     else
    //     {
    //         li = await query.QueryAsync<TModel>();
    //     }
    //
    //     // var lii = (conn.Query<TModel>(query.Sql));
    //
    //     return new Pagination()
    //     {
    //         Data = li,
    //         PerPage = 250
    //     };
    //     return await query.Paginate<TModel>(Table!, 1, 250);
    // }
}