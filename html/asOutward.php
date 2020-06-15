<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
<link rel="stylesheet" type="text/css" href="../css/activesales.css">
<link rel="stylesheet" type="text/css" href="../css/display.css">
<META name="GENERATOR" content="IBM WebSphere Page Designer V4.0 for Windows">
<META http-equiv="Content-Style-Type" content="text/css">
<title>Inventory Management</title>


</HEAD>
<BODY topmargin=0>

<TABLE width="780" border="0" cellpadding="0" cellspacing="0" style="page-break-before: always" valign="top">


        <TR >
                <TD  bgcolor=#B0C4DE   valign=top>
                        <IMG SRC="../images/Inventory.jpg"  ALT="Inventory.jpg" width="25%" height="50%" ALIGN=center  BORDER=0>
<b><font CLASS="css">&nbsp;Inventory</font><font CLASS="css1">Management</font></b><sup><b>TM</b></sup>
                </TD>
        </TR>
        <TR>

                <TD WIDTH=780 valign=top >
                                <table bgcolor="#336699" WIDTH=780 ><tr ><td><span class=title>List Supplier information </span></td><td align=right><a  href="asLogout.html"><span class=headwhite>Logout</span></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td></tr></table>
                                <table WIDTH=780><tr ><td><script src='../jscript/emenu.js'></script></td></tr></table>

                                <!--  <table  align=center border=0  width=780  cellspacing=0>
                                <tr bgcolor="#EBEBEB">
                                        <td><span class=head>Emp ID</span></td><td><span class=head>Emp Name</span></td><td><span class=head>Designation</span></td><td><span class=head>Contact info</span></td><td><span class=head>EDIT</span></td><td><span class=head>&nbsp;</span></td>

                                </tr>
                                <tr >
                                        <td><span class=disp>IVO0001</span></td><td><span class=disp><a href="asEmpInfo.html">Ram</a></span></td><td><span class=disp>MD</span></td><td><span class=disp>Ph:2312273<BR>Fax:2312276<br>Email:ram@ivoli.com</span></td><td><span class=disp><a href=asEditEmp.html>Edit</a></span></td><td><span class=disp><a href=asDeleteEmp.html>Delete</a></span></td>

                                </tr>
                                <tr >
                                        <td><span class=disp>IVO0002</span></td><td><span class=disp>Hari</span></td><td><span class=disp>Software Archtect</span></td><td><span class=disp>Ph:2312273<BR>Fax:2312276<br>Email:hari@ivoli.com</span></td><td><span class=disp>Edit</span></td><td><span class=disp>Delete</span></td>

                                </tr>
                                <tr >
                                        <td><span class=disp>IVO0003</span></td><td><span class=disp>Andrews</span></td><td><span class=disp>Software Trainee</span></td><td><span class=disp>Ph:2312273<BR>Fax:2312276<br>Email:andrew@ivoli.com</span></td><td><span class=disp>Edit</span></td><td><span class=disp>Delete</span></td>

                                </tr>
                                <tr >
                                        <td><span class=disp>IVO0004</span></td><td><span class=disp>Jegan</span></td><td><span class=disp>Software Trainee</span></td><td><span class=disp>Ph:2312273<BR>Fax:2312276<br>Email:jegan@ivoli.com</span></td><td><span class=disp>Edit</span></td><td><span class=disp>Delete</span></td>

                                </tr>

                                </table> -->

<form action="asOutWardProcess.php" method="post">
                                <?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("inventorymgmt", $con);



$result = mysql_query("SELECT * FROM product_info");



echo "Product : <SELECT name='product_id' class='plain'>";
	  
while($row = mysql_fetch_array($result))
  {
 echo "<OPTION VALUE=".$row['pk_product_id'].">".$row['product_name']."</OPTION>";
  }
echo "</SELECT>";

$result = mysql_query("SELECT * FROM customer_info");



echo "Customer : <SELECT name='customer_id' class='plain'>";
	  
while($row = mysql_fetch_array($result))
  {
 echo "<OPTION VALUE=".$row['customer_id'].">".$row['customer_name']."</OPTION>";
  }
echo "</SELECT>";








mysql_close($con);
?>
<input type=text name=qty >
<input type=hidden name=process_type value="O">

<input type=submit value="Send Product to Customer">
</form>


                </TD>
        </TR>
        <TR>
                <TD COLSPAN=2 bgcolor=#EBEBEB class=copyrights align="center">
                          Copy Right All Right Reserved 2012
                </TD>
        </TR>

</TABLE>

</BODY>
</HTML>























