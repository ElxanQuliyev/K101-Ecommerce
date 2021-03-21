using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Helper;

namespace Web.Models
{
    public class ShopProductViewModel
    {
        public List<Product> Products { get; set; }
        public List<Category> Categories{ get; set; }
        public int PageNo { get; set; }
        public int RecordSize { get; set; }
        public Pager Pager{ get; set; }
    }
}
