<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="MasterPage.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 149%;
        }
        .auto-style2 {
            width: 211px;
        }
        .auto-style3 {
            width: 211px;
            height: 26px;
        }
        .auto-style4 {
            height: 26px;
            width: 363px;
        }
        .auto-style5 {
            width: 363px;
        }
    </style>
</head>
<body style="margin-right: 298px">
    <h1>login in your acount </h1>
    <form id="form1" runat="server">
        <table class="auto-style1">
            <tr>
                <td class="auto-style3">
                    <asp:Label ID="Label1" runat="server" Text="User Name"></asp:Label>
                </td>
                <td class="auto-style4">
                    <asp:TextBox ID="TextBox1" runat="server" Width="191px"></asp:TextBox>
                   
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextBox1" ErrorMessage="this champ obligatoir" ForeColor="Red"></asp:RequiredFieldValidator>
                   
                </td>
            </tr>
            <tr>
                <td class="auto-style3">
                    <asp:Label ID="Label2" runat="server" Text="Pasword"></asp:Label>
                </td>
                
                <td class="auto-style4">
                    <asp:TextBox ID="TextBox2" runat="server" Width="190px" ></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" ControlToValidate="TextBox2" runat="server" ErrorMessage="Password obligatoire" ForeColor="#CC0000"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style2">
                    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Login" />
                </td>
                <td class="auto-style5">
                    <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="Create acount" />
                </td>
            </tr>
            <tr>
                <td class="auto-style2">&nbsp;</td>
                <td class="auto-style5">&nbsp;</td>
            </tr>
        </table>
    </form>
        
    </body>
</html>
