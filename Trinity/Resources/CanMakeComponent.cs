// using System.Reflection;
// using AbanoubNassem.Trinity.Components.Interfaces;
//
// namespace AbanoubNassem.Trinity.Resources;
//
// public abstract partial class TrinityResource<TPrimaryKeyType>
// {
//     private const BindingFlags Flags = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public;
//
//     /// <summary>
//     /// Creates a new instance of the specified component <typeparamref name="T"/> with the specified arguments.
//     /// </summary>
//     /// <typeparam name="T">The type of component to create.</typeparam>
//     /// <param name="args">The arguments to pass to the component constructor.</param>
//     /// <returns>A new instance of the specified type <typeparamref name="T"/>.</returns>
//     /// <exception cref="System.MissingMethodException">Thrown if a matching constructor for the specified arguments is not found.</exception>
//     protected T Make<T>(params object[] args) where T : ITrinityComponent
//     {
//         var componentType = typeof(T);
//         var component = (T)Activator.CreateInstance(componentType, args)!;
//
//         componentType.GetProperty("Configurations", Flags)!.SetValue(component, Configurations);
//         componentType.GetProperty("ServiceProvider", Flags)!.SetValue(component, ServiceProvider);
//         componentType.GetProperty("Localizer", Flags)!.SetValue(component, Localizer);
//
//         component.Setup();
//
//         return component;
//     }
// }