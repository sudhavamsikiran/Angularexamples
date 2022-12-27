using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TODO_API.BAL.ICommandText;
using TODO_API.BAL.IRepository;
using TODO_API.Models;
using TODO_API.DAL;
using Microsoft.Extensions.Configuration;
using Dapper;

namespace TODO_API.BAL.Repository
{
   public class ProductRepository:BaseRepository, IProductRepository
    {
        private readonly ICommandQueries _commandQueries;
        public ProductRepository(IConfiguration configuration, ICommandQueries commandQueries) :base(configuration)
        {
            _commandQueries = commandQueries;

        }
        public async Task<IEnumerable<Product>> GetAllProducts()
        {
            try
            {
                return await WithConnection(async conn =>
                {
                    var query = await conn.QueryAsync<Product>(_commandQueries.GetAllProducts);
                    return query;
                });
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<IEnumerable<Category>> GetAllCategories()
        {
            try
            {
                return await WithConnection(async conn =>
                {
                    var query = await conn.QueryAsync<Category>(_commandQueries.GetAllCategories);
                    return query;
                });
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async  Task<IEnumerable<ProductList>> RetrieveProducts() 
        {
             try
            {
                return await WithConnection(async conn =>
                {
                   var query=  await conn.QueryAsync<ProductList>(_commandQueries.RetrieveProducts);
                    return query;
                });
            }
            catch(Exception ex )
            {
                throw ex ;
            }
        }

        public async Task<IEnumerable<CategoryList>> RetrieveCategories() 
        {
            try
            {
                return await WithConnection(async conn =>
                {
                    var query = await conn.QueryAsync<CategoryList>(_commandQueries.RetrieveCategories);
                    return query;
                });
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<int> CreateProduct(Product product)
        {
            try
            {
                return await WithConnection(async conn =>
                {
                    var query= await conn.ExecuteAsync(_commandQueries.CreateProduct, new { @productName = product.ProductName, @categoryID = product.CategoryID, @unitPrice = product.UnitPrice });
                   return query;
                });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<int> CreateCategory(Category category)
        {
            try
            {
                return await WithConnection(async conn =>
                {
                    var query = await conn.ExecuteAsync(_commandQueries.CreateCategory, new { @categoryName = category.CategoryName, @description = category.CategoryName });
                    return query;
                });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> UpdateCategory(Category category, int categoryID)
        {
            try
            {
                return await WithConnection(async conn => 
                {

                    var query = await conn.ExecuteAsync(_commandQueries.UpdateCategory, new { @category = category.CategoryName, @description = category.Description, @CategoryID=categoryID });
                    return query;
                });
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> UpdateProduct(Product product)
        {
            try
            {
                return await WithConnection(async conn =>
                {
                    var query = await conn.ExecuteAsync(_commandQueries.UpdateProduct, new { @ProductName = product.ProductName, @CategoryID = product.CategoryID, @UnitPrice = product.UnitPrice, @ProductID = product.ProductID });
                    return query;
                });

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<int> DeleteCategory(int categoryID)
        {
            try
            {
                return await WithConnection(async conn =>
                {

                    var query = await conn.ExecuteAsync(_commandQueries.DeleteCategory, new { @CategoryID = categoryID });
                    return query;
                });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> DeleteProduct(int productID)
        {
            try
            {
                return await WithConnection(async conn =>
                {
                    var query = await conn.ExecuteAsync(_commandQueries.DeleteProduct, new { @ProductID = productID });
                    return query;
                });

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<IEnumerable<ProductList>> SearchProductByName(string productName)
        {
            try
            {
                return await WithConnection(async conn =>
                {
                    var query = await conn.QueryAsync<ProductList>(_commandQueries.RetrieveProducts+ " where p.ProductName like '%" + productName + "%'");
                    return query;
                });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<IEnumerable<CategoryList>> SearchCategoryByName(string category)
        {
            try
            {
                return await WithConnection(async conn =>
                {
                    var query = await conn.QueryAsync<CategoryList>(_commandQueries.RetrieveCategories + " where CategoryName like '%" + category + "%'");
                    return query;
                });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
