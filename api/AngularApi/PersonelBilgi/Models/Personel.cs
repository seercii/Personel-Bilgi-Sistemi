using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonelBilgi.Models
{
    public class Personel
    {
        public int PersonelId { get; set; }
        public string PersonelAd { get; set; }
        public string Departman { get; set; }
        public string GirisTarihi { get; set; }
        public string FotografAd { get; set; }
    }
}