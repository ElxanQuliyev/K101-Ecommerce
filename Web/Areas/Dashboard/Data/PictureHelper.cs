using DataAccess;
using Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Areas.Dashboard.Data
{
    public class PictureHelper:Controller
    {
        private readonly EcommerceContext _context;
        private IWebHostEnvironment Environment;

        public PictureHelper(EcommerceContext context, IWebHostEnvironment _environment)
        {
            _context = context;
            Environment = _environment;
        }
        [HttpPost]
        public JsonResult UploadPicture()
        {
            JsonResult result = new JsonResult(new { });
            List<object> picturesJSON = new List<object>();

            var pictures = Request.Form.Files;
            for(int i = 0; i < pictures.Count; i++)
            {
                var picture = pictures[i];
                var fileName = Guid.NewGuid() + Path.GetExtension(picture.FileName);
                string uploadsFolder = Path.Combine(Environment.WebRootPath, "uploads");
                string filePath = Path.Combine(uploadsFolder, fileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    picture.CopyTo(fileStream);
                }
                var dbPicture = new Picture
                {
                    URL = fileName
                };
                _context.Pictures.Add(dbPicture);
                _context.SaveChanges();
                picturesJSON.Add(new { dbPicture.ID, pictureURL = fileName });
            }
            result = new JsonResult(new { Data = picturesJSON });
            return result;
        }
    }
}



