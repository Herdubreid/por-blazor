using MediatR;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Celin.Services
{
    public class JsService
    {
        IJSRuntime JsRuntime { get; }
        IMediator Mediator { get; }
        DotNetObjectReference<JsService> Ref { get; }
        [JSInvokable]
        public void InitNumEdit(string id, string idTag, string idOk, string idEscape, int left, int right)
        {
            JsRuntime.InvokeVoidAsync("window.numEdit.init", id, idTag, idOk, idEscape, left, right);
        }
        public void ClearNumEdit(string id)
        {
            JsRuntime.InvokeVoidAsync("window.numEdit.clear", id);
        }
        public JsService(IJSRuntime jsRuntime, IMediator mediator)
        {
            JsRuntime = jsRuntime;
            Mediator = mediator;
            Ref = DotNetObjectReference.Create(this);
        }
    }
}
