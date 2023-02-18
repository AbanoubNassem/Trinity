namespace AbanoubNassem.Trinity.Components.Interfaces;

public interface IBaseComponent
{
    public string ComponentName { get; }
    
    bool Hidden { get; set; }
}