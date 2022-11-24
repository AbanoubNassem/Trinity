using System.Linq.Expressions;
using DapperQueryBuilder;
using Humanizer;

namespace AbanoubNassem.Trinity.Fields;

public class BelongsTo : HasRelationshipField
{
    public override string ComponentName => "BelongsTo";

    public BelongsTo(string columnName, string relationTitleColumn, string? relationshipName = null) : base(columnName)
    {
        SetTitle(relationTitleColumn);
        
        if (relationshipName != null)
        {
            SetRelationshipName(relationshipName);
        }
    }

    public override async Task<IEnumerable<dynamic>> RunRelationQuery(FluentQueryBuilder query, IEnumerable<object> ids)
    {
        var q = query.Select($"*")
            .From($"{ForeignTable:raw}")
            .Where($"{ForeignColumn:raw} in ({string.Join(',', ids):raw})");

        Console.WriteLine(q.Sql);

        return await q.QueryAsync();
    }
}


// public class BelongsTo : HasRelationship
// {
//     public override string ComponentName => "BelongsTo";
//
//
//     private string[]? _selectableColumns;
//
//     protected override void SetUp(string propertyName, Type propertyType)
//     {
//         Table = propertyName.Pluralize().ToLower();
//
//         var key = $"{propertyName}_id".ToLower();
//
//         LocalColumn = key;
//         ForeignColumn = key;
//     }
//
//     public BelongsTo On(string localColumn, string foreignColumn, string? table = null)
//     {
//         Attribute = localColumn;
//         LocalColumn = localColumn;
//         ForeignColumn = foreignColumn;
//
//         if (table != null)
//             Table = table;
//         return this;
//     }
//
//     public BelongsTo Select(params string[] columns)
//     {
//         _selectableColumns = columns;
//         return this;
//     }
//
//     public override void SelectQuery(FluentQueryBuilder query)
//     {
//         query.Select($"t.{LocalColumn:raw}");
//         if (_selectableColumns == null)
//         {
//             query.Select($"b.*");
//         }
//         else
//         {
//             query.Select($"b.{ForeignColumn:raw}");
//
//             foreach (var c in _selectableColumns)
//             {
//                 query.Select($"b.{c:raw}");
//             }
//         }
//
//         query.From($"LEFT JOIN {Table:raw} b on t.{LocalColumn:raw} = b.{ForeignColumn:raw}");
//     }
//     
//
//     public static void Make<TModel, TRelation>(Expression<Func<TModel, object>> property,
//         Expression<Func<TRelation, object>> relation)
//     {
//     }
// }