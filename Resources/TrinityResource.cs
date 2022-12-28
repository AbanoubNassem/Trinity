using System.Data;
using System.Text.Json;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Extensions;
using AbanoubNassem.Trinity.Fields;
using AbanoubNassem.Trinity.RequestHelpers;
using AbanoubNassem.Trinity.Utilities;
using AbanoubNassem.Trinity.Validators;
using DapperQueryBuilder;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Resources;

public abstract class TrinityResource
{
    protected TrinityConfigurations Configurations { get; init; } = null!;

    protected IServiceProvider ServiceProvider { get; init; } = null!;
    protected HttpRequest Request { get; init; } = null!;

    protected HttpResponse Response { get; init; } = null!;
    protected ILogger Logger { get; init; } = null!;

    protected ModelStateDictionary ModelState { get; init; } = null!;
    protected ResourceValidator ResourceValidator { get; } = new();
    [JsonIgnore] protected Func<IDbConnection> ConnectionFactory { get; init; } = null!;

    public string Name { get; init; } = null!;

    private string? _label = null;
    public virtual string? Label => _label;

    private string? _pluralLabel = null;
    public virtual string? PluralLabel => _pluralLabel;
    public virtual bool ShowGridlines => false;
    public virtual bool StripedRows => false;
    public virtual string? Icon => null;

    public virtual string PrimaryKeyColumn => "id";

    private string? _table = null;
    [JsonIgnore] public virtual string? Table => _table;

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

    public abstract List<IBaseComponent> GetSchema();

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

    public virtual async Task<IPaginator?> GetIndexData()
    {
        try
        {
            var page = int.Parse(Request.Query["page"].FirstOrDefault() ?? "1");
            var perPage = int.Parse(Request.Query["perPage"].FirstOrDefault() ?? "10");
            if (perPage > Configurations.MaxPaginationPerPageCount)
            {
                perPage = Configurations.MaxPaginationPerPageCount;
            }

            List<Sort>? sorts = null;

            if (Request.Query.TryGetValue("sort", out var sortStr) && !string.IsNullOrEmpty(sortStr))
            {
                sorts = JsonSerializer.Deserialize<List<Sort>>(sortStr!, new JsonSerializerOptions()
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            }

            Dictionary<string, string>? requestFilters = null;

            if (Request.Query.TryGetValue("columnsSearch", out var filtersStr) && !string.IsNullOrEmpty(filtersStr))
            {
                requestFilters = JsonSerializer.Deserialize<Dictionary<string, string>>(filtersStr!,
                    new JsonSerializerOptions()
                    {
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    });
            }

            string? globalSearch = null;
            var filters = new Filters(Filters.FiltersType.OR);
            var countFilters = new Filters(Filters.FiltersType.OR);
            if (Request.Query.TryGetValue("globalSearch", out var globalSearchStr) &&
                !string.IsNullOrEmpty(globalSearchStr))
            {
                globalSearch = $@"%{globalSearchStr.ToString().ToLower()}%";
            }


            using var conn = ConnectionFactory();

            var query = (FluentQueryBuilder)conn.FluentQueryBuilder();
            var countQuery = (FluentQueryBuilder)conn.FluentQueryBuilder();

            countQuery
                .Select($"COUNT(*)")
                .From($"{Table:raw} AS t");

            query.From($"{Table:raw} AS t");

            query.Select($"t.{PrimaryKeyColumn:raw}");

            foreach (IBaseField field in Fields.Values)
            {
                field.SelectQuery(query);

                if (globalSearch != null && field.IsGloballySearchable)
                {
                    field.FilterQuery(countFilters, globalSearch);
                    field.FilterQuery(filters, globalSearch);
                }
                else if (requestFilters != null && requestFilters.ContainsKey(field.ColumnName))
                {
                    var search = $@"%{requestFilters[field.ColumnName].ToLower()}%";

                    field.FilterQuery(countFilters, search);
                    field.FilterQuery(filters, search);
                }
            }

            if (filters.Any())
            {
                countQuery.Where(countFilters);
                query.Where(filters);
            }

            if (sorts != null)
            {
                foreach (var sort in sorts)
                {
                    if (!Fields.TryGetValue(sort.Field, out var field) || field is IHasRelationshipField) continue;

                    var direction = sort.Order == 1 ? "ASC" : "DESC";

                    query.OrderBy($"t.{sort.Field:raw} {direction:raw}");
                }
            }


            var count = await countQuery.QuerySingleAsync<int>();

            var result = (await query.Limit((page - 1) * perPage, perPage).QueryAsync())
                .Cast<IDictionary<string, object?>>().ToList();

            if (result.Any())
            {
                foreach (IBaseField filed in Fields.Values)
                {
                    if (filed is not IHasRelationshipField field) continue;
                    result = await field.RunRelationQuery((FluentQueryBuilder)conn.FluentQueryBuilder(), result,
                        sorts?.SingleOrDefault(x => x.Field == field.ColumnName)
                    );
                }
            }

            foreach (var record in result)
            {
                foreach (IBaseField field in Fields.Values)
                {
                    field.Format(record);
                }
            }


            return new Pagination
            {
                TotalCount = count,
                Data = result,
                CurrentPage = page,
                PerPage = perPage,
                TotalPages = (int)Math.Ceiling(count / (double)perPage)
            };
        }
        catch (Exception ex)
        {
            // ReSharper disable once TemplateIsNotCompileTimeConstantProblem
            Logger.LogError(ex, ex.Message);
            throw;
        }
    }

    public virtual async Task<IActionResult> GetRelationData()
    {
        if (!Request.Query.TryGetValue("column", out var columnName) ||
            !Fields.TryGetValue(columnName.ToString(), out var objField))
            return new BadRequestResult();

        var field = (IHasRelationshipField)objField;

        string? search = null;
        if (Request.Query.TryGetValue("search", out var searchStrings) && !string.IsNullOrEmpty(searchStrings[0]))
        {
            search = $"%{searchStrings[0]!.ToLower()}%";
        }

        var query = (FluentQueryBuilder)ConnectionFactory().FluentQueryBuilder();

        // query.From($"{Table!.Split('.').Last():raw}");

        var res = await field.RelationshipQuery(query, search);

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

        var queryBuilder = (FluentQueryBuilder)ConnectionFactory().FluentQueryBuilder();
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
            if (filed is not IHasRelationshipField field) continue;
            record = (await field.RunRelationQuery((FluentQueryBuilder)ConnectionFactory().FluentQueryBuilder(),
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

            field.Fill(ref form);
            record[field.ColumnName] = form[field.ColumnName];
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

        return record;
    }

    public async Task<object?> Delete()
    {
        return Task.CompletedTask;
    }
}