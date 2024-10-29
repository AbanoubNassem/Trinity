using AbanoubNassem.Trinity.Controllers;
using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace AbanoubNassem.Trinity.Providers;

/// <summary>
/// An implementation of <see cref="IApplicationModelConvention"/> that applies a route prefix to controllers derived from <see cref="TrinityController"/>.
/// </summary>
public class RoutePrefixConvention : IApplicationModelConvention
{
    private readonly string _prefix;

    /// <summary>
    /// Initializes a new instance of the <see cref="RoutePrefixConvention"/> class.
    /// </summary>
    /// <param name="prefix">The route prefix to apply.</param>
    public RoutePrefixConvention(string prefix)
    {
        _prefix = prefix;
    }

    /// <summary>
    /// Applies the route prefix to all controllers derived from <see cref="TrinityController"/> in the specified <paramref name="application"/>.
    /// </summary>
    /// <param name="application">The <see cref="ApplicationModel"/> to which the route prefix is applied.</param>
    public void Apply(ApplicationModel application)
    {
        foreach (var controller in application.Controllers.Where(x =>
                     x.ControllerType.BaseType == typeof(TrinityController)))
        {
            // foreach (var selector in controller.Selectors)
            // {
            //     if (selector.AttributeRouteModel != null)
            //     {
            //         var template = selector.AttributeRouteModel.Template;
            //         selector.AttributeRouteModel.Template = _prefix + "/" + template?.TrimStart('/');
            //     }
            //     else
            //     {
            //         selector.AttributeRouteModel = new AttributeRouteModel
            //         {
            //             Template = _prefix
            //         };
            //     }
            // }

            foreach (var action in controller.Actions)
            {
                foreach (var selector in action.Selectors)
                {
                    if (selector.AttributeRouteModel != null)
                    {
                        var template = selector.AttributeRouteModel.Template;
                        selector.AttributeRouteModel.Template =
                            _prefix + "/" + template?.TrimStart('/');
                    }
                    else
                    {
                        selector.AttributeRouteModel = new AttributeRouteModel
                        {
                            Template = _prefix
                        };
                    }
                }
            }
        }
    }
}