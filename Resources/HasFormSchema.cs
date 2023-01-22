using System.Text.Json;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Components.BaseField;
using AbanoubNassem.Trinity.Components.BaseLayout;
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

    private readonly List<object> _schema = new();

    public virtual async Task Setup()
    {
        if (_fields.Count == 0)
        {
            foreach (var field in Schema)
            {
                GetInnerFields((IBaseComponent)field);
            }
        }

        await Task.CompletedTask;
    }

    public abstract List<IFormComponent> GetSchema();

    public List<object> Schema
    {
        get
        {
            if (_schema.Count != 0) return _schema;

            foreach (var component in GetSchema())
            {
                _schema.Add(component);
            }

            return _schema;
        }
    }

    [JsonIgnore] public Dictionary<string, object> Fields => _fields;

    private void GetInnerFields(IBaseComponent component)
    {
        switch (component)
        {
            case IBaseField baseField:
                baseField.AddValidator(ResourceValidator);
                _fields.TryAdd(baseField.ColumnName, baseField);
                break;
            case IBaseLayout baseLayout:
            {
                foreach (var innerComponent in baseLayout.Schema)
                {
                    GetInnerFields((IBaseComponent)innerComponent);
                }

                break;
            }
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
        var res = await field.RelationshipQuery(connection, value, offset, search);

        return new OkObjectResult(res);
    }

    private async Task<IDictionary<string, object?>?> ValidateRequest()
    {
        foreach (var field in Fields.Values)
        {
            ((IBaseField)field).Validate();
        }

        var jsonForm = await Request.ReadFromJsonAsync<Dictionary<string, JsonElement>>() ??
                       new Dictionary<string, JsonElement>();


        IDictionary<string, object?> form = new Dictionary<string, object?>();
        foreach (var kv in jsonForm)
        {
            if (!_fields.ContainsKey(kv.Key)) continue;
            form.Add(kv.Key,
                kv.Value.ValueKind == JsonValueKind.Null
                    ? null
                    : kv.Value.Deserialize(((IBaseField)_fields[kv.Key]).GetDeserializationType())
            );
        }


        var validation = await ResourceValidator.ValidateAsync(form);

        if (validation.IsValid) return form;

        validation.AddToModelState(ModelState);
        TrinityNotifications.NotifyError("Please correct the validation errors.", "Validation Errors!");
        return null;
    }

    public async Task<object?> Create()
    {
        var form = await ValidateRequest();
        if (form == null) return form;

        foreach (var field in Fields.Values)
        {
            ((IBaseField)field).Fill(ref form);
        }

        using var conn = ConnectionFactory();


        var cmd = conn.CommandBuilder(
            $@"INSERT INTO {Table:raw} ({string.Join(',', form.Keys):raw}) VALUES {form.Values} {conn.GetLastInsertedId(PrimaryKeyColumn):raw}"
        );

        var res = await cmd.ExecuteScalarAsync();

        if (res != null)
        {
            TrinityNotifications.NotifySuccess("A new record was added successfully!");
        }
        else
        {
            TrinityNotifications.NotifyError("Something wrong happened please try again.");
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

        foreach (IBaseField field in _fields.Values)
        {
            field.SelectQuery(queryBuilder);
        }

        var record = (IDictionary<string, object>?)await queryBuilder.From($"{Table:raw} t")
            .Where($"{PrimaryKeyColumn:raw} = {key}")
            .QuerySingleOrDefaultAsync();

        if (record == null) return record;

        foreach (IBaseField filed in Fields.Values)
        {
            if (filed is not IHasRelationship field) continue;

            record = (await field.RunRelationQuery((FluentQueryBuilder)connection.FluentQueryBuilder(),
                new List<IDictionary<string, object?>>() { record! })).Last()!;
        }


        return record;
    }

    public async Task<object?> Update()
    {
        var record = (IDictionary<string, object?>?)await GetEditData();

        if (record == null)
        {
            if (!Request.RouteValues.TryGetValue("id", out var key)) return record;

            ModelState.AddModelError("", $"The entity with {PrimaryKeyColumn}={key} doesn't exist.");
            TrinityNotifications.NotifyError($"The entity with {PrimaryKeyColumn}={key} doesn't exist.");

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
            var field = (IBaseField)_fields[form.ElementAt(i).Key];
            if (field.ColumnName == PrimaryKeyColumn) continue;

            field.Fill(ref form, record);
            if (field is IHasRelationship relationshipField)
                cmd.Append($@"{relationshipField.ForeignColumn.Split('.').Last():raw} = {form[field.ColumnName]}");
            else
                cmd.Append($@"{field.ColumnName:raw} = {form[field.ColumnName]}");
            if (i < form.Count - 1)
                cmd.Append($",");
        }

        cmd.Append($"WHERE {PrimaryKeyColumn:raw} = {record[PrimaryKeyColumn]}");

        var res = await cmd.ExecuteScalarAsync<int>();

        if (res == 0)
        {
            TrinityNotifications.NotifySuccess("The record updated successfully!");
        }
        else
        {
            TrinityNotifications.NotifyError("Something went wrong while updating the record!");
        }

        return await GetEditData();
    }
}