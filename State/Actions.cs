using BlazorState;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Celin.State
{
    public partial class AppState
    {
        public class AuthenticateAction : IAction
        {
            public AIS.AuthResponse AuthResponse { get; set; }
        }
    }
}
