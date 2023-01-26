using AbanoubNassem.Trinity.Configurations;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.FileProviders;

namespace AbanoubNassem.Trinity.Utilities;

public class TrinityLocationExpander : IViewLocationExpander
{
    public void PopulateValues(ViewLocationExpanderContext context)
    {
    }

    public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context,
        IEnumerable<string> viewLocations)
    {
        var fileProvider = new EmbeddedFileProvider(
            typeof(TrinityConfigurations).Assembly,
            "AbanoubNassem.Trinity.Views"
        );
       
        var locations = new[] {  fileProvider.GetFileInfo("~/Views/TrinityApp.cshtml").PhysicalPath };
        return locations.Union(viewLocations);
    }
}