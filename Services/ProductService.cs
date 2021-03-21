using DataAccess;
using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class ProductService
    {
        private EcommerceContext _context;

        public ProductService(EcommerceContext context)
        {
            _context = context;
        }
        public List<Product> GetProducts()
        {
            return _context.Products.Include("ProductPictures.Picture").ToList();            
        }

        public Product GetProductByID(int id)
        {
            return _context.Products.Include("ProductPictures.Picture").FirstOrDefault(x=>x.ID==id);
        }

        public List<Product> FindProductIDs(List<int> ids)
        {
            return _context.Products.Where(x => ids.Contains(x.ID)).Distinct().ToList();
        }
        public  List<Product> SearchProduct(int? id,string searchTerm,int? sortBy, int? Page,int MaxPage,out int count)
        {
            Page = Page ?? 1;
            var products = _context.Products.Include("ProductPictures.Picture").AsQueryable();
            if (id.HasValue)
            {
                products = products.Where(p => p.CategoryID == id);
            }
            if (!string.IsNullOrEmpty(searchTerm))
            {
                products = products.Where(p => p.Name.Contains(searchTerm));
            }
            if (sortBy.HasValue)
            {
                switch (sortBy)
                {
                    case 2:
                        products = products.OrderByDescending(x => x.Price);
                        break;
                    case 3:
                        products = products.OrderBy(x => x.Price);
                        break;
                    default:
                        products = products.OrderByDescending(x => x.ID);
                        break;
                }
            }
            int skip = (Page.Value - 1) * MaxPage;
            products = products.Skip(skip).Take(MaxPage);
            count = products.Count();

            return products.Skip(skip).Take(MaxPage).ToList();
        }





    }
}
