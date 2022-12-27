using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace TODO_API.Models
{
    public class ProductList
    {
        private int productID;
        private string productName;
        private string category;
        private string description;
        [DataType(DataType.Currency)]
        private float? unitPrice;

        public int ProductID { get => productID; set => productID = value; }
        public string ProductName { get => productName; set => productName = value; }
        public string Category { get => category; set => category = value; }
        public string Description { get => description; set => description = value; }
        public float? UnitPrice { get => unitPrice; set => unitPrice = value; }
    }
}
