using Blazor.Extensions.Storage;
using Blazored.Toast;
using BlazorState;
using Celin.PO;
using Celin.Services;
using Celin.State;
using Microsoft.AspNetCore.Components.Builder;
using Microsoft.Extensions.DependencyInjection;
#if DEBUG
using Microsoft.Extensions.Logging;
#endif
using System.Reflection;

namespace Celin
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
#if DEBUG
            services.AddLogging(logger =>
            {
                logger
                    .SetMinimumLevel(LogLevel.Critical)
                    .AddConsole();
            });
#endif
            services.AddStorage();
            services.AddBlazoredToast();
            services.AddBlazorState(
                (options) =>
                {
                    options.UseCloneStateBehavior = false;
#if DEBUG
                    options.UseReduxDevToolsBehavior = true;
#endif
                    options.Assemblies = new Assembly[]
                    {
                        typeof(Startup).GetTypeInfo().Assembly,
                        typeof(POState).GetTypeInfo().Assembly
                    };
                });
            services.AddSingleton<POState>();
            services.AddSingleton<AppState>();
            services.AddSingleton<JsService>();
            services.AddSingleton<AIS.Server, E1Service>();
        }

        public void Configure(IComponentsApplicationBuilder app)
        {
            app.AddComponent<App>("app");
        }
    }
}
