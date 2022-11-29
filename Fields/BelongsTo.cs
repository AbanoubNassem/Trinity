using AbanoubNassem.Trinity.RequestHelpers;
using DapperQueryBuilder;

namespace AbanoubNassem.Trinity.Fields;

public class BelongsTo : HasRelationshipField
{
    public override string ComponentName => "BelongsTo";

    public BelongsTo(string localColumnNames, string relationTables, string foreignColumnNames,
        string relationshipName, string relationTitleColumn)
        : base(localColumnNames, foreignColumnNames, relationTables)
    {
        SetTitle(relationTitleColumn);

        SetRelationshipName(relationshipName);
    }

    public BelongsTo(string columnName, string relationTitleColumn, string? relationshipName = null) : base(columnName)
    {
        SetTitle(relationTitleColumn);

        if (relationshipName != null)
        {
            SetRelationshipName(relationshipName);
        }
    }

    public override async Task<List<IDictionary<string, object?>>> RunRelationQuery(FluentQueryBuilder query,
        List<IDictionary<string, object?>> entities, Sort? sort = null)
    {
        var localColumns = ColumnName.Split('.');
        var foreignTables = ForeignTable.Split('.');
        var foreignColumns = ForeignColumn.Split('.');
        var relationshipNames = RelationshipName.Split('.');


        var temp = entities;

        for (var i = 0; i < foreignTables.Length; i++)
        {
            var loadedBefore = entities.Where(x => x[relationshipNames[i]] != null)
                .Select(x => x[relationshipNames[i]])
                .Cast<IDictionary<string, object?>>()
                .ToList();

            if (loadedBefore.Any())
            {
                temp = loadedBefore;
                continue;
            }

            var i1 = i;
            var innerIds = temp.Select(x => x[localColumns[i1]]);

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

            temp = tempResult.ToList()!;
        }

        if (sort != null)
        {
            Sort(ref entities, relationshipNames, Title, sort);
        }

        return entities;
    }

    private IDictionary<string, object?>? GetNestedRelationship(IDictionary<string, object?>? entity,
        string[] relationshipNames, int index = -1)
    {
        while (true)
        {
            var i = index + 1;

            if (entity == null || i == relationshipNames.Length) return entity;

            entity = (IDictionary<string, object?>?)entity[relationshipNames[i]];
            index = i;
        }
    }

    private void Sort(ref List<IDictionary<string, object?>> entities,
        string[] relationshipNames,
        string columnTitle,
        Sort sort)
    {
        if (sort.Order == 1)
        {
            entities = entities.OrderBy(x => GetNestedRelationship(x, relationshipNames)?[columnTitle]).ToList();
        }
        else
        {
            entities = entities.OrderByDescending(x => GetNestedRelationship(x, relationshipNames)?[columnTitle])
                .ToList();
        }
    }
}