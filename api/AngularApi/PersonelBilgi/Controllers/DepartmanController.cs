using PersonelBilgi.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PersonelBilgi.Controllers
{
    public class DepartmanController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                                select DepartmanId,DepartmanAd from dbo.DEPARTMAN";
            DataTable table = new DataTable();
            using (var con=new SqlConnection(ConfigurationManager.ConnectionStrings["PersonelAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
                using(var da=new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK,table);
        }
        public string Post(Departman dep)
        {
            try
            {
                string query = @"insert into dbo.DEPARTMAN values('" + dep.DepartmanAd + @"')";
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

        public string Put (Departman dep)
        {
            try
            {
                string query = @"update dbo.DEPARTMAN set DepartmanAd='"+dep.DepartmanAd+@"'where DepartmanId="+dep.DepartmanId+@"

                ";
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
        public string Delete (int id)
        {
            try
            {
                string query = @"delete from dbo.DEPARTMAN where DepartmanId=" + id + @" ";
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
    }
}
