using AbanoubNassem.Trinity.Controllers;
using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace AbanoubNassem.Trinity.Providers;

public class RoutePrefixConvention : IApplicationModelConvention
{
    private readonly string _prefix;

    public RoutePrefixConvention(string prefix)
    {
        _prefix = prefix;
    }

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