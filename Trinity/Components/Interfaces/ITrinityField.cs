using DapperQueryBuilder;
using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AbanoubNassem.Trinity.Components.Interfaces;

public interface ITrinityField
{
    public string ColumnName { get; set; }

    public void Format(IDictionary<string, object?> record);

    public void Fill(ref IDictionary<string, object?> form, IReadOnlyDictionary<string, object?>? oldRecord = null);

    public void SelectQuery(FluentQueryBuilder query);
    public void SetSelectQueryUsing(Action<FluentQueryBuilder> query);

    public void FilterQuery(Filters filters, string globalSearch);
    void SetFilterQueryUsing(Action<Filters, string> filter);

    public void PrepareForValidation(IValidator validator, IReadOnlyDictionary<string, object?> form,
        ModelStateDictionary modelState);

    Type GetDeserializationType();
}