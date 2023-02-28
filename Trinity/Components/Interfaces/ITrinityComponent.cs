namespace AbanoubNassem.Trinity.Components.Interfaces;

public interface ITrinityComponent
{
    public string ComponentName { get; }
    
    bool Hidden { get; set; }
}