using BlazorState;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Celin.State
{
    public partial class AppState : State<AppState>
    {
        public AIS.AuthResponse AuthResponse { get; set; }
        public override void Initialize() { }
    }
}
