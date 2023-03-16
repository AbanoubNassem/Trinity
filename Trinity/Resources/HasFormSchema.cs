using System.Text.Json;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Utilities;
using DapperQueryBuilder;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource
{
    private readonly Dictionary<string, object> _fields = new();

    public virtual async Task Setup()
    {
        await Task.CompletedTask;
    }

    protected abstract List<IFormComponent> GetFormSchema();

    public List<object> Schema => new(GetFormSchema());

    [JsonIgnore]
    public Dictionary<string, object> Fields
    {
        get
        {
            if (_fields.Count != 0) return _fields;

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
        // query.From($"{Table!.Split('.').Last():raw}");

        using var connection = ConnectionFactory();
        var res = await field.GetAssociatesRelationshipQuery(connection, value, offset, search);

        return new OkObjectResult(res);
    }

    private async Task<IDictionary<string, object?>?> ValidateRequest()
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

    public async Task<object?> Create()
    {
        var form = await ValidateRequest();
        if (form == null) return form;

        foreach (var field in Fields.Values)
        {
            ((ITrinityField)field).Fill(ref form);
        }

        using var conn = ConnectionFactory();


        var cmd = conn.CommandBuilder(
            $@"INSERT INTO {Table:raw} ({string.Join(',', form.Keys):raw}) VALUES {form.Values} {conn.GetLastInsertedId(PrimaryKeyColumn):raw}"
        );

        var res = await cmd.ExecuteScalarAsync();

        if (res != null)
        {
            TrinityNotifications.NotifySuccess(Localizer["new_record_added"]);
        }
        else
        {
            TrinityNotifications.NotifyError(Localizer["something_went_wrong"]);
            return null;
        }

        return res;
    }

    public async Task<object?> GetEditData()
    {
        if (!Request.RouteValues.TryGetValue("id", out var key))
            return null;

        using var connection = ConnectionFactory();
        var queryBuilder = (FluentQueryBuilder)connection.FluentQueryBuilder();

        queryBuilder.Select($"{PrimaryKeyColumn:raw}");

        foreach (ITrinityField field in Fields.Values)
        {
            field.SelectQuery(queryBuilder);
        }

        var record = (IDictionary<string, object>?)await queryBuilder.From($"{Table:raw} t")
            .Where($"{PrimaryKeyColumn:raw} = {key}")
            .QuerySingleOrDefaultAsync();

        if (record == null) return record;

        foreach (ITrinityField field in Fields.Values)
        {
            if (field is IHasRelationship { HasRelationshipByDefault: true } relationshipField)
            {
                record = (await relationshipField.SelectRelationshipQuery(
                    (FluentQueryBuilder)connection.FluentQueryBuilder(),
                    new List<IDictionary<string, object?>>() { record! })).Last()!;
            }
        }


        return record;
    }

    public async Task<object?> Update()
    {
        var record = (IDictionary<string, object?>?)await GetEditData();

        if (record == null)
        {
            if (!Request.RouteValues.TryGetValue("id", out var key)) return null;

            ModelState.AddModelError("", Localizer["entity_does_not_exist", PrimaryKeyColumn, key!]);
            TrinityNotifications.NotifyError(Localizer["entity_does_not_exist", PrimaryKeyColumn, key!]);

            return record;
        }


        var form = await ValidateRequest();
        if (form == null) return record;

        using var conn = ConnectionFactory();

        var cmd = conn.CommandBuilder(
            $@"UPDATE {Table:raw} SET "
        );

        for (var i = 0; i < form.Count; i++)
        {
            var field = (ITrinityField)Fields[form.ElementAt(i).Key];
            if (field.ColumnName == PrimaryKeyColumn) continue;

            field.Fill(ref form, (IReadOnlyDictionary<string, object?>?)record);
            if (field is IHasRelationship { HasRelationshipByDefault: true } relationshipField)
                cmd.Append($@"{relationshipField.ForeignColumn?.Split('.').Last():raw} = {form[field.ColumnName]}");
            else
                cmd.Append($@"{field.ColumnName:raw} = {form[field.ColumnName]}");
            if (i < form.Count - 1)
                cmd.Append($",");
        }

        cmd.Append($"WHERE {PrimaryKeyColumn:raw} = {record[PrimaryKeyColumn]}");

        var res = await cmd.ExecuteScalarAsync<int>();

        if (res == 0)
        {
            TrinityNotifications.NotifySuccess(Localizer["record_updated"]);
        }
        else
        {
            TrinityNotifications.NotifyError(Localizer["record_not_updated"]);
        }

        return await GetEditData();
    }
}