using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Resources;

public abstract partial class TrinityResource
{
    private DateTime _lastTopWidgetsCacheTime = DateTime.Now;
    private DateTime _lastBottomWidgetsCacheTime = DateTime.Now;

    private readonly List<object> _topWidgets = new();

    public List<object> TopWidgets
    {
        get
        {
            if (_topWidgets.Any() &&   _lastTopWidgetsCacheTime.Add(Configurations.CacheWidgetsFor) >= DateTime.Now) return _topWidgets;

            _topWidgets.Clear();
            _topWidgets.AddRange(GetTopWidgets());
            _lastTopWidgetsCacheTime = DateTime.Now;
  
            return _topWidgets;
        }
    }

    protected virtual List<IBaseWidget> GetTopWidgets()
    {
        return new List<IBaseWidget>(0);
    }


    private readonly List<object> _bottomWidgets = new();

    public List<object> BottomWidgets
    {
        get
        {
            if (_bottomWidgets.Any() &&  _lastBottomWidgetsCacheTime.Add(Configurations.CacheWidgetsFor) >= DateTime.Now)
                return _bottomWidgets;

            _bottomWidgets.Clear();
            _bottomWidgets.AddRange(GetBottomWidgets());
            _lastBottomWidgetsCacheTime = DateTime.Now;
            
            return _bottomWidgets;
        }
    }

    protected virtual List<IBaseWidget> GetBottomWidgets()
    {
        return new List<IBaseWidget>(0);
    }
}