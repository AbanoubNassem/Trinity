using AbanoubNassem.Trinity.Components.TrinityField;
using AbanoubNassem.Trinity.RequestHelpers;
using SqlKata;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Fields;

/// <summary>
/// A class that represents a field-column in a table that has a relationship with another table.
/// </summary>
public class BelongsToField<T> : HasRelationshipField<BelongsToField<T>, T>
{
    /// <inheritdoc />
    public override string ComponentName => "BelongsToField";

    /// <inheritdoc />
    public override string Type => "Field";

    /// <inheritdoc />
    public BelongsToField(string localColumnNames, string relationTables, string foreignColumnNames,
        string relationshipName, string relationSelectColumn)
        : base(localColumnNames, foreignColumnNames, relationTables)
    {
        SetTitle(relationSelectColumn);

        SetRelationshipName(relationshipName);
    }

    /// <inheritdoc />
    public BelongsToField(string columnName, string relationSelectColumn, string? foreignTable = null,
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

    /// <summary>
    /// Gets or sets the list of options for the field.
    /// </summary>
    /// <value>The list of options for the field.</value>
    public List<KeyValuePair<string, string>>? Options { get; protected set; } = new();

    /// <summary>
    /// Sets the list of options for the field.
    /// </summary>
    /// <param name="options">The list of options to set.</param>
    /// <returns>The current instance of the <see cref="BelongsToField{T}"/>.</returns>
    public BelongsToField<T> SetOptions(List<KeyValuePair<string, string>> options)
    {
        Options = options;
        return this;
    }

    /// <inheritdoc />
    public override void SelectQuery(Query query)
    {
        query.Select($"t.{ColumnName.Split('.').First()}");
    }


    /// <inheritdoc />
    public override void FilterQuery(Query query, string globalSearch)
    {
        var localColumns = ColumnName.Split('.');
        var foreignTables = ForeignTable?.Split('.') ?? Array.Empty<string>();
        var foreignColumns = ForeignColumn?.Split('.') ?? Array.Empty<string>();
        var relationshipNames = RelationshipName?.Split('.') ?? Array.Empty<string>();

        var search = $"%{globalSearch}%";


        for (var i = 0; i < foreignTables.Length; i++)
        {
            var parentRelation = i == 0 ? "t" : relationshipNames[i - 1];
            query.Join($"{foreignTables[i]} AS {relationshipNames[i]}", $"{parentRelation}.{localColumns[i]}",
                $"{relationshipNames[i]}.{foreignColumns[i]}");
        }

        query.WhereLike($"{relationshipNames.Last()}.{Title}", search);
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
    public override async Task<List<KeyValuePair<string, string>>> GetAssociatesRelationshipQuery(
        QueryFactory queryFactory,
        string? value, int offset,
        string? search = null)
    {
        var localColumns = ColumnName.Split('.');
        var foreignTables = ForeignTable?.Split('.') ?? Array.Empty<string>();
        var foreignColumns = ForeignColumn?.Split('.') ?? Array.Empty<string>();
        var relationshipNames = RelationshipName?.Split('.') ?? Array.Empty<string>();


        var query = queryFactory.Query().From($"{foreignTables.First()} AS t");

        if (search == null && value != null && value != "undefined")
        {
            query.Where($"{relationshipNames.Last()}.{foreignColumns.Last()}", value)
                .OrWhere($"{relationshipNames.Last()}.{foreignColumns.Last()}", "<>", value);
        }

        for (var i = 0; i < foreignTables.Length; i++)
        {
            var parentRelation = i == 0 ? "t" : relationshipNames[i - 1];
            query.Join($"{foreignTables[i]} AS {relationshipNames[i]}", $"{parentRelation}.{localColumns[i]}",
                $"{relationshipNames[i]}.{foreignColumns[i]}");
        }

        query.Select($"{relationshipNames.First()}.{foreignColumns.First()}")
            .Select($"{relationshipNames.Last()}.{Title}");

        if (search != null)
        {
            query.WhereLike($"{relationshipNames.Last()}.{Title}", $"%{search}%");
        }

        query.Offset(offset - 1)
            .Limit(LazyItemsCount - 1);

        var res = (await query.GetAsync()).Cast<IDictionary<string, object?>>().ToList();

        return res.Select(x =>
                new KeyValuePair<string, string>(x[foreignColumns.First()]!.ToString()!,
                    x[Title]!.ToString()!))
            .ToList();
    }
}

/// <inheritdoc />
public class BelongsToField : BelongsToField<string>
{
    /// <inheritdoc />
    public BelongsToField(string localColumnNames, string relationTables, string foreignColumnNames,
        string relationshipName, string relationSelectColumn) : base(localColumnNames, relationTables,
        foreignColumnNames, relationshipName, relationSelectColumn)
    {
    }

    /// <inheritdoc />
    public BelongsToField(string columnName, string relationSelectColumn, string? foreignTable = null,
        string? relationshipName = null) : base(columnName, relationSelectColumn, foreignTable, relationshipName)
    {
    }
}