using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AkilliWebApi.Data
{
    public class AnaGrup
    {
        [Display(Name = "kod")]
        public string kod { get; set; }

        [Display(Name = "tanim")]
        public string tanim { get; set; }
    }
}