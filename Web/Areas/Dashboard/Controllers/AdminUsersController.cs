using Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Areas.Dashboard.ViewModel;

namespace Web.Areas.Dashboard.Controllers
{
    [Area("Dashboard")]
    [Authorize(Roles = "Admin,Moderator")]
    public class AdminUsersController : Controller
    {
        private readonly UserManager<K101User> _userManager;
        private readonly RoleManager<IdentityRole> _rolManager;
        public AdminUsersController(UserManager<K101User> userManager, RoleManager<IdentityRole> rolManager)
        {
            _userManager = userManager;
            _rolManager = rolManager;
        }

        public IActionResult Index()
        {
            return View(_userManager.Users.ToList());
        }
        [Authorize(Roles ="Admin")]
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }
            K101User user = await _userManager.FindByIdAsync(id);
            if (user == null) return NotFound();
            return View(user);
        }

        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(string id,string role)
        {
            if (id == null)
            {
                return NotFound();
            }
            K101User user = await _userManager.FindByIdAsync(id);
            if (user == null) return NotFound();
            IdentityResult result = await _userManager.RemoveFromRoleAsync(user, role);
            if (result.Succeeded)
            {
                return RedirectToAction(nameof(Edit), new { id });
            }
            return View(user);
        }


        [Authorize(Roles ="Admin")]
        public async Task<IActionResult> AddRole(string id)
        {
            if (id == null)
            {
                return NotFound();
            }
            K101User user = await _userManager.FindByIdAsync(id);
            if (user == null) return NotFound();
            var userRoles = (await _userManager.GetRolesAsync(user)).ToList();
            var allRoles = _rolManager.Roles.Select(r => r.Name).ToList();
            AddRoleUserVM vm = new AddRoleUserVM()
            {
                K101User = user,
                Roles = allRoles.Except(userRoles)
            };
            return View(vm);
        }
        [HttpPost]
        [Authorize(Roles = "Admin")]

        public async Task<IActionResult> AddRole(string id,string role)
        {
            if (id == null)
            {
                return NotFound();
            }
            K101User user = await _userManager.FindByIdAsync(id);
            if (user == null) return NotFound();

            var result= await _userManager.AddToRoleAsync(user,role);
            if (result.Succeeded)
            {
                return RedirectToAction(nameof(Index), new { id = id });
            }
            return RedirectToAction(nameof(AddRole), new { id = id });
        }
    }
    }
