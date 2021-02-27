using DataAccess;
using Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Areas.Dashboard.Controllers
{
    [Area("Dashboard")]
    public class PictureHelperController : Controller
    {
        private readonly IWebHostEnvironment _environment;
        private readonly EcommerceContext _context;
        public PictureHelperController(IWebHostEnvironment environment, EcommerceContext context)
        {
            _environment = environment;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> UploadPicture()
        {
            JsonResult result;
            List<object> pictureJson = new List<object>();
           var pictures= Request.Form.Files;
            for (int i = 0; i < pictures.Count; i++)
            {
                var picture = pictures[i];
                var fileName = Guid.NewGuid() + Path.GetExtension(picture.FileName);
                var wwwRootFolder = Path.Combine(_environment.WebRootPath, "uploads");
                string filePath = Path.Combine(wwwRootFolder, fileName);
                using var fileStream = new FileStream(filePath, FileMode.Create);
                await picture.CopyToAsync(fileStream);
                Picture newPicture = new Picture()
                {
                    URL = fileName
                };
                _context.Add(newPicture);
                 await  _context.SaveChangesAsync();
                pictureJson.Add(new { newPicture.ID, pictureURL = newPicture.URL });
            }
            result = new JsonResult(new { Data = pictureJson });

            return result;
        }
    }
}
