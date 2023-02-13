using DapperQueryBuilder;
using FluentValidation;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace AbanoubNassem.Trinity.Components;

public interface IBaseField
{
    public string ColumnName { get; set; }

    public void Format(IDictionary<string, object?> record);

    public void Fill(ref IDictionary<string, object?> form, IReadOnlyDictionary<string, object?>? oldRecord = null);

    public void SelectQuery(FluentQueryBuilder query);

    public void FilterQuery(Filters filters, string globalSearch);

    public void PrepareForValidation(IValidator validator, IReadOnlyDictionary<string, object?> form,
        ModelStateDictionary modelState);
    Type GetDeserializationType();
}