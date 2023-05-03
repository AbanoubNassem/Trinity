using System.Collections.Concurrent;
using System.Data;
using System.Reflection;
using System.Security.Claims;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Configurations;
using AbanoubNassem.Trinity.Providers;
using AbanoubNassem.Trinity.Validators;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;

namespace AbanoubNassem.Trinity.Components;

internal static class TrinityResourceCache
{
    public static readonly ConcurrentDictionary<Type, ConcurrentDictionary<Type[], ConstructorInfo>>
        CachedConstructors = new();

    public static readonly ConcurrentDictionary<Type, ConcurrentDictionary<string, PropertyInfo>> CachedProperties =
        new();
}

/// <summary>
/// 
/// </summary>
public class CanMakeComponent
{
    /// <summary>
    /// A reference to <see cref="TrinityConfigurations"/> in the <see cref="IServiceProvider"/>.
    /// </summary>
    protected TrinityConfigurations Configurations { get; init; } = null!;

    /// <summary>
    /// A reference to the <see cref="IServiceProvider"/> of the app.
    /// </summary>
    protected IServiceProvider ServiceProvider { get; init; } = null!;

    /// <summary>
    /// A reference to the current <see cref="HttpRequest"/>.
    /// </summary>
    protected HttpRequest Request { get; init; } = null!;

    /// <summary>
    /// A reference to the current <see cref="HttpResponse"/>.
    /// </summary>
    protected HttpResponse Response { get; init; } = null!;

    /// <summary>
    /// A reference to the current User <see cref="ClaimsPrincipal"/>.
    /// </summary>
    protected ClaimsPrincipal User { get; init; } = null!;

    /// <summary>
    ///  A reference to the current <see cref="ILogger"/>.
    /// </summary>
    protected ILogger Logger { get; init; } = null!;

    /// <summary>
    /// A reference to the current <see cref="ModelStateDictionary"/>.
    /// </summary>
    protected ModelStateDictionary ModelState { get; init; } = null!;

    /// <summary>
    /// An instance of the Resource Validator <see cref="ResourceValidator"/>.
    /// </summary>
    protected ResourceValidator ResourceValidator { get; } = new();

    /// <summary>
    /// A reference to the ConnectionFactory.
    /// </summary>
    protected Func<IDbConnection> ConnectionFactory { get; init; } = null!;

    /// <summary>
    /// A reference to the singleton of <see cref="TrinityLocalizer"/>. 
    /// </summary>
    protected TrinityLocalizer Localizer { get; init; } = null!;


    private const BindingFlags ConstructorFlags =
        BindingFlags.Instance | BindingFlags.Public | BindingFlags.OptionalParamBinding;

    private const BindingFlags PropertyFlags = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public;

    /// <summary>
    /// Creates a new instance of the specified component <typeparamref name="T"/> with the specified arguments.
    /// </summary>
    /// <typeparam name="T">The type of component to create.</typeparam>
    /// <param name="args">The arguments to pass to the component constructor.</param>
    /// <returns>A new instance of the specified type <typeparamref name="T"/>.</returns>
    /// <exception cref="System.MissingMethodException">Thrown if a matching constructor for the specified arguments is not found.</exception>
    protected T Make<T>(params object[] args) where T : ITrinityComponent
    {
        var componentType = typeof(T);
        var constructorParams = new List<object>(args);

        if (!TrinityResourceCache.CachedConstructors.TryGetValue(componentType, out var cachedConstructors))
        {
            cachedConstructors = new ConcurrentDictionary<Type[], ConstructorInfo>();
            TrinityResourceCache.CachedConstructors[componentType] = cachedConstructors;
        }

        var constructorParamTypes = constructorParams.Select(p => p.GetType()).ToArray();

        if (!cachedConstructors.TryGetValue(constructorParamTypes, out var matchingConstructor))
        {
            var constructors = componentType.GetConstructors(ConstructorFlags);

            ConstructorInfo? bestMatchConstructor = null;
            var maxMatchedParams = -1;

            foreach (var constructor in constructors)
            {
                var parameters = constructor.GetParameters();
                if (parameters.Length < constructorParams.Count) continue;

                var constructorArgs = new List<object>(constructorParams);
                var argsMatch = true;
                var matchedParams = 0;

                for (var i = 0; i < parameters.Length; i++)
                {
                    var param = parameters[i];
                    if (i < constructorArgs.Count)
                    {
                        if (!param.ParameterType.IsInstanceOfType(constructorArgs[i]))
                        {
                            argsMatch = false;
                            break;
                        }

                        matchedParams++;
                    }
                    else
                    {
                        if (param is not { HasDefaultValue: false, IsOptional: false }) continue;
                        argsMatch = false;
                        break;
                    }
                }

                if (!argsMatch) continue;

                if (matchedParams <= maxMatchedParams) continue;
                bestMatchConstructor = constructor;
                maxMatchedParams = matchedParams;
            }

            if (bestMatchConstructor == null)
            {
                throw new ArgumentException("No matching constructor found.");
            }

            matchingConstructor = bestMatchConstructor;
            cachedConstructors[constructorParamTypes] = matchingConstructor;
        }

        var finalConstructorParams = new List<object>(constructorParams);
        var finalParameters = matchingConstructor.GetParameters();

        for (var i = finalConstructorParams.Count; i < finalParameters.Length; i++)
        {
            var param = finalParameters[i];
            if (param.HasDefaultValue)
            {
                finalConstructorParams.Add(param.DefaultValue!);
            }
            else if (param.IsOptional)
            {
                finalConstructorParams.Add(Type.Missing);
            }
        }

        var component = (T)Activator
            .CreateInstance(componentType, ConstructorFlags, null, finalConstructorParams.ToArray(), null)!;

        SetComponentProperty(component, componentType, "Configurations", Configurations);
        SetComponentProperty(component, componentType, "ServiceProvider", ServiceProvider);
        SetComponentProperty(component, componentType, "Localizer", Localizer);

        component.Setup();

        return component;
    }

    private static void SetComponentProperty<T>(T component, Type componentType, string propertyName, object value)
    {
        if (!TrinityResourceCache.CachedProperties.TryGetValue(componentType, out var propertyCache))
        {
            propertyCache = new ConcurrentDictionary<string, PropertyInfo>();
            TrinityResourceCache.CachedProperties[componentType] = propertyCache;
        }

        if (!propertyCache.TryGetValue(propertyName, out var property))
        {
            property = componentType.GetProperty(propertyName, PropertyFlags);
            propertyCache[propertyName] = property!;
        }

        property?.SetValue(component, value);
    }
}