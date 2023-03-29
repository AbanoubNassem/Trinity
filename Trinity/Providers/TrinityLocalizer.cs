using Microsoft.Extensions.Localization;
using Newtonsoft.Json;

namespace AbanoubNassem.Trinity.Providers;

/// <summary>
/// Provides localization functionality using JSON files as sources.
/// </summary>
public class TrinityLocalizer
{
    private readonly JsonSerializer _serializer = new();
    private readonly Dictionary<string, Dictionary<string, LocalizedString>> _locales = new();

    /// <summary>
    /// Gets a localized string using its name.
    /// </summary>
    /// <param name="name">The name of the localized string.</param>
    /// <returns>The localized string.</returns>
    public LocalizedString this[string name] => GetLocalizedString(name);

    /// <summary>
    /// Gets a localized string using its name and arguments.
    /// </summary>
    /// <param name="name">The name of the localized string.</param>
    /// <param name="arguments">An array of objects to format the localized string.</param>
    /// <returns>The localized string.</returns>
    public LocalizedString this[string name, params object[] arguments]
    {
        get
        {
            var actualValue = this[name];
            return !actualValue.ResourceNotFound
                ? new LocalizedString(name, string.Format(actualValue.Value, arguments), false)
                : actualValue;
        }
    }

    /// <summary>
    /// Retrieves all localized strings.
    /// </summary>
    /// <returns>A collection of localized strings.</returns>
    public IEnumerable<LocalizedString> GetAllStrings()
    {
        var locale = Thread.CurrentThread.CurrentCulture.TwoLetterISOLanguageName;

        if (_locales.TryGetValue(locale, out var strings)) return strings.Values;

        _locales.TryAdd(locale, new Dictionary<string, LocalizedString>());

        var localesDirectory = new DirectoryInfo(Path.Combine(AppContext.BaseDirectory, "Locales"));

        var jsonFiles = localesDirectory.GetFiles("*.json", SearchOption.AllDirectories);

        foreach (var fileInfo in jsonFiles)
        {
            try
            {
                var cultureName = Path.GetFileNameWithoutExtension(fileInfo.Name).Split('.').Last().Split('-').First();

                if (locale != cultureName) continue;

                using var sReader = fileInfo.OpenText();
                using var reader = new JsonTextReader(sReader);
                while (reader.Read())
                {
                    if (reader.TokenType != JsonToken.PropertyName)
                        continue;
                    var key = reader.Value as string;
                    reader.Read();
                    var value = _serializer.Deserialize<string>(reader);
                    _locales[locale].TryAdd(key!, new LocalizedString(key!, value, false));
                }
            }
            catch
            {
                // Ignore cultures that are not supported by the framework
            }
        }

        return _locales[locale].Values;
    }

    private LocalizedString GetLocalizedString(string key)
    {
        var locale = Thread.CurrentThread.CurrentCulture.TwoLetterISOLanguageName;

        if (!_locales.ContainsKey(locale))
        {
            GetAllStrings();
        }

        return !_locales[locale].ContainsKey(key) ? new LocalizedString(key, key) : _locales[locale][key];
    }
}