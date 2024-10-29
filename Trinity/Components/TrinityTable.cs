using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Components;

/// <summary>
/// Represents a table in the Trinity application.
/// </summary>
public class TrinityTable
{
    /// <summary>
    /// Gets or sets the list of columns in the table.
    /// </summary>
    public List<ITrinityColumn> Columns { get; private set; } = new();

    /// <summary>
    /// Gets or sets the list of widgets displayed at the top of the table.
    /// </summary>
    public List<ITrinityWidget> TopWidgets { get; private set; } = new();

    /// <summary>
    /// Gets or sets the list of widgets displayed at the bottom of the table.
    /// </summary>
    public List<ITrinityWidget> BottomWidgets { get; private set; } = new();

    /// <summary>
    /// Gets or sets the list of actions available for each row in the table.
    /// </summary>
    public List<ITrinityAction> Actions { get; private set; } = new();

    /// <summary>
    /// Gets or sets the list of bulk actions available for multiple rows in the table.
    /// </summary>
    public List<ITrinityAction> BulkActions { get; private set; } = new();

    /// <summary>
    /// Sets the list of columns in the table.
    /// </summary>
    /// <param name="columns">The list of columns to set.</param>
    /// <returns>The <see cref="TrinityTable"/> instance.</returns>
    public TrinityTable SetColumns(List<ITrinityColumn> columns)
    {
        Columns = columns;
        return this;
    }

    /// <summary>
    /// Sets the list of actions available for each row in the table.
    /// </summary>
    /// <param name="actions">The list of actions to set.</param>
    /// <returns>The <see cref="TrinityTable"/> instance.</returns>
    public TrinityTable SetActions(List<ITrinityAction> actions)
    {
        Actions = actions;
        return this;
    }

    /// <summary>
    /// Sets the list of bulk actions available for multiple rows in the table.
    /// </summary>
    /// <param name="actions">The list of bulk actions to set.</param>
    /// <returns>The <see cref="TrinityTable"/> instance.</returns>
    public TrinityTable SetBulkActions(List<ITrinityAction> actions)
    {
        BulkActions = actions;
        return this;
    }

    /// <summary>
    /// Sets the list of widgets displayed at the top of the table.
    /// </summary>
    /// <param name="topWidgets">The list of widgets to set.</param>
    /// <returns>The <see cref="TrinityTable"/> instance.</returns>
    public TrinityTable SetTopWidgets(List<ITrinityWidget> topWidgets)
    {
        TopWidgets = topWidgets;
        return this;
    }

    /// <summary>
    /// Sets the list of widgets displayed at the bottom of the table.
    /// </summary>
    /// <param name="bottomWidgets">The list of widgets to set.</param>
    /// <returns>The <see cref="TrinityTable"/> instance.</returns>
    public TrinityTable SetBottomWidgets(List<ITrinityWidget> bottomWidgets)
    {
        BottomWidgets = bottomWidgets;
        return this;
    }
}