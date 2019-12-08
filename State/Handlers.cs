using BlazorState;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Celin.State
{
    public partial class AppState
    {
        public class AuthenticateHander : ActionHandler<AuthenticateAction>
        {
            AppState State => Store.GetState<AppState>();
            public override Task<Unit> Handle(AuthenticateAction aAction, CancellationToken aCancellationToken)
            {
                State.AuthResponse = aAction.AuthResponse;

                return Unit.Task;
            }
            public AuthenticateHander(IStore store) : base(store) { }
        }
    }
}
