using System.Data;
using System.Text.Json.Serialization;

namespace AbanoubNassem.Trinity.Configurations;

public class TrinityConfigurations
{
    [JsonIgnore] public Func<IDbConnection> ConnectionFactory { get; set; } = null!;
    public string Prefix { get; set; } = "admin";

    public string Title { get; set; } = "Trinity";

    public ProgressConfigurations ProgressSettings { get; set; } = new();

    public ThemeMode ThemeMode { get; set; } = ThemeMode.Light;
}

public class ProgressConfigurations
{
    public int Delay { get; set; } = 250;
    public string Color { get; set; } = "#29d";

    public bool ShowSpinner { get; set; } = true;
}

public enum ThemeMode : byte
{
    Light,
    Dark
}