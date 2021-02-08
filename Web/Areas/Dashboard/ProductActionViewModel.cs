using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Areas.Dashboard
{
    public class ProductActionViewModel
    {
        public int ProductID { get; set; }
        public Product Product { get; set; }

        public int CategoryID { get; set; }
        public decimal Price { get; set; }
        public decimal? Discount { get; set; }
        public bool isFeatured { get; set; }
        public int StockQuantity { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        public string SKU { get; set; }
        public string Tags { get; set; }
        public string Barcode { get; set; }
        public string Supplier { get; set; }

        public string ProductPictures { get; set; }
        public int ThumbnailPicture { get; set; }
        public List<ProductPicture> ProductPicturesList { get; set; }

        public List<Category> Categories { get; set; }
    }
}
