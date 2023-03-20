using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using SqlKata;

namespace AbanoubNassem.Trinity.Components.Interfaces;

public interface ITrinityField
{
    public string ColumnName { get; set; }

    public void Format(Dictionary<string, object?> record);

    public void Fill(ref Dictionary<string, object?> form, IReadOnlyDictionary<string, object?>? oldRecord = null);

    public void SelectQuery(Query query);
    public void SetSelectQueryUsing(Action<Query> query);

    public void FilterQuery(Query query, string globalSearch);
    void SetFilterQueryUsing(Action<Query, string> filter);

    public void PrepareForValidation(IValidator validator, IReadOnlyDictionary<string, object?> form,
        ModelStateDictionary modelState);

    Type GetDeserializationType();
}