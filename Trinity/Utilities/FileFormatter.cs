namespace AbanoubNassem.Trinity.Utilities;

/// <summary>
/// A file Format helper.
/// </summary>
public static class FileFormatter
{
    /// <summary>
    /// Takes a long integer representing the size of a file in bytes as input and formats it into a string
    /// that includes the appropriate units (B, KB, MB, GB, or TB)
    /// </summary>
    /// <param name="bytes">the size of a file in bytes as input and formats it into a string</param>
    /// <returns>A string that includes the appropriate units (B, KB, MB, GB, or TB)</returns>
    public static string FormatBytes(long bytes)
    {
        string[] sizes = { "B", "KB", "MB", "GB", "TB" };
        var order = 0;
        while (bytes >= 1024 && order + 1 < sizes.Length)
        {
            order++;
            bytes = bytes / 1024;
        }

        // Adjust the format string to your preferences. For example "{0:0.#}{1}" would
        // show a single decimal place, and no space.
        return $"{bytes:0.##}{sizes[order]}";
    }
}