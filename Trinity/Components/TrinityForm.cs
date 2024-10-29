using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components;

/// <summary>
/// Represents a form component used to build and manage forms.
/// </summary>
public class TrinityForm
{
    /// <summary>
    /// Gets or sets the schema of the form.
    /// </summary>
    /// <value>The schema of the form.</value>
    public List<IFormComponent> Schema { get; private set; } = new();

    /// <summary>
    /// Sets the schema of the form.
    /// </summary>
    /// <param name="schema">The schema of the form.</param>
    /// <returns>The current instance of the <see cref="TrinityForm"/> class.</returns>
    public TrinityForm SetSchema(List<IFormComponent> schema)
    {
        Schema = schema;
        return this;
    }
    

    /// <summary>
    /// Filters the schema of the form based on the create and update requests.
    /// </summary>
    /// <param name="schema">The schema of the form to filter.</param>
    /// <param name="serviceProvider">The service provider.</param>
    /// <param name="isCreateRequest">True if the request is a create request, otherwise false.</param>
    /// <param name="isUpdateRequest">True if the request is an update request, otherwise false.</param>
    /// <returns>A filtered schema of the form.</returns>
    public static List<object> FilterSchema(IEnumerable<object>? schema, IServiceProvider serviceProvider,
        bool isCreateRequest = false, bool isUpdateRequest = false)
    {
        if (schema == null) return new List<object>();

        var filtered = schema.Select(x =>
        {
            if (x is ITrinityLayout layout)
            {
                layout.Schema = FilterSchema(layout.Schema, serviceProvider, isCreateRequest, isUpdateRequest);
                return layout;
            }


            if (x is not ITrinityField field) return x;

            if (
                field is { OnlyOnCreate: false, OnlyOnUpdate: false } ||
                (!isCreateRequest && !isUpdateRequest) ||
                (isCreateRequest && field.OnlyOnCreate) ||
                (isUpdateRequest && field.OnlyOnUpdate))
            {
                return x;
            }


            return null;
        }).Where(x => x != null);

        return filtered.ToList()!;
    }
}