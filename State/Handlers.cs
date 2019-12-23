using BlazorState;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Celin.State
{
    public partial class AppState
    {
        public class TogglePendingHandler : ActionHandler<TogglePendingAction>
        {
            AppState State => Store.GetState<AppState>();
            public override Task<Unit> Handle(TogglePendingAction aAction, CancellationToken aCancellationToken)
            {
                State.ShowPending = !State.ShowPending;

                EventHandler handler = State.Changed;
                handler?.Invoke(State, null);

                return Unit.Task;
            }
            public TogglePendingHandler(IStore store) : base(store) { }
        }
        public class SearchHandler : ActionHandler<SearchAction>
        {
            AppState State => Store.GetState<AppState>();
            public override Task<Unit> Handle(SearchAction aAction, CancellationToken aCancellationToken)
            {
                State.Search = aAction.Search.Trim();

                EventHandler handler = State.Changed;
                handler?.Invoke(State, null);

                return Unit.Task;
            }
            public SearchHandler(IStore store) : base(store) { }
        }
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
