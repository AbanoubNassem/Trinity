// using System.Reflection;
// using AbanoubNassem.Trinity.Components.Interfaces;
//
// namespace AbanoubNassem.Trinity.Resources;
//
// public abstract partial class TrinityResource<TPrimaryKeyType>
// {
//     private const BindingFlags Flags = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public;
//     
//     protected T Make<T>(params object[] args) where T : ITrinityComponent
//     {
//         var componentType = typeof(T);
//         var component = (T)Activator.CreateInstance(componentType, args)!;
//     
//         componentType.GetProperty("Configurations", Flags)!.SetValue(component, Configurations);
//         componentType.GetProperty("ServiceProvider", Flags)!.SetValue(component, ServiceProvider);
//         componentType.GetProperty("Localizer", Flags)!.SetValue(component, Localizer);
//     
//         return component;
//     }
// }