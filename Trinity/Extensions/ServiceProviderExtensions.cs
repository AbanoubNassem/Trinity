using Microsoft.Extensions.DependencyInjection;

namespace AbanoubNassem.Trinity.Extensions;

public static class ServiceProviderExtensions
{
    public static IEnumerable<object> GetRequiredServices(this IServiceProvider serviceProvider,
        IEnumerable<Type> types)
    {
        return types.Select(serviceProvider.GetRequiredService);
    }
}