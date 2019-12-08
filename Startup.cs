using Blazor.Extensions.Storage;
using BlazorState;
using Celin.PO;
using Celin.Services;
using Celin.State;
using Microsoft.AspNetCore.Components.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Celin
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddStorage();
            services.AddBlazorState(
                (options) =>
                {
                    options.UseReduxDevToolsBehavior = true;
                    options.Assemblies = new Assembly[]
                    {
                        typeof(Startup).GetTypeInfo().Assembly,
                        typeof(POState).GetTypeInfo().Assembly
                    };
                });
            services.AddScoped<POState>();
            services.AddScoped<AppState>();
            services.AddSingleton<AIS.Server, E1Service>();
        }

        public void Configure(IComponentsApplicationBuilder app)
        {
            app.AddComponent<App>("app");
        }
    }
}
