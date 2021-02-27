using DataAccess;
using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models;
using Web.ViewModels;

namespace Web.Controllers
{
    public class ProductsController : Controller
    {
        private readonly ILogger<ProductsController> _logger;
        private ProductService _productService;
        private CategoryService _categoryService;

        public ProductsController(ILogger<ProductsController> logger, EcommerceContext context)
        {
            _productService = new ProductService(context);
            _categoryService = new CategoryService(context);
            _logger = logger;
        }

        [Authorize(Roles ="User")]
        public IActionResult Checkout()
        {
           var productIds= Request.Cookies["CartProduct"];
            CheckoutVM vm = new CheckoutVM();
            if (productIds!=null && !string.IsNullOrEmpty(productIds))
            {
                var ProIDs = productIds.Split('-').Select(p => int.Parse(p)).ToList();
                vm.Products = _productService.FindProductIDs(ProIDs);
                vm.ProductIds = ProIDs;
            }
            return View(vm);
        }
        
        public IActionResult Index(int? id,string search,int? sortBy)
        {
            ShopProductViewModel vm = new ShopProductViewModel()
            {
                Products = _productService.SearchProduct(id,search,sortBy),
                Categories = _categoryService.GetCategories()
            };
            return View(vm);
        }

        public IActionResult SearchProduct(int? id, string search, int? sortBy)
        {
            ShopProductViewModel vm = new ShopProductViewModel()
            {
                Products = _productService.SearchProduct(id, search, sortBy),
                Categories = _categoryService.GetCategories()
            };
            return PartialView("ProductPartial",vm);
        }
        public IActionResult Detail(int? id)
        {
            if (id == null) return View("Error");

            ProductViewModel vm = new ProductViewModel();
            vm.Product = _productService.GetProductByID(id.Value);
            return View(vm);
        }

    }
}
