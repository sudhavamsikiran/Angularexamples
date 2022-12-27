using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TODO_API.Models;
namespace TODO_API.BAL.IRepository
{
   public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProducts();

        Task<IEnumerable<Category>> GetAllCategories();

        Task<IEnumerable<ProductList>> RetrieveProducts();

        Task<IEnumerable<CategoryList>> RetrieveCategories();

        Task<int> CreateProduct(Product product);

        Task<int> CreateCategory(Category category);

        Task<int> UpdateCategory(Category category, int categoryID);

        Task<int> UpdateProduct(Product product);

        Task<int> DeleteCategory(int categoryID);

        Task<int> DeleteProduct(int productID);

        Task<IEnumerable<ProductList>> SearchProductByName(string productName);

        Task<IEnumerable<CategoryList>> SearchCategoryByName(string category);
    }
}
