using AbanoubNassem.Trinity.Components.TrinityColumn;
using AbanoubNassem.Trinity.RequestHelpers;
using SqlKata;
using SqlKata.Execution;


namespace AbanoubNassem.Trinity.Columns;

/// <summary>
/// A class that represents a column in a table that has a relationship with another table.
/// </summary>
public class BelongsToColumn : TrinityHasRelationshipColumn<string>
{
    /// <inheritdoc />
    public override string ComponentName => "BelongsToColumn";

    /// <inheritdoc />
    public override string Type => "Column";

    /// <inheritdoc />
    public BelongsToColumn(string localColumnNames, string relationTables, string foreignColumnNames,
        string foreignColumnToSelect, string relationshipName)
        : base(localColumnNames, foreignColumnNames, relationTables)
    {
        SetTitle(foreignColumnToSelect);

        SetRelationshipName(relationshipName);
    }

    /// <inheritdoc />
    public BelongsToColumn(string columnName, string foreignColumnToSelect, string? foreignTable = null,
        string? relationshipName = null) : base(columnName)
    {
        SetTitle(foreignColumnToSelect);

        if (!string.IsNullOrWhiteSpace(foreignTable))
            SetForeignTable(foreignTable);

        if (relationshipName != null)
        {
            SetRelationshipName(relationshipName);
        }
    }

    /// <inheritdoc />
    public override void SelectQuery(Query query)
    {
        query.Select($"t.{ColumnName.Split('.').First()}");
    }


    /// <inheritdoc />
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

    /// <inheritdoc />
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

    /// <inheritdoc />
    public override TrinityHasRelationshipColumn<string> SetAsSearchable(bool searchable = true,
        bool isIndividuallySearchable = false,
        bool globallySearchable = true, bool caseSensitive = false,
        FiltersCallback? searchCallback = null)
    {
        base.SetAsSearchable(searchable, isIndividuallySearchable, globallySearchable, caseSensitive, searchCallback);
        return this;
    }
}