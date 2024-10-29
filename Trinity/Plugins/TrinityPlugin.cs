namespace AbanoubNassem.Trinity.Plugins;

/// <summary>
/// Represents the base class for all plugins in the Trinity application.
/// </summary>
public abstract class TrinityPlugin
{
    /// <summary>
    /// Gets the list of script sources associated with the plugin.
    /// </summary>
    /// <returns>A list of script sources associated with the plugin.</returns>
    public virtual List<string> GetScriptSources()
    {
        return new List<string>(0);
    }

    /// <summary>
    /// Gets the list of style sources associated with the plugin.
    /// </summary>
    /// <returns>A list of style sources associated with the plugin.</returns>
    public virtual List<string> GetStyleSources()
    {
        return new List<string>(0);
    }
}