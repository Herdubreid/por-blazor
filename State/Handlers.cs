using Blazor.Extensions.Storage.Interfaces;
using BlazorState;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Celin.State
{
    public enum StorageKeys
    {
        OPEN
    }
    public partial class AppState
    {
        public class LoadOpenHandler : ActionHandler<LoadOpenAction>
        {
            IMediator Mediator { get; }
            ILocalStorage Local { get; }
            public override async Task<Unit> Handle(LoadOpenAction aAction, CancellationToken aCancellationToken)
            {
                await Mediator.Send(new PO.POState.LoadAction
                {
                    Open = await Local.GetItem<W4312F.Response>(StorageKeys.OPEN.ToString())
                });

                return Unit.Value;
            }
            public LoadOpenHandler(IStore store, IMediator mediator, ILocalStorage local) : base(store)
            {
                Mediator = mediator;
                Local = local;
            }
        }
        public class SaveOpenHandler : ActionHandler<SaveOpenAction>
        {
            ILocalStorage Local { get; }
            public override async Task<Unit> Handle(SaveOpenAction aAction, CancellationToken aCancellationToken)
            {
                await Local.SetItem(StorageKeys.OPEN.ToString(), aAction.Open);

                return Unit.Value;
            }
            public SaveOpenHandler(IStore store, ILocalStorage local) : base(store)
            {
                Local = local;
            }
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
