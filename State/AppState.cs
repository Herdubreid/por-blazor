using BlazorState;
using System;
using System.Collections.Generic;

namespace Celin.State
{
    public partial class AppState : State<AppState>
    {
        public event EventHandler Changed;
        public bool ShowPending { get; set; }
        public string Search { get; set; }
        public AIS.AuthResponse AuthResponse { get; set; }
        public override void Initialize() { }
    }
}
