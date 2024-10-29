using Microsoft.Extensions.DependencyInjection;

namespace AbanoubNassem.Trinity.Extensions;

/// <summary>
///  Adds extra functionality to <see cref="IServiceProvider" />.
/// </summary>
public static class ServiceProviderExtensions
{
    /// <summary>
    /// Get all the required services from <see cref="IServiceProvider" /> based on the <see cref="Type" />s given.
    /// </summary>
    /// <param name="serviceProvider">The <see cref="IServiceProvider" /> to get services from.</param>
    /// <param name="types">A list of <see cref="Type" />s to be retrieved from The <see cref="IServiceProvider" />.</param>
    /// <returns>A list of Services</returns>
    public static IEnumerable<object> GetRequiredServices(this IServiceProvider serviceProvider,
        IEnumerable<Type> types)
    {
        return types.Select(serviceProvider.GetRequiredService);
    }
}