namespace AbanoubNassem.Trinity.Utilities;

public static class FileFormatter
{
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
        return String.Format("{0:0.##}{1}", bytes, sizes[order]);
    }
}