using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Components.TrinityAction;
using AbanoubNassem.Trinity.Extensions;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    /// <inheritdoc />
    public List<object> Actions
    {
        get
        {
            var actions = new List<object>();
            if (WithDefaultEditAction)
                actions.Add(DefaultEditAction);

            if (WithDefaultDeleteAction)
                actions.Add(DefaultDeleteAction);

            actions.AddRange(TrinityTable.Actions);

            return actions;
        }
    }

    /// <inheritdoc />
    public List<object> BulkActions
    {
        get
        {
            var actions = new List<object>();
            if (WithDefaultBulkDeleteAction)
                actions.Add(DefaultBulkDeleteAction);

            actions.AddRange(TrinityTable.BulkActions);

            return actions;
        }
    }

    /// <summary>
    /// Whether to show the Edit action to the row or not.
    /// </summary>
    protected virtual bool WithDefaultEditAction => true;
    /// <summary>
    /// Whether to show the Delete action to the row or not.
    /// </summary>
    protected virtual bool WithDefaultDeleteAction => true;
    /// <summary>
    /// Whether to show the Delete action to the row or not.
    /// </summary>
    protected virtual bool WithDefaultBulkDeleteAction => true;

    /// <summary>
    /// Default Edit action
    /// </summary>
    protected virtual TrinityAction DefaultEditAction => Make<TrinityAction>("Edit")
        .SetLabel(Localizer["edit"])
        .SetIcon("pi pi-pencil").SetHandleActionUsing((_, records) =>
            TrinityAction.Redirect($"{Configurations.Prefix}/{Name}/edit/{records.First()[PrimaryKeyColumn]}"));

    /// <summary>
    /// Default Record Delete Action
    /// </summary>
    protected virtual TrinityAction DefaultDeleteAction => Make<TrinityAction>("Delete")
            .SetSeverity(ActionSeverity.Danger)
            .SetLabel(Localizer["delete"])
            .SetIcon("pi pi-trash")
            .SetRequiresConfirmation()
            .SetConfirmHeader($"{Localizer["confirm"]}")
            .SetConfirmText($"{Localizer["are_you_sure_to_delete"]}")
            .SetConfirmButtonText($"{Localizer["yes"]}", "pi pi-info-circle", "p-button-danger")
            .SetHandleActionUsing((_, records) =>
            {
                Delete(records).Wait();

                return TrinityAction.Redirect("");
            });


    /// <summary>
    /// Default Bulk Delete Action
    /// </summary>
    protected virtual TrinityAction DefaultBulkDeleteAction => Make<TrinityAction>("BulkDelete")
        .SetSeverity(ActionSeverity.Danger)
        .SetLabel(Localizer["delete"])
        .SetIcon("pi pi-trash")
        .SetRequiresConfirmation()
        .SetConfirmHeader($"{Localizer["confirm"]}")
        .SetConfirmText($"{Localizer["are_you_sure_to_delete_selected_records"]}")
        .SetConfirmButtonText($"{Localizer["yes"]}", "pi pi-info-circle", "p-button-danger")
        .SetHandleActionUsing((_, records) =>
        {
            Delete(records).Wait();

            return TrinityAction.Redirect("");
        });

    /// <inheritdoc />
    public virtual async Task<object> HandleAction(ITrinityAction action, Dictionary<string, object?> form,
        List<string> primaryKeys, List<IDictionary<string, object?>>? records = null)
    {
        records ??= (await ConnectionFactory().Query()
                .From($"{Table} AS t")
                .WhereIn($"t.{PrimaryKeyColumn}", primaryKeys)
                .GetAsync())
            .Cast<IDictionary<string, object?>>()
            .ToList();

        return await action.Handle(form, records);
    }
}