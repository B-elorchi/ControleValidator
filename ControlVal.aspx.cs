using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
namespace MasterPage
{
   
    public partial class ControlVal : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
             
           if (TextBox1.Text !="" && TextBox2.Text != "" && TextBox3.Text!="" && TextBox4.Text != "")
            {
                if (TextBox3.Text == TextBox4.Text)
                {

                    SqlConnection conn = new SqlConnection(@"Data Source=DESKTOP-97I5EUJ;Initial Catalog=S ; Integrated Security=true;");

                    string insertQuery = "insert into NewStudent values (@studentname,@passwords,@emailid)";
                    SqlCommand cmd = new SqlCommand(insertQuery, conn);
                    cmd.Parameters.AddWithValue("@studentname", TextBox1.Text);
                    cmd.Parameters.AddWithValue("@passwords", TextBox2.Text);
                    cmd.Parameters.AddWithValue("@emailid", TextBox3.Text);

                    conn.Open();
                    cmd.ExecuteNonQuery();


                    Response.Write("Student registeration Successfully!!!thank you");
                    Response.Redirect("Login.aspx");
                    conn.Close();
                }
                else
                {
                    Response.Write("please confirm your password");
                }


            }
            else
            {
                Response.Write("please saisie votre donneé");
            }
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            Response.Redirect("Login.aspx");
        }
    }
}