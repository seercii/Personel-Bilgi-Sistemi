using PersonelBilgi.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;

namespace PersonelBilgi.Controllers
{
    public class PersonelController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                                select PersonelId,PersonelAd,Departman,convert(varchar(10),GirisTarihi,120) as GirisTarihi,FotografAd from dbo.PERSONEL";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["PersonelAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Personel per)
        {
            try
            {
                string query = @"insert into dbo.PERSONEL values('" + per.PersonelAd + @"'
                                                                ,'"+per.Departman+@"'
                                                                ,'"+per.GirisTarihi+@"'
                                                                ,'"+per.FotografAd+@"')";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["PersonelAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Ekleme Başarılı";
            }
            catch (Exception)
            {
                return "Ekleme Başarısız";
            }
        }

        public string Put(Personel per)
        {
            try
            {
                string query = @"update dbo.PERSONEL set PersonelAd='" + per.PersonelAd + @"'
                                                        ,Departman='" + per.Departman + @"'
                                                        ,GirisTarihi='" + per.GirisTarihi + @"'
                                                        ,FotografAd='" + per.FotografAd + @"'
                                                        where PersonelId=" + per.PersonelId + @" ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["PersonelAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Güncelleme Başarılı";
            }
            catch (Exception)
            {
                return "Güncelleme Başarısız";
            }
        }
        public string Delete(int id)
        {
            try
            {
                string query = @"delete from dbo.PERSONEL where PersonelId=" + id + @" ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["PersonelAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Silme Başarılı";
            }
            catch (Exception)
            {
                return "Silme Başarısız";
            }
        }
        [Route("api/Personel/GetAllDepartmanAdlari")]
        [HttpGet]
        public HttpResponseMessage GetAllDepartmanAdlari()
        {
            string query = @"select DepartmanAd from dbo.DEPARTMAN";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["PersonelAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        [Route("api/Personel/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath=HttpContext.Current.Server.MapPath("~/Photos/"+filename);
                postedFile.SaveAs(physicalPath);
                return filename;
            }
            catch (Exception)
            {
                return "genel.png";
            }
        }
    }
}
