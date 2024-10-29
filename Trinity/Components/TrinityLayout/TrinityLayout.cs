using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components.TrinityLayout;

/// <summary>
/// Defines an abstract class for a Trinity layout component that inherits from TrinityComponent, implements ITrinityLayout, and IFormComponent.
/// </summary>
/// <typeparam name="T">The type of the Trinity layout component.</typeparam>
public abstract class TrinityLayout<T> : TrinityComponent<T, object?>, ITrinityLayout, IFormComponent
    where T : TrinityLayout<T>
{
    /// <summary>
    /// Initializes a new instance of the TrinityLayout class with the specified schema and number of columns to span to.
    /// </summary>
    /// <param name="schema">The schema of the Trinity layout component.</param>
    /// <param name="columns">The number of columns in the Trinity layout component can span to.</param>
    protected TrinityLayout(List<IFormComponent> schema, int? columns = null)
    {
        Schema = new(schema);
        Columns = columns;
    }

    /// <summary>
    /// Gets or sets the column span of the layout.
    /// </summary>
    public override int ColumnSpan { get; protected set; } = 12;

    /// <inheritdoc />
    public override string Type => "Layout";

    /// <inheritdoc />
    public List<object>? Schema { get; set; }

    /// <summary>
    /// Sets the schema of the layout component and returns the layout.
    /// </summary>
    /// <param name="schema">The schema of the layout component.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> layout.</returns>
    public T SetSchema(List<IFormComponent> schema)
    {
        Schema = new(schema);
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets The number of columns in the Trinity layout component can span to.
    /// </summary>
    public int? Columns { get; protected set; }

    /// <summary>
    /// Sets The number of columns in the Trinity layout component can span to.
    /// </summary>
    /// <param name="columns">The number of columns in the Trinity layout component can span to.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> layout.</returns>
    public T SetColumns(int columns)
    {
        Columns = columns;
        return (this as T)!;
    }
}