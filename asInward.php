<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
<HEAD>
<link rel="stylesheet" type="text/css" href="../css/activesales.css">
<link rel="stylesheet" type="text/css" href="../css/display.css">
<META name="GENERATOR" content="IBM WebSphere Page Designer V4.0 for Windows">
<META http-equiv="Content-Style-Type" content="text/css">
<title>Inventory Management</title>
<script type="text/javascript" src="calendarDateInput.js">

/***********************************************
* Jason's Date Input Calendar- By Jason Moon http://calendar.moonscript.com/dateinput.cfm
* Script featured on and available at http://www.dynamicdrive.com
* Keep this notice intact for use.
***********************************************/

</script>

</HEAD>
<BODY topmargin=0>
<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("inventorymgmt", $con);

?>

<form action='asAddedSup.php' method='post'>
<TABLE width="780" border="0" cellpadding="0" cellspacing="0" style="page-break-before: always" valign="top">


        <TR >

                <TD  bgcolor=#B0C4DE   valign=top>
                        <IMG SRC="../images/Inventory.jpg"  ALT="Inventory.jpg" width="25%" height="50%" ALIGN=center  BORDER=0>
<b><font CLASS="css">&nbsp;Inventory</font><font CLASS="css1">Management</font></b><sup><b>TM</b></sup>
                </TD>
        </TR>
        <TR>
                
                <TD WIDTH=780 valign=top >
                                <table bgcolor="#336699" WIDTH=780 ><tr ><td><span class=title>Inward information</span></td><td align=right><a  href="asLogout.html"><span class=headwhite>Logout</span></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td></tr></table>
                                <table WIDTH=780><tr ><td><script src='..\jscript\emenu.js'></script></td></tr></table>

                                <table  align=center border=0>
                                <tr >
								<td><span class=caption>Supplier name</span></td>
                                        <td> <select name="supplierid" class="plain"><option value="select" selected>select</option><option value="">  </option><option value="">  </option></select></td>
								
								
								<!-- 
                                        <td><span class=caption>Supplier id</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" name="supplierid" class="plain">  </td> -->
                                </tr>
                                <tr >
                                        <td><span class=caption>Supplier name</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" name="suppliername" class="plain">  </td>
                                </tr>
								 <tr >
                                        <td><span class=caption>product id</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" name="productid" class="plain">  </td>
                                </tr>
								 <tr >
                                      <td><span class=caption>Product name</span></td>
                                        <td> <select name="productname" class="plain"><option value="select" selected>select</option><option value="">  </option><option value="">  </option></select></td>

                                        <!-- <td><span class=caption>product name</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" name="productname" class="plain">  </td> -->
                                </tr>
                                
								<tr >
                                        <td><span class=caption>date supplied</span></td>
                                        <td><script>DateInput('orderdate', true, 'YYYY-MM-DD')</script>
										
										<!-- <INPUT  type="text" size="20" maxlength="50" name="datesupplied" class="plain">   --></td>
                                </tr>

                                <tr >
                                        <td><span class=caption>Address</span></td>
                                        <td><textarea name="address" class="plain"></textarea>  </td>
                                </tr>
                                <tr >
                                        <td><span class=caption>State</span></td>
                                        <td><input type=textbox name="state" class="plain">  </td>
                                </tr>
                                <tr >
                                        <td><span class=caption>Country</span></td>
                                        <td> <select name="country" class="plain"><option value="india"> INDIA </option><option value="Malaysia"> Malaysia </option></select></td>
                                </tr>
                                <tr >
                                        <td><span class=caption>Phone no</span></td>
                                        <td><input type=textbox name="phone" class="plain">  </td>
                                </tr>
                                          
                                <tr >
                                        <td align=right><span class=caption><input Type=submit name=Submit value=Submit class="plain"></span></td>
                                        <td><span class=caption><input Type=reset name=reset value=Reset class="plain"></span></td>
                                </tr>
                                </table>
                </TD>
        </TR>
        <TR>
                <TD COLSPAN=2 bgcolor=#EBEBEB class=copyrights align="center">
                        Copy Right All Right Reserved 2012
                </TD>
        </TR>

</TABLE>
</form>
</BODY>
</HTML>
