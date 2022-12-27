using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TODO_API.BAL.ICommandText;
namespace TODO_API.BAL.CommandText
{
    public class CommandQueries : ICommandQueries
    {
        public string GetAllProducts => "SELECT [ProductID],[ProductName],[CategoryID],[UnitPrice] FROM[dbo].[Products]";

        public string GetAllCategories => "SELECT [CategoryID],[CategoryName],[Description] FROM[dbo].[Categories]";

        public string RetrieveProducts => "select p.ProductID as 'ProductID',p.ProductName as 'ProductName',c.CategoryName as 'Category',c.Description as 'Description',p.UnitPrice as 'UnitPrice' from Products P left join Categories c on p.CategoryID=c.CategoryID";

        public string RetrieveCategories => "Select categoryID,CategoryName,Description from Categories";

        public string CreateProduct => "INSERT INTO PRODUCTS(ProductName,CategoryID,UnitPrice) VALUES(@productName,@categoryID,@unitPrice)";

        public string CreateCategory => "INSERT INTO CATEGORIES(CategoryName,Description) VALUES(@categoryName,@description)";

        public string UpdateCategory => "UPDATE CATEGORIES SET CATEGORYNAME=@category,DESCRIPTION=@description where CategoryID=@CategoryID  ";

        public string UpdateProduct => "Update Products set ProductName=@productName,CategoryID=@CategoryID,UnitPrice=@UnitPrice where ProductID=@productID";

        public string DeleteCategory => "Delete from CATEGORIES where CategoryID=@CategoryID  ";

        public string DeleteProduct => "Delete from Products where ProductID=@productID";

        


    }
}
