using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models
{
    public class ShopProductViewModel
    {
        public List<Product> Products { get; set; }
        public List<Category> Categories{ get; set; }
    }
}
