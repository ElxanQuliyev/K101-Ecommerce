using DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models;

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
