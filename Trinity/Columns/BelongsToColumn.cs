using AbanoubNassem.Trinity.Components.TrinityColumn;
using AbanoubNassem.Trinity.RequestHelpers;
using SqlKata;
using SqlKata.Execution;


namespace AbanoubNassem.Trinity.Columns;

public class BelongsToColumn : TrinityHasRelationshipColumn<string>
{
    public override string ComponentName => "BelongsToColumn";
    public override string Type => "Column";

    public BelongsToColumn(string localColumnNames, string relationTables, string foreignColumnNames,
        string relationshipName, string relationSelectColumn)
        : base(localColumnNames, foreignColumnNames, relationTables)
    {
        SetTitle(relationSelectColumn);

        SetRelationshipName(relationshipName);
    }

    public BelongsToColumn(string columnName, string relationSelectColumn, string? foreignTable = null,
        string? relationshipName = null) : base(columnName)
    {
        SetTitle(relationSelectColumn);

        if (!string.IsNullOrWhiteSpace(foreignTable))
            SetForeignTable(foreignTable);

        if (relationshipName != null)
        {
            SetRelationshipName(relationshipName);
        }
    }

    public override void SelectQuery(Query query)
    {
        query.Select($"t.{ColumnName.Split('.').First()}");
    }


    public override void Filter(Query query, string str)
    {
        var localColumns = ColumnName.Split('.');
        var foreignTables = ForeignTable?.Split('.') ?? Array.Empty<string>();
        var foreignColumns = ForeignColumn?.Split('.') ?? Array.Empty<string>();
        var relationshipNames = RelationshipName?.Split('.') ?? Array.Empty<string>();

        var search = $"%{str}%";


        for (var i = 0; i < foreignTables.Length; i++)
        {
            var parentRelation = i == 0 ? "t" : relationshipNames[i - 1];
            query.Join($"{foreignTables[i]} AS {relationshipNames[i]}", $"{parentRelation}.{localColumns[i]}",
                $"{relationshipNames[i]}.{foreignColumns[i]}");
        }

        query.WhereLike($"{relationshipNames.Last()}.{Title}", search, CaseSensitive);
    }

    public override async Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(QueryFactory queryFactory,
        List<IDictionary<string, object?>> entities, Sort? sort = null)
    {
        var localColumns = ColumnName.Split('.');
        var foreignTables = ForeignTable?.Split('.') ?? Array.Empty<string>();
        var foreignColumns = ForeignColumn?.Split('.') ?? Array.Empty<string>();
        var relationshipNames = RelationshipName?.Split('.') ?? Array.Empty<string>();


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

            var q = queryFactory.Query()
                .Select("*")
                .From($"{foreignTables[i]}")
                .WhereIn(foreignColumns[i], innerIds);

            var tempResult = (await q.GetAsync()).Cast<IDictionary<string, object>>().ToList();

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

    public override TrinityHasRelationshipColumn<string> SetAsSearchable(bool searchable = true,
        bool globallySearchable = true, bool caseSensitive = false,
        FiltersCallback? searchCallback = null)
    {
        base.SetAsSearchable(searchable, globallySearchable, caseSensitive, searchCallback);
        return this;
    }
}