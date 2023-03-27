using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Components.TrinityAction;
using AbanoubNassem.Trinity.Components.TrinityColumn;

namespace AbanoubNassem.Trinity.Components;

public class TrinityTable
{
    public List<ITrinityColumn> Columns { get; private set; } = new();
    public List<ITrinityWidget> TopWidgets { get; private set; } = new();
    public List<ITrinityWidget> BottomWidgets { get; private set; } = new();
    public List<ITrinityAction> Actions { get; private set; } = new();
    public List<ITrinityAction> BulkActions { get; private set; } = new();

    public TrinityTable SetColumns(List<ITrinityColumn> columns)
    {
        Columns = columns;
        return this;
    }

    public TrinityTable SetActions(List<ITrinityAction> actions)
    {
        Actions = actions;
        return this;
    }

    public TrinityTable SetBulkActions(List<ITrinityAction> actions)
    {
        BulkActions = actions;
        return this;
    }

    public TrinityTable SetTopWidgets(List<ITrinityWidget> topWidgets)
    {
        TopWidgets = topWidgets;
        return this;
    }

    public TrinityTable SetBottomWidgets(List<ITrinityWidget> bottomWidgets)
    {
        BottomWidgets = bottomWidgets;
        return this;
    }
}