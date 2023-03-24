namespace AbanoubNassem.Trinity.Components.Interfaces;

public interface ITrinityComponent
{
    public string ComponentName { get; }

    public bool Hidden { get; set; }

    public void Init(IServiceProvider serviceProvider);

    public void Setup();
}