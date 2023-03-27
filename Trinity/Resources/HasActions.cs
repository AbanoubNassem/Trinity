using AbanoubNassem.Trinity.Components.TrinityAction;
using AbanoubNassem.Trinity.Extensions;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    public List<object> Actions => new(TrinityTable.Actions.Select(x =>
    {
        x.Init(ServiceProvider);
        x.Setup();
        return x;
    }));

    public List<object> BulkActions => new(TrinityTable.BulkActions.Select(x =>
    {
        x.Init(ServiceProvider);
        x.Setup();
        return x;
    }));


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