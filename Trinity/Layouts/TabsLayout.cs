using AbanoubNassem.Trinity.Components.TrinityLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

/// <summary>
/// A layout that arranges form components in a tab format.
/// </summary>
public class Tab : TrinityLayout<Tab>
{
    /// <inheritdoc />
    public override string ComponentName => "TabLayout";

    /// <inheritdoc />
    public Tab(string label, List<IFormComponent> schema, int columns = 0) : base(schema, columns)
    {
        SetLabel(label);
    }
}

/// <summary>
/// A layout that arranges form components in a set of tabs.
/// </summary>
public class TabsLayout : TrinityLayout<TabsLayout>
{
    /// <inheritdoc />
    public override string ComponentName => "TabsLayout";

    /// <inheritdoc />
    public TabsLayout(List<Tab> tabs, int columns = 0) : base(new(tabs), columns)
    {
    }

    /// <summary>
    /// Gets or sets the index of the active tab.
    /// </summary>
    public int ActiveTabIndex { get; protected set; }

    /// <summary>
    /// Sets the index of the active tab and returns the layout.
    /// </summary>
    /// <param name="activeTabIndex">The index of the tab to set as active.</param>
    /// <returns>The current instance of the <see cref="TabsLayout"/> class.</returns>
    public TabsLayout SetActiveTabIndex(int activeTabIndex)
    {
        ActiveTabIndex = activeTabIndex;
        return this;
    }

    /// <summary>
    /// Gets or sets a value indicating whether the tabs header are scrollable.
    /// </summary>
    public bool Scrollable { get; protected set; }

    /// <summary>
    /// Sets the layout to be scrollable or not and returns the layout.
    /// </summary>
    /// <param name="scrollable">A value indicating whether the tabs header should be scrollable.</param>
    /// <returns>The current instance of the <see cref="TabsLayout"/> class.</returns>
    public TabsLayout SetAsScrollable(bool scrollable = true)
    {
        Scrollable = scrollable;
        return this;
    }
}