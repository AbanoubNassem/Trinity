using System.Text.RegularExpressions;

namespace AbanoubNassem.Trinity.Extensions;

/// <summary>
/// Adds extra functionality to <see cref="string" />.
/// </summary>
public static class StringExtensions
{
    /// <summary>
    /// Limit the number of words in a string.
    /// </summary>
    /// <param name="str">The string to be limited</param>
    /// <param name="words">The count of words to limit the given string to.</param>
    /// <param name="end">Specify which string should be appended to the end of the truncated string.</param>
    /// <returns></returns>
    public static string Words(this string str, int words = 100, string end = "...")
    {
        var match = Regex.Match(str, $@"^\s*(?:\S+\s*){{1,{words + 1}}}",
            RegexOptions.Compiled | RegexOptions.IgnoreCase | RegexOptions.Singleline);
        if (!match.Success || str.Length == match.Value.Length)
        {
            return str;
        }

        return match.Value.TrimEnd() + end;
    }
}