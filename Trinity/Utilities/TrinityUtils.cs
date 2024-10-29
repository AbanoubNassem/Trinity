using AbanoubNassem.Trinity.Components.Interfaces;

namespace AbanoubNassem.Trinity.Utilities;

/// <summary>
/// Trinity Utilities. 
/// </summary>
public static class TrinityUtils
{
    /// <summary>
    /// Filter/Get only the fields from the given component.
    /// </summary>
    /// <param name="fields"></param>
    /// <param name="component"></param>
    public static void GetInnerFields(in Dictionary<string, object> fields, ITrinityComponent component)
    {
        switch (component)
        {
            case ITrinityField baseField:
                fields.TryAdd(baseField.ColumnName, baseField);
                break;
            case IHasSchema baseLayout:
            {
                if (baseLayout.Schema != null)
                    foreach (var innerComponent in baseLayout.Schema)
                    {
                        GetInnerFields(in fields, (ITrinityComponent)innerComponent);
                    }

                break;
            }
        }
    }
    
    
    /// <summary>
    /// Clear Trinity temp folder after the given days.
    /// </summary>
    /// <param name="days">The days before the file can be deleted.</param>
    public static void ClearTrinityTempDirectory(int days = 7)
    {
        var directory = Path.Combine("wwwroot", "trinity_temp");


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