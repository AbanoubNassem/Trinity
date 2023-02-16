using AbanoubNassem.Trinity.Components.BaseColumn;
using AbanoubNassem.Trinity.RequestHelpers;
using DapperQueryBuilder;
using Filter = DapperQueryBuilder.Filter;

namespace AbanoubNassem.Trinity.Columns;

public class BelongsToColumn : BaseHasRelationshipColumn<string>
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

    public override void SelectQuery(FluentQueryBuilder query)
    {
        query.Select($"t.{ColumnName.Split('.').First():raw}");
    }


    public override void Filter(Filters filters, string str)
    {
        var localColumns = ColumnName.Split('.');
        var foreignTables = ForeignTable?.Split('.')?? Array.Empty<string>();
        var foreignColumns = ForeignColumn?.Split('.')?? Array.Empty<string>();
        var relationshipNames = RelationshipName?.Split('.')?? Array.Empty<string>();

        var search = $"%{str.ToLower()}%";

        var innerFilters = new Filters(Filters.FiltersType.AND);

        for (var i = 0; i < foreignTables.Length; i++)
        {
            var parentRelation = i == 0 ? "t" : relationshipNames[i - 1];
            if (i == foreignTables.Length - 1)
            {
                var appendParentheses = foreignTables.Length == 1 ? "" : ")";
                innerFilters.Add(new Filter(
                    $"EXISTS (SELECT {Title:raw} FROM {foreignTables[i]:raw} AS {relationshipNames[i]:raw} WHERE {foreignColumns[i]:raw} = {parentRelation:raw}.{localColumns[i]:raw} AND LOWER({Title:raw}) LIKE {search}) {appendParentheses:raw}")
                );
            }
            else
            {
                var appendParentheses = i == 0 ? "" : ")";
                innerFilters.Add(new Filter(
                    $"EXISTS (SELECT {localColumns[i + 1]:raw} FROM {foreignTables[i]:raw} AS {relationshipNames[i]:raw} WHERE {foreignColumns[i]:raw} = {parentRelation:raw}.{localColumns[i]:raw} {appendParentheses:raw}")
                );
            }
        }

        filters.Add(innerFilters);
    }

    public override async Task<List<IDictionary<string, object?>>> SelectRelationshipQuery(FluentQueryBuilder query,
        List<IDictionary<string, object?>> entities, Sort? sort = null)
    {
        var localColumns = ColumnName.Split('.');
        var foreignTables = ForeignTable?.Split('.')?? Array.Empty<string>();
        var foreignColumns = ForeignColumn?.Split('.')?? Array.Empty<string>();
        var relationshipNames = RelationshipName?.Split('.')?? Array.Empty<string>();


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

            var q = (FluentQueryBuilder)query.Connection.FluentQueryBuilder()
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

    public override BaseHasRelationshipColumn<string> SetAsSearchable(bool searchable = true,
        bool globallySearchable = true,
        FiltersCallback? searchCallback = null)
    {
        base.SetAsSearchable(searchable, globallySearchable, searchCallback);
        // SetCustomFilter(new BelongsToField(ColumnName, Title, ForeignTable, ForeignColumn, RelationshipName));
        return this;
    }

    // public override async Task<List<KeyValuePair<string, string>>> RelationshipQuery(IDbConnection connection,
    //     string? value, int offset,
    //     string? search = null)
    // {
    //     // var test =
    //     //     "(SELECT * FROM store t  LEFT JOIN staff o ON o.store_id = t.store_id  WHERE t.store_id = '2' LIMIT 1)  UNION (SELECT * FROM  store t LEFT JOIN staff o ON o.store_id = t.store_id  WHERE t.store_id != '2'  OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY)";
    //     //
    //     // var rs = await connection.QueryAsync<dynamic, dynamic, dynamic>(test, (store, staff) => new
    //     // {
    //     //     store,
    //     //     staff
    //     // }, null, null, true, "store_id");
    //     //
    //
    //     var table = ForeignTable.Split('.').Last();
    //     var column = ForeignColumn.Split('.').Last();
    //     var query = "";
    //
    //     if (value != null)
    //     {
    //         query += $"(SELECT * FROM {table} WHERE {column} = @value LIMIT 1) UNION ";
    //     }
    //
    //
    //     query += $"(SELECT * FROM  {table} " + (value != null ? $"WHERE {column} != @value" : "");
    //
    //     if (search != null)
    //     {
    //         query += $"AND LOWER({Title}) like '@search' ";
    //     }
    //
    //
    //     query += $" OFFSET 0 ROWS FETCH NEXT {(value != null ? LazyItemsCount - 1 : LazyItemsCount)} ROWS ONLY)";
    //
    //
    //     var res = (await connection.QueryAsync(query, new
    //     {
    //         value,
    //         search,
    //         offset
    //     })).Cast<IDictionary<string, object?>>().ToList();
    //
    //     return res.Select(x =>
    //             new KeyValuePair<string, string>(x[ForeignColumn.Split('.').Last()]!.ToString()!,
    //                 x[Title]!.ToString()!))
    //         .ToList();
    // }
}