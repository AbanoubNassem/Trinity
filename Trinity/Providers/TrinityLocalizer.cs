using Microsoft.Extensions.Localization;
using Newtonsoft.Json;

namespace AbanoubNassem.Trinity.Providers;

public class TrinityLocalizer
{
    private readonly JsonSerializer _serializer = new();
    private readonly Dictionary<string, Dictionary<string, LocalizedString>> _locales = new();
    public LocalizedString this[string name] => GetLocalizedString(name);

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

    public IEnumerable<LocalizedString> GetAllStrings()
    {
        var locale = Thread.CurrentThread.CurrentCulture.Name;

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

                using var reader = new JsonTextReader(fileInfo.OpenText());
                while (reader.Read())
                {
                    if (reader.TokenType != JsonToken.PropertyName)
                        continue;
                    var key = reader.Value as string;
                    reader.Read();
                    var value = _serializer.Deserialize<string>(reader);
                    _locales[locale].Add(key!, new LocalizedString(key!, value, false));
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
        var locale = Thread.CurrentThread.CurrentCulture.Name;

        if (!_locales.ContainsKey(locale))
        {
            GetAllStrings();
        }

        return !_locales[locale].ContainsKey(key) ? new LocalizedString(key, "") : _locales[locale][key];
    }
}