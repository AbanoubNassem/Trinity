using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Extensions;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    /// <inheritdoc />
    public List<object> Actions => [..TrinityTable.Actions];

    /// <inheritdoc />
    public List<object> BulkActions => [..TrinityTable.BulkActions];


    /// <inheritdoc />
    public async Task<object> HandleAction(ITrinityAction action, Dictionary<string, object?> form,
        List<string> primaryKeys)
    {
        var records = (await ConnectionFactory().Query()
                .From($"{Table} AS t")
                .WhereIn($"t.{PrimaryKeyColumn}", primaryKeys)
                .GetAsync())
            .Cast<IDictionary<string, object?>>()
            .ToList();

        return await action.Handle(form, records);
    }
}