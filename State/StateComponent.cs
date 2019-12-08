using BlazorState;
using Celin.State;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Celin.PO
{
    public class StateComponent : BlazorStateComponent
    {
        protected AppState AppState => Store.GetState<AppState>();
        protected POState POState => Store.GetState<POState>();
        protected void Update(object sender, EventArgs args) => InvokeAsync(StateHasChanged);
        protected override void OnInitialized()
        {
            POState.Changed += Update;
        }
        public new void Dispose()
        {
            POState.Changed -= Update;
            base.Dispose();
        }
    }
}
