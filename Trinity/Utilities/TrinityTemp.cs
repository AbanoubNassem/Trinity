using Microsoft.AspNetCore.Hosting;

namespace AbanoubNassem.Trinity.Utilities;

public static class TrinityTemp
{
    public static void ClearTrinityTempDirectory(IWebHostEnvironment webHostEnvironment, int days = 7)
    {
        var directory = Path.Combine(webHostEnvironment.WebRootPath, "trinity_temp");


        var files = Directory.GetFiles(directory)
            .Where(f => (DateTime.Now - File.GetLastWriteTime(f)).TotalDays > days)
            .ToArray();

        var directories = Directory.GetDirectories(directory)
            .Where(d => (DateTime.Now - Directory.GetLastWriteTime(d)).TotalDays > days)
            .ToArray();

        Parallel.ForEach(files, File.Delete);

        Parallel.ForEach(directories, Directory.Delete);
    }
}