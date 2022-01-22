using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

namespace MasterPage
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
           if(TextBox1.Text != "" && TextBox2.Text != "")
            {
                SqlConnection conn = new SqlConnection(@"Data Source=DESKTOP-97I5EUJ;Initial Catalog=S ; Integrated Security=true;");
                string user = TextBox1.Text;
                string pass = TextBox2.Text;

                conn.Open();
                string insertQuery = "select UserName , Passwords from NewStudent where UserName='" + user + "' and Passwords = '" + pass + "' ";
                SqlCommand cmd = new SqlCommand(insertQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    Response.Redirect("Templete/index.html");
                }
                else
                {
                    Response.Write("your data incroct");
                }
                conn.Close();
            }
            else
            {
                Response.Write("please saisie votre donneé");
            }
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            Response.Redirect("ControlVal.aspx");
        }
    }
}