<?php session_start(); ?>
<?php

$conn = mysql_connect("localhost","root","") or die("Unable to connect");
mysql_select_db("inventorymgmt");
if( !(mysql_select_db("inventorymgmt")))
{
 die("Unable to open database");
}
?>

<!--  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">-->

<HTML>
<HEAD>
<link rel="stylesheet" type="text/css" href="../css/activesales.css">
<link rel="stylesheet" type="text/css" href="../css/display.css">
<META name="GENERATOR" content="IBM WebSphere Page Designer V4.0 for Windows">
<META http-equiv="Content-Style-Type" content="text/css">
<title>Inventory Management</title>


</HEAD>
<BODY topmargin=0>



<form >
<TABLE width="780" border="0" cellpadding="0" cellspacing="0" style="page-break-before: always" valign="top">


        <TR >
                <TD  bgcolor=#B0C4DE   valign=top>
                        <IMG SRC="../images/Inventory.jpg"  ALT="Inventory.jpg" width="25%" height="50%" ALIGN=center  BORDER=0>
<b><font CLASS="css">&nbsp;Inventory</font><font CLASS="css1">Management</font></b><sup><b>TM</b></sup>
                </TD>
        </TR>
        <TR>

                </TD>
                <TD WIDTH=780 valign=top >
                                <table bgcolor="#336699" WIDTH=780 ><tr ><td><span class=title>View Employee information </span></td></tr></table>
                                <table bgcolor="#EBEBEB" WIDTH=780><tr ><td><script src='..\jscript\emenu.js'></script></td></tr></table>

                                <table  align=center border=0  width=780  cellspacing=0>
				<tr align=center><td>&nbsp</td></tr>


                                </table>				

<?php
$CONS_Order = 1;
$customerid = $_POST['customerid'];
$customername= $_POST['customername'];
$productid= $_POST['productid'];
$productname= $_POST['productname'];
$datepurchased = $_POST['orderdate'];
$address= $_POST['address'];
$state= $_POST['state'];
$country= $_POST['country'];
$phone= $_POST['phone'];


$sql="INSERT INTO customer(customerid,customername,productid,productname,datepurchased,address,state,country,phone) VALUES ('$customerid','$customername','$productid','$productname','$datepurchased','$address','$state','$country', '$phone')";

 

$results = mysql_query($sql) or die 

("Could not execute query : ".$sql . mysql_error());


?> 

                                <table  align=center border=0  width=630  cellspacing=0>
				<tr align=center><td><span class=head>Information Added Successfully<span></td></tr>


                                </table>
                                <table  align=center border=0  width=630  cellspacing=0>
				<tr align=center><td><a href=javascript:history.go(-1)>Goback</a></td></tr>


                                </table>				

                </TD>
        </TR>
        <TR>
                <TD COLSPAN=2 bgcolor=#EBEBEB class=copyrights align="center">
                       &nbsp;&nbsp; Copy Right All Right Reserved 2012
                </TD>
        </TR>

</TABLE>
</form>
</BODY>
</HTML>
