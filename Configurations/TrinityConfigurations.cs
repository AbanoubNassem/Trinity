using System.Data.Common;
using System.Text.Json.Serialization;

namespace AbanoubNassem.Trinity.Configurations;

public class TrinityConfigurations
{
    [JsonIgnore] public Func<DbConnection> ConnectionFactory { get; set; } = null!;
    public string Prefix { get; set; } = "admin";

    public string Title { get; set; } = "Trinity";

    public ProgressConfigurations ProgressSettings { get; set; } = new();
    
    public int MaxPaginationPerPageCount { get; set; } = 250;

    public List<int> RowsPerPageOptions { get; set; } = new() { 10, 50, 150, 250 };

    public ThemeMode ThemeMode { get; set; } = ThemeMode.Light;
}

public class ProgressConfigurations
{
    public int Delay { get; set; } = 250;
    public string Color { get; set; } = "#4F46E5";

    public bool ShowSpinner { get; set; } = true;
}

public enum ThemeMode : byte
{
    Light,
    Dark
}