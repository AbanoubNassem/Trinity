using System.Text.RegularExpressions;

namespace AbanoubNassem.Trinity.Extensions;

public static class StringExtensions
{
    public static string Words(this string value, int words = 100, string end = "...")
    {
        var match = Regex.Match(value, $@"^\s*(?:\S+\s*){{1,{words + 1}}}",
            RegexOptions.Compiled | RegexOptions.IgnoreCase | RegexOptions.Singleline);
        if (!match.Success || value.Length == match.Value.Length)
        {
            return value;
        }

        return match.Value.TrimEnd() + end;
    }
}