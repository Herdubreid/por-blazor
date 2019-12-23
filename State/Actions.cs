using BlazorState;

namespace Celin.State
{
    public partial class AppState
    {
        public class TogglePendingAction : IAction { }
        public class SearchAction : IAction
        {
            public string Search { get; set; }
        }
        public class AuthenticateAction : IAction
        {
            public AIS.AuthResponse AuthResponse { get; set; }
        }
    }
}
