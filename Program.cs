using System;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Components.Web;
using MudBlazor.Services;
using WeatherAPI.Components;

namespace WeatherAPI
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");
            //builder.RootComponents.RegisterForJavaScript<App>(identifier: "app", javaScriptInitializer: "loadApp");
            //builder.RootComponents.RegisterForJavaScript<WeatherComponent>(identifier:"weather", javaScriptInitializer:"loadWebComponent");
            //builder.RootComponents.RegisterAsCustomElement<WeatherComponent>("weather-component");

            HttpClient httpClient = new();
            builder.Services.AddScoped(sp => httpClient);
            builder.Services.AddMudServices();

            await builder.Build().RunAsync();
        }
    }
}
