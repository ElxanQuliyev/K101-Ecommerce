using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Category:BaseEntity
    {
        public int? ParentCategoryID { get; set; }
        public virtual Category ParentCategory { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? PictureID { get; set; }
        public virtual Picture Picture { get; set; }
        public bool isFeatured { get; set; }
    }
}
