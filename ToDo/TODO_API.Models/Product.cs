using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TODO_API.Models
{
    public class Product
    {
        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        private int productID;
        private string productName;
        [ForeignKey("FK_Products_Categories")]
        private int categoryID;
        [DataType(DataType.Currency)]
        private float? unitPrice;

        public int ProductID { get => productID; set => productID = value; }
        public string ProductName { get => productName; set => productName = value; }
        public int CategoryID { get => categoryID; set => categoryID = value; }
        public float? UnitPrice { get => unitPrice; set => unitPrice = value; }
    }
}
