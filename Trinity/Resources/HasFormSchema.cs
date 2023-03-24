using System.Text.Json;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Utilities;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    public virtual async Task Setup()
    {
        await Task.CompletedTask;
    }

    protected abstract List<IFormComponent> GetFormSchema();

    protected virtual List<object> FilterSchema(IEnumerable<object>? schema)
    {
        if (schema == null) return new List<object>();

        var filtered = schema.Select(x =>
        {
            var component = (ITrinityComponent)x;
            
            component.Init(ServiceProvider);
            component.Setup();

            if (component.Hidden)
            {
                return null;
            }

            if (x is ITrinityLayout layout)
            {
                layout.Schema = FilterSchema(layout.Schema);
                return layout;
            }


            if (x is not ITrinityField field) return x;

            if (
                field is { OnlyOnCreate: false, OnlyOnUpdate: false } ||
                (!IsCreateRequest && !IsUpdateRequest) ||
                (IsCreateRequest && field.OnlyOnCreate) ||
                (IsUpdateRequest && field.OnlyOnUpdate))
            {
                return x;
            }


            return null;
        }).Where(x => x != null);

        return filtered.ToList()!;
    }

    public List<object> Schema => new(FilterSchema(GetFormSchema()));

    private readonly Dictionary<string, object> _fields = new();

    [JsonIgnore]
    public Dictionary<string, object> Fields
    {
        get
        {
            if (_fields.Any()) return _fields;

            foreach (var field in Schema)
            {
                TrinityUtils.GetInnerFields(in _fields, (ITrinityComponent)field);
            }

            return _fields;
        }
    }

    public virtual async Task<IActionResult> GetRelationData()
    {
        if (!Request.Query.TryGetValue("column", out var columnName) ||
            !Fields.TryGetValue(columnName.ToString(), out var objField))
            return new BadRequestResult();

        var field = (IHasRelationship)objField;
        
        ((ITrinityComponent)field).Init(ServiceProvider);
        
        string? search = null;
        if (Request.Query.TryGetValue("search", out var searchStrings) && !string.IsNullOrEmpty(searchStrings[0]))
        {
            search = $"%{searchStrings[0]!.ToLower()}%";
        }

        var offset = 1;
        if (Request.Query.TryGetValue("offset", out var offsetStr) && !string.IsNullOrEmpty(offsetStr[0]))
        {
            if (int.TryParse(offsetStr[0], out offset)) offset = 1;
        }

        string? value = null;
        if (Request.Query.TryGetValue("value", out var valueStr) && !string.IsNullOrEmpty(valueStr[0]))
        {
            value = valueStr[0];
        }
        // query.From($"{Table!.Split('.').Last()}");

        using var connection = ConnectionFactory();
        var res = await field.GetAssociatesRelationshipQuery(connection.QueryFactory(), value, offset, search);

        return new OkObjectResult(res);
    }

    protected virtual async Task<Dictionary<string, object?>?> ValidateRequest()
    {
        var jsonForm = await Request.ReadFromJsonAsync<Dictionary<string, JsonElement>>() ??
                       new Dictionary<string, JsonElement>();

        var form = new Dictionary<string, object?>();
        foreach (var kv in jsonForm)
        {
            if (!Fields.ContainsKey(kv.Key)) continue;
            form.Add(kv.Key,
                kv.Value.ValueKind == JsonValueKind.Null
                    ? null
                    : kv.Value.Deserialize(((ITrinityField)Fields[kv.Key]).GetDeserializationType())
            );
        }

        foreach (var field in Fields.Values)
        {
            ((ITrinityField)field).PrepareForValidation(ResourceValidator, form, ModelState);
        }

        var validation = await ResourceValidator.ValidateAsync(form);

        if (validation.IsValid && ModelState.IsValid) return form;

        validation.AddToModelState(ModelState);
        TrinityNotifications.NotifyError(Localizer["fix_validation_errors"], Localizer["validation_errors"]);
        return null;
    }


    public virtual async Task<object?> Create()
    {
        var form = await ValidateRequest();
        if (form == null) return form;

        foreach (ITrinityField field in Fields.Values)
        {
            field.Fill(ref form);

            if (field is not IHasRelationship { HasRelationshipByDefault: true } relationshipField) continue;

            var temp = form[field.ColumnName];
            form.Remove(field.ColumnName);
            form.TryAdd(relationshipField.ForeignColumn?.Split('.').First()!, temp);
        }

        await BeforeCreate(ref form);

        using var conn = ConnectionFactory();


        var res = await conn.Query().From(Table)
            .InsertGetIdAsync<TPrimaryKeyType>(form);

        if (res != null)
        {
            TrinityNotifications.NotifySuccess(Localizer["new_record_added"]);
        }
        else
        {
            TrinityNotifications.NotifyError(Localizer["something_went_wrong"]);
            return null;
        }

        await AfterCreate(form, res);

        return res;
    }


    public virtual async Task<IDictionary<string, object?>?> GetEditData()
    {
        if (!Request.RouteValues.TryGetValue("id", out var key))
            return null;

        using var connection = ConnectionFactory();
        var queryBuilder = connection.Query();

        queryBuilder.Select($"{PrimaryKeyColumn}");

        foreach (ITrinityField field in Fields.Values)
        {
            field.SelectQuery(queryBuilder);
        }

        var record = await queryBuilder.From($"{Table} AS t")
            .Where($"t.{PrimaryKeyColumn}", key)
            .FirstOrDefaultAsync();

        if (record == null) return record;

        foreach (ITrinityField field in Fields.Values)
        {
            if (field is IHasRelationship { HasRelationshipByDefault: true } relationshipField)
            {
                record = (await relationshipField.SelectRelationshipQuery(
                    connection.QueryFactory(),
                    new List<IDictionary<string, object?>>() { record })).Last();
            }
        }


        return record;
    }


    public virtual async Task<object?> Update()
    {
        var record = await GetEditData();

        if (record == null)
        {
            if (!Request.RouteValues.TryGetValue("id", out var key)) return null;

            ModelState.AddModelError("", Localizer["entity_does_not_exist", PrimaryKeyColumn, key!]);
            TrinityNotifications.NotifyError(Localizer["entity_does_not_exist", PrimaryKeyColumn, key!]);

            return record;
        }


        var form = await ValidateRequest();
        if (form == null) return record;

        await BeforeUpdate(ref form, (IReadOnlyDictionary<string, object?>)record);

        using var conn = ConnectionFactory();

        var query = conn.Query().From(Table);

        var updates = new Dictionary<string, object?>();

        for (var i = 0; i < form.Count; i++)
        {
            var field = (ITrinityField)Fields[form.ElementAt(i).Key];
            if (field.ColumnName == PrimaryKeyColumn) continue;

            field.Fill(ref form, (IReadOnlyDictionary<string, object?>)record);
            if (field is IHasRelationship { HasRelationshipByDefault: true } relationshipField)
                updates.TryAdd(relationshipField.ForeignColumn?.Split('.').First()!, form[field.ColumnName]);

            else
                updates.TryAdd(field.ColumnName, form[field.ColumnName]);
        }


        var res = await query.Where(PrimaryKeyColumn, record[PrimaryKeyColumn]).UpdateAsync(updates);

        if (res > 0)
        {
            TrinityNotifications.NotifySuccess(Localizer["record_updated"]);
        }
        else
        {
            TrinityNotifications.NotifyError(Localizer["record_not_updated"]);
        }

        var newRecord = await GetEditData();

        await AfterUpdate((IReadOnlyDictionary<string, object?>)record,
            (IReadOnlyDictionary<string, object?>?)newRecord);

        return newRecord;
    }
}