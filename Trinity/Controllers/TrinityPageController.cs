using AbanoubNassem.Trinity.Pages;
using InertiaCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace AbanoubNassem.Trinity.Controllers;

/// <summary>
/// Handle custom pages.
/// </summary>
public sealed class TrinityPageController : TrinityController
{
    /// <summary>
    /// Renders the dashboard page.
    /// </summary>
    /// <returns>The rendered page as an <see cref="IActionResult"/>.</returns>
    [HttpGet]
    public async Task<IActionResult> Index()
    {
        return await RenderPage("dashboard");
    }

    /// <summary>
    /// Renders a page based on the provided slug.
    /// </summary>
    /// <param name="slug">The slug of the page to render.</param>
    [HttpGet]
    [Route("/pages/{slug}/")]
    public async Task<IActionResult> RenderPage(string slug)
    {
        if (!TrinityManager.Pages.TryGetValue(slug, out var pageV)) return NotFound();

        var pageObj = HttpContext.RequestServices.GetRequiredService(pageV);
        var page = (TrinityPage)pageObj;

        if (!page.CanView)
            return UnAuthorised();

        await page.Setup();

        var response = CreateResponse();
        response.Page = pageObj;

        response.Data = page.GetData();

        return Inertia.Render(page.PageView, response);
    }
}