using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DataAccess;
using Entities;

namespace Web.Areas.Dashboard.Controllers
{
    [Area("Dashboard")]
    public class AdminCategoriesController : Controller
    {
        private readonly EcommerceContext _context;

        public AdminCategoriesController(EcommerceContext context)
        {
            _context = context;
        }

        // GET: Dashboard/AdminCategories
        public async Task<IActionResult> Index()
        {
            var ecommerceContext = _context.Categories.Include(c => c.ParentCategory).Include(c => c.Picture);
            return View(await ecommerceContext.ToListAsync());
        }

        // GET: Dashboard/AdminCategories/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories
                .Include(c => c.ParentCategory)
                .Include(c => c.Picture)
                .FirstOrDefaultAsync(m => m.ID == id);
            if (category == null)
            {
                return NotFound();
            }

            return View(category);
        }

        // GET: Dashboard/AdminCategories/Create
        public IActionResult Create()
        {
            ViewData["ParentCategoryID"] = new SelectList(_context.Categories, "ID", "ID");
            ViewData["PictureID"] = new SelectList(_context.Pictures, "ID", "ID");
            return View();
        }

        // POST: Dashboard/AdminCategories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ParentCategoryID,Name,Description,PictureID,isFeatured,ID,IsActive,IsDeleted,ModifiedOn")] Category category)
        {
            if (ModelState.IsValid)
            {
                _context.Add(category);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ParentCategoryID"] = new SelectList(_context.Categories, "ID", "ID", category.ParentCategoryID);
            ViewData["PictureID"] = new SelectList(_context.Pictures, "ID", "ID", category.PictureID);
            return View(category);
        }

        // GET: Dashboard/AdminCategories/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return NotFound();
            }
            ViewData["ParentCategoryID"] = new SelectList(_context.Categories, "ID", "ID", category.ParentCategoryID);
            ViewData["PictureID"] = new SelectList(_context.Pictures, "ID", "ID", category.PictureID);
            return View(category);
        }

        // POST: Dashboard/AdminCategories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ParentCategoryID,Name,Description,PictureID,isFeatured,ID,IsActive,IsDeleted,ModifiedOn")] Category category)
        {
            if (id != category.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(category);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CategoryExists(category.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["ParentCategoryID"] = new SelectList(_context.Categories, "ID", "ID", category.ParentCategoryID);
            ViewData["PictureID"] = new SelectList(_context.Pictures, "ID", "ID", category.PictureID);
            return View(category);
        }

        // GET: Dashboard/AdminCategories/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var category = await _context.Categories
                .Include(c => c.ParentCategory)
                .Include(c => c.Picture)
                .FirstOrDefaultAsync(m => m.ID == id);
            if (category == null)
            {
                return NotFound();
            }

            return View(category);
        }

        // POST: Dashboard/AdminCategories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.ID == id);
        }
    }
}
