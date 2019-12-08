using Blazor.Extensions.Storage.Interfaces;
using BlazorState;
using Celin.PO;
using MediatR;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Celin.Services
{
    public enum StorageKeys
    {
        OPEN
    }
    public class LocalStorageService
    {
        IStore Store { get; }
        ILocalStorage Local { get; }
        IMediator Mediator { get; }
        POState POState => Store.GetState<POState>();
        public async Task Load(StorageKeys key)
        {
            switch (key)
            {
                case StorageKeys.OPEN:
                    var open = await Local.GetItem<W4312F.Response>(key.ToString());
                    if (open != null)
                    {
                        await Mediator.Send(new POState.LoadAction { Open = open });
                    }
                    break;
            }
        }
        public async Task Save(StorageKeys key)
        {
            Console.WriteLine("Save:", key, POState.OpenRequest);
            switch (key)
            {
                case StorageKeys.OPEN:
                    await Local.SetItem(key.ToString(), POState.OpenRequest);
                    break;
            }
        }
        public LocalStorageService(IStore store, ILocalStorage local, IMediator mediator)
        {
            Store = store;
            Local = local;
            Mediator = mediator;
        }
    }
}
