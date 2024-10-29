using System.Text.Json;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Utilities;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SqlKata;
using SqlKata.Execution;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource<TPrimaryKeyType>
{
    private TrinityForm? _trinityForm;

    /// <summary>
    /// A reference to the current <see cref="AbanoubNassem.Trinity.Components.TrinityForm"/>
    /// </summary>
    protected TrinityForm TrinityForm => _trinityForm ??= GetTrinityForm();

    /// <summary>
    /// Get the form displayed by the resource.
    /// </summary>
    /// <returns>A new <see cref="AbanoubNassem.Trinity.Components.TrinityForm"/></returns>
    protected virtual TrinityForm GetTrinityForm()
    {
        return new TrinityForm();
    }

    /// <summary>
    /// Get the schema displayed by the resource.
    /// </summary>
    public List<object> Schema =>
        new(TrinityForm.FilterSchema(TrinityForm.Schema, ServiceProvider, IsCreateRequest, IsUpdateRequest));

    // [JsonIgnore] public Dictionary<string, object> Fields => TrinityForm.Fields;

    private readonly Dictionary<string, object> _fields = new();

    /// <summary>
    /// Gets the fields of the form.
    /// </summary>
    /// <value>The fields of the form.</value>
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

    /// <inheritdoc />
    public virtual async Task<IActionResult> GetRelationData()
    {
        if (!Request.Query.TryGetValue("column", out var columnName) ||
            !Fields.TryGetValue(columnName.ToString(), out var objField))
            return new BadRequestResult();

        var field = (IHasRelationship)objField;

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

        using var connection = ConnectionFactory();
        var res = await field.GetAssociatesRelationshipQuery(connection.QueryFactory(), Table!, value, offset, search);

        return new OkObjectResult(res);
    }

    /// <inheritdoc />
    public virtual async Task<Dictionary<string, object?>?> ValidateRequest(
        Dictionary<string, JsonElement>? jsonForm = null, Dictionary<string, object>? fields = null)
    {
        jsonForm ??= await Request.ReadFromJsonAsync<Dictionary<string, JsonElement>>() ??
                     new Dictionary<string, JsonElement>();

        fields ??= Fields;

        var form = new Dictionary<string, object?>();
        foreach (var kv in jsonForm)
        {
            if (!fields.ContainsKey(kv.Key)) continue;
            form.Add(kv.Key,
                kv.Value.ValueKind == JsonValueKind.Null
                    ? null
                    : kv.Value.Deserialize(((ITrinityField)fields[kv.Key]).GetDeserializationType())
            );
        }

        foreach (var field in fields.Values)
        {
            ((ITrinityField)field).PrepareForValidation(ResourceValidator, form, ModelState);
        }

        var validation = await ResourceValidator.ValidateAsync(form);

        if (validation.IsValid && ModelState.IsValid) return form;

        validation.AddToModelState(ModelState);
        TrinityNotifications.NotifyError(Localizer["fix_validation_errors"], Localizer["validation_errors"]);
        return null;
    }


    /// <inheritdoc />
    public virtual async Task<object?> Create()
    {
        var form = await ValidateRequest();
        if (form == null) return form;

        foreach (ITrinityField field in Fields.Values)
        {
            if (!field.IsSavable)
            {
                form.Remove(field.ColumnName);
                continue;
            }

            field.Fill(ref form);

            if (field is not IHasRelationship { HasRelationshipByDefault: true } relationshipField) continue;

            var temp = form[field.ColumnName];
            form.Remove(field.ColumnName);
            form.TryAdd(relationshipField.ColumnName?.Split('.').First()!, temp);
        }

        await BeforeCreate(form);

        using var conn = ConnectionFactory();

        var query = conn.Query().From(Table)
            .AsInsert(form, true);

        OnCreateQuery(ref query);

        var res = await query.FirstOrDefaultAsync<TPrimaryKeyType>();

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


    /// <inheritdoc />
    public virtual async Task<IDictionary<string, object?>?> GetEditData(object? key = null)
    {
        if (key == null && !Request.RouteValues.TryGetValue("id", out key))
            return null;

        using var connection = ConnectionFactory();
        var queryBuilder = connection.Query();

        queryBuilder.Select($"t.{PrimaryKeyColumn}");

        foreach (ITrinityField field in Fields.Values)
        {
            field.SelectQuery(queryBuilder);
        }

        var query = queryBuilder.From($"{Table} AS t")
            .Where($"t.{PrimaryKeyColumn}", key);

        OnIndexQuery(ref query);

        var record = await query.FirstOrDefaultAsync() as IDictionary<string, object?>;

        if (record == null) return null;

        GenerateRecordActions(record);

        foreach (ITrinityField field in Fields.Values)
        {
            if (field is IHasRelationship { HasRelationshipByDefault: true } relationshipField)
            {
                record = (await relationshipField.SelectRelationshipQuery(
                    connection.QueryFactory(),
                    new List<IDictionary<string, object?>>() { record })).Last();
            }

            field.Format(ref record);
        }


        return record;
    }


    /// <inheritdoc />
    public virtual async Task<object?> Update(IDictionary<string, object?>? record)
    {

        if (record == null)
        {
            if (!Request.RouteValues.TryGetValue("id", out var key)) return null;

            ModelState.AddModelError("", Localizer["entity_does_not_exist", PrimaryKeyColumn, key!]);
            TrinityNotifications.NotifyError(Localizer["entity_does_not_exist", PrimaryKeyColumn, key!]);

            return record;
        }


        var form = await ValidateRequest();
        if (form == null) return record;

        await BeforeUpdate(form, (IReadOnlyDictionary<string, object?>)record);

        using var conn = ConnectionFactory();

        var query = conn.Query().From(Table);

        var updates = new Dictionary<string, object?>();

        foreach (ITrinityField field in Fields.Values)
        {
            if (field.ColumnName == PrimaryKeyColumn) continue;

            if (!field.IsSavable)
            {
                form.Remove(field.ColumnName);
                continue;
            }

            field.Fill(ref form, (IReadOnlyDictionary<string, object?>)record);
            if (field is IHasRelationship { HasRelationshipByDefault: true } relationshipField)
                updates.TryAdd(relationshipField.ColumnName?.Split('.').First()!, form[field.ColumnName]);

            else
                updates.TryAdd(field.ColumnName, form[field.ColumnName]);
        }


        var q = query.Where(PrimaryKeyColumn, record[PrimaryKeyColumn]).AsUpdate(updates);

        OnUpdateQuery(ref q);

        var c = q.GetOneComponent<InsertClause>("update");

        var res = await q.UpdateAsync(c.Columns.Select((_, i) =>
            new KeyValuePair<string, object>(c.Columns[i], c.Values[i]))
        );

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