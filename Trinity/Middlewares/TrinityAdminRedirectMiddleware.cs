using AbanoubNassem.Trinity.Configurations;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace AbanoubNassem.Trinity.Middlewares;

public class TrinityAdminRedirectMiddleware
{
    private readonly RequestDelegate _next;
    private readonly TrinityConfigurations _configurations;
    private readonly IHttpClientFactory _clientFactory;

    public TrinityAdminRedirectMiddleware(RequestDelegate next, TrinityConfigurations configurations,
        IHttpClientFactory clientFactory)
    {
        _next = next;
        _configurations = configurations;
        _clientFactory = clientFactory;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            if ((bool)context.Request.Path.Value?.StartsWith($"/{_configurations.Prefix}/trinity"))
            {
                var toPath = context.Request.Path.Value.Replace($"/{_configurations.Prefix}/trinity", "");
                using var client = _clientFactory.CreateClient();
                client.BaseAddress = new Uri($"{context.Request.Scheme}://{context.Request.Host}");

                if (context.Request.Headers.ContainsKey("Accept"))
                {
                    client.DefaultRequestHeaders.Add("Accept", context.Request.Headers.Accept.ToList());
                }

                // Get the requested path from the Vite Dev Server.
                var response = await client.GetAsync(toPath);
                // If the response is successful, process.
                if (response.IsSuccessStatusCode)
                {
                    // Get the response content.
                    var content = await response.Content.ReadAsByteArrayAsync();
                    // Get the response content type.
                    var contentType = response.Content.Headers.ContentType?.MediaType;
                    // Set the response content type.
                    context.Response.ContentType = contentType ?? "application/octet-stream";
                    // Set the response content length.
                    context.Response.ContentLength = content.Length;
                    // Write the response content.
                    await context.Response.Body.WriteAsync(content);
                }
                // Otherwise, call the next middleware.
                else
                {
                    await _next(context);
                }

                return;
            }

            // Continue processing the request
            await _next(context);
        }
        catch
        {
            await _next(context);
        }
    }
}

public static class TrinityAdminRedirectMiddlewareExtensions
{
    public static IApplicationBuilder UseTrinityAdminRedirectMiddleware(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<TrinityAdminRedirectMiddleware>();
    }
}