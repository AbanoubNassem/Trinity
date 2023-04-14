using SqlKata;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    /// <summary>
    /// Fired before inserting a new record to the Resource table.
    /// </summary>
    /// <param name="form">The given form after validation.</param>
    protected virtual Task BeforeCreate(ref Dictionary<string, object?> form)
    {
        return Task.CompletedTask;
    }

    /// <summary>
    /// Fired after inserting a new record to the Resource table.
    /// </summary>
    /// <param name="form">The validated form used to insert the new record.</param>
    /// <param name="insertedKey">The new inserted record Id.</param>
    protected virtual Task AfterCreate(IReadOnlyDictionary<string, object?> form, TPrimaryKeyType? insertedKey)
    {
        return Task.CompletedTask;
    }

    /// <summary>
    /// Fired before updating the given record with the form.
    /// </summary>
    /// <param name="form">The validated form used to update the record.</param>
    /// <param name="record">The current record in the Database.</param>
    protected virtual Task BeforeUpdate(ref Dictionary<string, object?> form,
        IReadOnlyDictionary<string, object?> record)
    {
        return Task.CompletedTask;
    }

    /// <summary>
    /// Fired after updating the record in the Resource table.
    /// </summary>
    /// <param name="oldRecord">The old record value before update.</param>
    /// <param name="newRecord">the new record value after update.</param>
    protected virtual Task AfterUpdate(IReadOnlyDictionary<string, object?> oldRecord,
        IReadOnlyDictionary<string, object?>? newRecord)
    {
        return Task.CompletedTask;
    }

    /// <summary>
    /// Fired before deleting the given ids from the Resource table.
    /// </summary>
    /// <param name="idsToBeDeleted">The given ids to be deleted.</param>
    protected virtual Task BeforeDelete(ref List<string> idsToBeDeleted)
    {
        return Task.CompletedTask;
    }

    /// <summary>
    /// Fired after deleting the given ids from the Resource table.
    /// </summary>
    /// <param name="deletedIds">The given ids used to delete the records.</param>
    /// <param name="isDeletedSuccessfully">Whether the delete was successful or not.</param>
    protected virtual Task AfterDelete(IReadOnlyList<string> deletedIds, bool isDeletedSuccessfully)
    {
        return Task.CompletedTask;
    }

    /// <summary>
    /// Executes before executing resource index page query.
    /// </summary>
    /// <param name="query">The query being executed.</param>
    protected  virtual void OnIndexQuery(ref Query query)
    {
    }
}