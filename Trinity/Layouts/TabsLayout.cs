using AbanoubNassem.Trinity.Components.BaseLayout;
using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Layouts;

public class Tab : BaseLayout<Tab>
{
    public override string ComponentName => "TabLayout";

    public Tab(string label, IFormComponent[] schema, int columns = 0) : base(schema, columns)
    {
        SetLabel(label);
    }
}

public class TabsLayout : BaseLayout<TabsLayout>
{
    public override string ComponentName => "TabsLayout";

    public TabsLayout(IEnumerable<Tab> tabs, int columns = 0) : base(tabs, columns)
    {
    }

    public int ActiveTabIndex { get; protected set; }

    public TabsLayout SetActiveTabIndex(int activeTabIndex)
    {
        ActiveTabIndex = activeTabIndex;
        return this;
    }

    public bool Scrollable { get; protected set; }

    public TabsLayout SetAsScrollable(bool scrollable = true)
    {
        Scrollable = scrollable;
        return this;
    }
}