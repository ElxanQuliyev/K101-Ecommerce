using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.ViewModels
{
    public class CheckoutVM
    {
        public List<Product> Products { get; set; }
        public List<int> ProductIds { get; set; }
    }
}
