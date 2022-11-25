using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Fields;

public class BelongsTo : HasRelationshipField
{
    public override string ComponentName => "BelongsTo";

    private readonly string _localColumnNames;

    public BelongsTo(string localColumnNames, string relationTables, string foreignColumnNames,
        string relationshipName, string relationTitleColumn)
        : base(localColumnNames, foreignColumnNames, relationTables)
    {
        _localColumnNames = localColumnNames;

        SetTitle(relationTitleColumn);

        SetRelationshipName(relationshipName);
    }

    public BelongsTo(string columnName, string relationTitleColumn, string? relationshipName = null) : base(columnName)
    {
        _localColumnNames = columnName;

        SetTitle(relationTitleColumn);

        if (relationshipName != null)
        {
            SetRelationshipName(relationshipName);
        }
    }

    public override async Task<IEnumerable<dynamic>> RunRelationQuery(FluentQueryBuilder query, IEnumerable<object> ids)
    {
        var localColumns = _localColumnNames.Split('.');
        var foreignTables = ForeignTable.Split('.');
        var foreignColumns = ForeignColumn.Split('.');
        var relationshipNames = RelationshipName.Split('.');

        var result = (await query.Select($"*")
            .From($"{foreignTables[0]:raw}")
            .Where($"{foreignColumns[0]:raw} in ({string.Join(',', ids):raw})")
            .QueryAsync()).Cast<IDictionary<string, object>>().ToList();


        var temp = result;

        for (var i = 1; i < foreignTables.Length; i++)
        {
            var innerIds = result.Select(x => x[localColumns[i]]);

            var q = query.Connection.FluentQueryBuilder()
                .Select($"*")
                .From($"{foreignTables[i]:raw}")
                .Where($"{foreignColumns[i]:raw} in ({string.Join(',', innerIds):raw})");


            var tempResult = (await q.QueryAsync()).Cast<IDictionary<string, object>>().ToList();

            foreach (var item in temp)
            {
                var relation = tempResult.SingleOrDefault(x => x[foreignColumns[i]].Equals(item[localColumns[i]]));
                if (relation == null) continue;
                
                
                if (item.ContainsKey(relationshipNames[i]))
                {
                    item[relationshipNames[i]] = relation;
                }
                else
                {
                    item.Add(relationshipNames[i], relation);
                }
            }

            temp = tempResult;
        }

        return result;
    }
}