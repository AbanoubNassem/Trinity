namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    protected virtual Task BeforeCreate(ref Dictionary<string, object?> form)
    {
        return Task.CompletedTask;
    }

    protected virtual Task AfterCreate(IReadOnlyDictionary<string, object?> form, TPrimaryKeyType? insertedKey)
    {
        return Task.CompletedTask;
    }

    protected virtual Task BeforeUpdate(ref Dictionary<string, object?> form,
        IReadOnlyDictionary<string, object?> record)
    {
        return Task.CompletedTask;
    }

    protected virtual Task AfterUpdate(IReadOnlyDictionary<string, object?> oldRecord,
        IReadOnlyDictionary<string, object?>? newRecord)
    {
        return Task.CompletedTask;
    }

    protected virtual Task BeforeDelete(ref List<string> idsToBeDeleted)
    {
        return Task.CompletedTask;
    }

    protected virtual Task AfterDelete(IReadOnlyList<string> deletedIds, bool isDeletedSuccessfully)
    {
        return Task.CompletedTask;
    }
}