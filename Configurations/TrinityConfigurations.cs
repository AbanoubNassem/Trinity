using System.Data.Common;
using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Concerns;
using Microsoft.AspNetCore.Http;
using StackExchange.Profiling;

namespace AbanoubNassem.Trinity.Configurations;

public class TrinityConfigurations
{
    public delegate Task<LoginConcern?> Authenticate(HttpContext httpContext, string email, string password);

    [JsonIgnore] public Func<DbConnection> ConnectionFactory { get; set; } = null!;

    [JsonIgnore] public Action<MiniProfilerOptions>? MiniProfilerConfigures { get; set; }

    [JsonIgnore] public Authenticate? AuthenticateUser { get; set; }
    public string Prefix { get; set; } = "admin";

    public string Title { get; set; } = "Trinity";

    public ProgressConfigurations ProgressSettings { get; set; } = new();

    public int MaxPaginationPerPageCount { get; set; } = 250;

    public List<int> RowsPerPageOptions { get; set; } = new() { 10, 50, 150, 250 };

    public ThemeMode ThemeMode { get; set; } = ThemeMode.Light;

    public string? WhiteLogo { get; set; }
    public string? DarkLogo { get; set; }
    public string? FavIcon { get; set; }
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