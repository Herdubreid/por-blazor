const baseURL = '/';
const indexURL = '/index.html';
const networkFetchEvent = 'fetch';
const swInstallEvent = 'install';
const swInstalledEvent = 'installed';
const swActivateEvent = 'activate';
const staticCachePrefix = 'blazor-cache-v';
const staticCacheName = 'blazor-cache-v5';
const requiredFiles = [
"/_framework/blazor.boot.json",
"/_framework/blazor.webassembly.js",
"/_framework/wasm/mono.js",
"/_framework/wasm/mono.wasm",
"/_framework/_bin/AnyClone.dll",
"/_framework/_bin/Blazor-State.dll",
"/_framework/_bin/Blazor.Extensions.Logging.dll",
"/_framework/_bin/Blazor.Extensions.Logging.JS.dll",
"/_framework/_bin/Blazor.Extensions.Storage.dll",
"/_framework/_bin/Blazor.Extensions.Storage.JS.dll",
"/_framework/_bin/Blazored.Toast.dll",
"/_framework/_bin/Celin.AIS.dll",
"/_framework/_bin/Celin.PO.dll",
"/_framework/_bin/DevExpress.Blazor.dll",
"/_framework/_bin/DevExtreme.AspNet.Data.dll",
"/_framework/_bin/MediatR.dll",
"/_framework/_bin/MediatR.Extensions.Microsoft.DependencyInjection.dll",
"/_framework/_bin/Microsoft.AspNetCore.Authorization.dll",
"/_framework/_bin/Microsoft.AspNetCore.Blazor.dll",
"/_framework/_bin/Microsoft.AspNetCore.Blazor.HttpClient.dll",
"/_framework/_bin/Microsoft.AspNetCore.Components.dll",
"/_framework/_bin/Microsoft.AspNetCore.Components.Forms.dll",
"/_framework/_bin/Microsoft.AspNetCore.Components.Web.dll",
"/_framework/_bin/Microsoft.AspNetCore.Metadata.dll",
"/_framework/_bin/Microsoft.Bcl.AsyncInterfaces.dll",
"/_framework/_bin/Microsoft.Bcl.HashCode.dll",
"/_framework/_bin/Microsoft.CSharp.dll",
"/_framework/_bin/Microsoft.Extensions.Configuration.Abstractions.dll",
"/_framework/_bin/Microsoft.Extensions.Configuration.Binder.dll",
"/_framework/_bin/Microsoft.Extensions.Configuration.dll",
"/_framework/_bin/Microsoft.Extensions.DependencyInjection.Abstractions.dll",
"/_framework/_bin/Microsoft.Extensions.DependencyInjection.dll",
"/_framework/_bin/Microsoft.Extensions.Logging.Abstractions.dll",
"/_framework/_bin/Microsoft.Extensions.Logging.Configuration.dll",
"/_framework/_bin/Microsoft.Extensions.Logging.Console.dll",
"/_framework/_bin/Microsoft.Extensions.Logging.dll",
"/_framework/_bin/Microsoft.Extensions.Options.ConfigurationExtensions.dll",
"/_framework/_bin/Microsoft.Extensions.Options.dll",
"/_framework/_bin/Microsoft.Extensions.Primitives.dll",
"/_framework/_bin/Microsoft.JSInterop.dll",
"/_framework/_bin/Mono.Security.dll",
"/_framework/_bin/Mono.WebAssembly.Interop.dll",
"/_framework/_bin/mscorlib.dll",
"/_framework/_bin/netstandard.dll",
"/_framework/_bin/Newtonsoft.Json.dll",
"/_framework/_bin/por-blazor.dll",
"/_framework/_bin/System.ComponentModel.DataAnnotations.dll",
"/_framework/_bin/System.Core.dll",
"/_framework/_bin/System.Data.dll",
"/_framework/_bin/System.dll",
"/_framework/_bin/System.Drawing.Common.dll",
"/_framework/_bin/System.Net.Http.dll",
"/_framework/_bin/System.Numerics.dll",
"/_framework/_bin/System.Runtime.CompilerServices.Unsafe.dll",
"/_framework/_bin/System.Runtime.Serialization.dll",
"/_framework/_bin/System.Text.Encodings.Web.dll",
"/_framework/_bin/System.Text.Json.dll",
"/_framework/_bin/System.Xml.dll",
"/_framework/_bin/System.Xml.Linq.dll",
"/_framework/_bin/TypeSupport.dll",
"/_framework/_bin/WebAssembly.Bindings.dll",
"/_framework/_bin/WebAssembly.Net.Http.dll",
"/3156116d1667eea051f96b697f069624.ttf",
"/663974c9fe3ba55b228724fd4d4e445f.ttf",
"/favicon.ico",
"/fontawsome/css/all.css",
"/fontawsome/webfonts/fa-brands-400.eot",
"/fontawsome/webfonts/fa-brands-400.svg",
"/fontawsome/webfonts/fa-brands-400.ttf",
"/fontawsome/webfonts/fa-brands-400.woff",
"/fontawsome/webfonts/fa-brands-400.woff2",
"/fontawsome/webfonts/fa-regular-400.eot",
"/fontawsome/webfonts/fa-regular-400.svg",
"/fontawsome/webfonts/fa-regular-400.ttf",
"/fontawsome/webfonts/fa-regular-400.woff",
"/fontawsome/webfonts/fa-regular-400.woff2",
"/fontawsome/webfonts/fa-solid-900.eot",
"/fontawsome/webfonts/fa-solid-900.svg",
"/fontawsome/webfonts/fa-solid-900.ttf",
"/fontawsome/webfonts/fa-solid-900.woff",
"/fontawsome/webfonts/fa-solid-900.woff2",
"/icon-192.png",
"/icon-512.png",
"/index.html",
"/lib/Blazor.Extensions.Storage.JS",
"/lib/dx-blazor/dx-blazor.cjs.js",
"/lib/dx-blazor/dx-blazor.css",
"/lib/dx-blazor/dx-blazor.esm.js",
"/lib/dx-blazor/dx-blazor.js",
"/lib/dx-blazor/modules/cjs-calendar-979546d6.js",
"/lib/dx-blazor/modules/cjs-charts-4ce696f7.js",
"/lib/dx-blazor/modules/cjs-checkbox-3a64a69a.js",
"/lib/dx-blazor/modules/cjs-chunk-509db829.js",
"/lib/dx-blazor/modules/cjs-chunk-7aa0d757.js",
"/lib/dx-blazor/modules/cjs-chunk-85e9b555.js",
"/lib/dx-blazor/modules/cjs-chunk-9109506d.js",
"/lib/dx-blazor/modules/cjs-chunk-c43b3f7c.js",
"/lib/dx-blazor/modules/cjs-chunk-e26655d2.js",
"/lib/dx-blazor/modules/cjs-combobox-e39421aa.js",
"/lib/dx-blazor/modules/cjs-devexpress.viz-7df80a2d.js",
"/lib/dx-blazor/modules/cjs-dom-utils-6a09eac3.js",
"/lib/dx-blazor/modules/cjs-dropdowns-5546f970.js",
"/lib/dx-blazor/modules/cjs-dx-blazor-5efa9639.js",
"/lib/dx-blazor/modules/cjs-form-layout-7c90f5c8.js",
"/lib/dx-blazor/modules/cjs-grid-b52f8083.js",
"/lib/dx-blazor/modules/cjs-popup-utils-88c25c7c.js",
"/lib/dx-blazor/modules/cjs-roller-4f906feb.js",
"/lib/dx-blazor/modules/cjs-scheduler-329eb609.js",
"/lib/dx-blazor/modules/esm-calendar-cc78ea4d.js",
"/lib/dx-blazor/modules/esm-charts-a566e8f1.js",
"/lib/dx-blazor/modules/esm-checkbox-0fee1774.js",
"/lib/dx-blazor/modules/esm-chunk-2f760454.js",
"/lib/dx-blazor/modules/esm-chunk-38c61c5f.js",
"/lib/dx-blazor/modules/esm-chunk-6ca2c4f2.js",
"/lib/dx-blazor/modules/esm-chunk-710198b6.js",
"/lib/dx-blazor/modules/esm-chunk-95f069f9.js",
"/lib/dx-blazor/modules/esm-chunk-f9104efc.js",
"/lib/dx-blazor/modules/esm-combobox-3cfa75c1.js",
"/lib/dx-blazor/modules/esm-devexpress.viz-5d8db4bd.js",
"/lib/dx-blazor/modules/esm-dom-utils-d4fe413b.js",
"/lib/dx-blazor/modules/esm-dropdowns-b8e38328.js",
"/lib/dx-blazor/modules/esm-dx-blazor-f3439612.js",
"/lib/dx-blazor/modules/esm-form-layout-62134e56.js",
"/lib/dx-blazor/modules/esm-grid-91fdba30.js",
"/lib/dx-blazor/modules/esm-popup-utils-2e6d89cb.js",
"/lib/dx-blazor/modules/esm-roller-3d236e1d.js",
"/lib/dx-blazor/modules/esm-scheduler-c9b996d6.js",
"/main.css",
"/main.js",
"/ServiceWorkerRegister.js",
"/manifest.json"
];
// * listen for the install event and pre-cache anything in filesToCache * //
self.addEventListener(swInstallEvent, event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(requiredFiles);
            })
    );
});
self.addEventListener(swActivateEvent, function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (staticCacheName !== cacheName && cacheName.startsWith(staticCachePrefix)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
self.addEventListener(networkFetchEvent, event => {
    const requestUrl = new URL(event.request.url);
    if (requestUrl.origin === location.origin) {
        if (requestUrl.pathname === baseURL) {
            event.respondWith(caches.match(indexURL));
            return;
        }
    }
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        if (response.ok) {
                            if (requestUrl.origin === location.origin) {
                                caches.open(staticCacheName).then(cache => {
                                    cache.put(event.request.url, response);
                                });
                            }
                        }
                        return response.clone();
                    });
            }).catch(error => {
                console.error(error);
            })
    );
});
