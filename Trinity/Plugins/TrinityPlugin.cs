namespace AbanoubNassem.Trinity.Plugins;

public abstract class TrinityPlugin
{
    public virtual List<string> GetScriptSources()
    {
        return new List<string>(0);
    }

    public virtual List<string> GetStyleSources()
    {
        return new List<string>(0);
    }
}