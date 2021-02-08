using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Helper
{
    public static class PictureHelper
    {
        public static Picture GetCoverImage(List<ProductPicture> productPictures,int thumbnailID)
        {
            var coverImage = new Picture();
            if(productPictures!=null && productPictures.Count > 0)
            {
                var selectedCoverImage = productPictures.FirstOrDefault(p => p.PictureID == thumbnailID);
                coverImage = selectedCoverImage != null ? selectedCoverImage.Picture : productPictures.First().Picture;
            }
            return coverImage;
        }
    }
}
