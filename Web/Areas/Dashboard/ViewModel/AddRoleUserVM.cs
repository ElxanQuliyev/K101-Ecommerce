using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Areas.Dashboard.ViewModel
{
    public class AddRoleUserVM
    {
        public K101User K101User { get; set; }
        public IEnumerable<string> Roles { get; set; }
    }
}
