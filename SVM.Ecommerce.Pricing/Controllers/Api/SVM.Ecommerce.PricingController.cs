using System.Web.Http;

namespace SVM.Ecommerce.Pricing.Controllers.Api
{
    [RoutePrefix("api/SVM.Ecommerce.Pricing")]
    public class ManagedModuleController : ApiController
    {
        // GET: api/managedModule
        [HttpGet]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(new { result = "Hello world!" });
        }
    }
}
