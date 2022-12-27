using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TODO_API.BAL.ICommandText
{
   public interface ICommandQueries
    {

        string GetAllProducts { get; }
        string GetAllCategories { get; }
        string RetrieveProducts { get; }

        string RetrieveCategories { get; }

        string CreateProduct { get; }

        string CreateCategory { get; }

        string UpdateProduct { get; }

        string UpdateCategory { get; }

        string DeleteProduct { get; }

        string DeleteCategory { get; }

         
    }
}
