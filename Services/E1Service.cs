using System.Net.Http;

namespace Celin.Services
{
    public class E1Service : AIS.Server
    {
        public E1Service(HttpClient http)
            : base("https://demo.steltix.com/jderest/v2/", null, http) { }
    }
}
