using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
namespace TODO_API.Models
{
   public class APIResponse<T>
    {
        public APIResponse()
        {

        }
        public int statusCode { get; set; }
        public string message { get; set; }
        public T item { get; set; }
        public IEnumerable<T> listOfItems { get; set; }
    }
}
