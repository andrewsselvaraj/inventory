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
<script type="text/javascript" language="javascript" src="employee_validation.js"></script>
<script type="text/javascript" language="JavaScript" src="empform.js"></script>

</HEAD>
<BODY topmargin=0 leftmargin=0>
<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("inventorymgmt", $con);

?>
<form name="validform" action='asAddedEmp.php' method='post' onsubmit="return valForm();">
<TABLE width="780" border="0" cellpadding="0" cellspacing="0" style="page-break-before: always" valign="top">


        <TR >
                <TD  bgcolor=#B0C4DE   valign=top>
                        <IMG SRC="../images/Inventory.jpg"  ALT="Inventory.jpg" width="25%" height="50%" ALIGN=center  BORDER=0>
<b><font CLASS="css">&nbsp;Inventory</font><font CLASS="css1">Management</font></b><sup><b>TM</b></sup>
                </TD>
        </TR>
		
         <TR>

                <TD WIDTH=780 valign=top >
                                <table bgcolor="#336699" WIDTH=780 ><tr ><td><span class=title>Enter Employee information</span></td><td align=right><a  href="asLogout.html"><span class=headwhite>Logout</span></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td></tr></table>
                                <table WIDTH=780><tr ><td><script src='..\jscript\emenu.js'></script></td></tr></table>
                                
                                <table  align=center border=0>
								<tr >
                                        <td><span class=caption>ID</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" name="id"  class="plain">  </td>
                                </tr>
								<tr >
                                        <td><span class=caption>Employee ID</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" id="employeeid" name="employeeid"  class="plain">  </td>
                                </tr>
                                <tr >
                                        <td><span class=caption>First Name</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" id="firstname" name="firstname"  class="plain">  </td>
                                </tr>
                                <tr >
                                        <td><span class=caption>Last Name</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" id="lastname" name="lastname"  class="plain">  </td>
                                </tr>
								<tr >
                                        <td><span class=caption>Date Of Birth</span></td>
                                        <!-- <td> <script>DateInput('orderdate1', true, 'YYYY-MM-DD')</script> -->
										
										<td><INPUT  type="text" size="20" maxlength="50" id="dob" name="dob"  class="plain">   </td>
                                </tr>
								<tr >
                                        <td><span class=caption>Designation</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" id="designation" name="designation" class="plain"> </td>
                                </tr>
                                <!-- <tr >
                                        <td><span class=caption>Designation</span></td>
                                        <td> <select name=designation  class="plain">
						<option value="none"> Select </option>
						<option value="Programmer"> Programmer</option>
						<option value="Developer"> Developer</option>
						<option value="MD"> MD</option>
						</select>
					</td> -->
                                </tr>
                                 <tr >
                                        <td><span class=caption>Join Date</span></td>
                                        <!-- <td><script>DateInput('orderdate2', true, 'YYYY-MM-DD')</script> -->
										
										<td><INPUT  type="text" size="20" maxlength="50" id="joindate" name="joindate"  class="plain"> </td>
                                </tr>
								<tr >
                                        <td><span class=caption>Leaving Date</span></td>
                                        <!-- <td><script>DateInput('orderdate3', true, 'YYYY-MM-DD')</script> -->
										
										<td><INPUT  type="text" size="20" maxlength="50" id="leavingdate" name="leavingdate"  class="plain"></td>
                                </tr>



                                <!--  <tr >
                                        <td><span class=caption  class="plain">Join Date</span></td>
                                        <td><P><FONT COLOR="#888888"><FONT FACE="Microsoft Sans Serif, Verdana, Helvetica, Arial"><FONT SIZE=1 STYLE="font-size: 8pt"><SELECT name=joindd class="plain">
					<OPTION VALUE="Day" SELECTED>Day</OPTION>
					<OPTION VALUE="01">01</OPTION>
					<OPTION VALUE="02">02</OPTION>
					<OPTION VALUE="03">03</OPTION>
					<OPTION VALUE="04">04</OPTION>
					<OPTION VALUE="05">05</OPTION>
					<OPTION VALUE="06">06</OPTION>
					<OPTION VALUE="07">07</OPTION>
					<OPTION VALUE="08">08</OPTION>
					<OPTION VALUE="09">09</OPTION>
					<OPTION VALUE="10">10</OPTION>
					<OPTION VALUE="11">11</OPTION>
					<OPTION VALUE="12">12</OPTION>
					<OPTION VALUE="13">13</OPTION>
					<OPTION VALUE="14">14</OPTION>
					<OPTION VALUE="15">15</OPTION>
					<OPTION VALUE="16">16</OPTION>
					<OPTION VALUE="17">17</OPTION>
					<OPTION VALUE="18">18</OPTION>
					<OPTION VALUE="19">19</OPTION>
					<OPTION VALUE="20">20</OPTION>
					<OPTION VALUE="21">21</OPTION>
					<OPTION VALUE="22">22</OPTION>
					<OPTION VALUE="23">23</OPTION>
					<OPTION VALUE="24">24</OPTION>
					<OPTION VALUE="25">25</OPTION>
					<OPTION VALUE="26">26</OPTION>
					<OPTION VALUE="27">27</OPTION>
					<OPTION VALUE="28">28</OPTION>
					<OPTION VALUE="29">29</OPTION>
					<OPTION VALUE="30">30</OPTION>
					<OPTION VALUE="31">31</OPTION>

				</SELECT><SELECT name=joinmm class="plain">
					<OPTION VALUE="Month" SELECTED>Month</OPTION>
					<OPTION VALUE="January">January</OPTION>
					<OPTION VALUE="February">February</OPTION>
					<OPTION VALUE="March">02</OPTION>
					<OPTION VALUE="April">April</OPTION>
					<OPTION VALUE="May">May</OPTION>
					<OPTION VALUE="June">June</OPTION>
					<OPTION VALUE="July">July</OPTION>
					<OPTION VALUE="August">August</OPTION>
					<OPTION VALUE="September">September</OPTION>
					<OPTION VALUE="October">October</OPTION>
					<OPTION VALUE="November">November</OPTION>
					<OPTION VALUE="December">December</OPTION>
				</SELECT>

                    <SELECT name=joinyy class="plain">
					<OPTION VALUE="Year" SELECTED>Year</OPTION>
					<OPTION VALUE="2013">2013</OPTION>
					<OPTION VALUE="2012">2012</OPTION>
					<OPTION VALUE="2011">2011</OPTION>
					<OPTION VALUE="2010">2010</OPTION>
					<OPTION VALUE="2009">2009</OPTION>
					<OPTION VALUE="2008">2008</OPTION>
					<OPTION VALUE="2007">2007</OPTION>
					<OPTION VALUE="2006">2006</OPTION>
					<OPTION VALUE="2005">2005</OPTION>
					<OPTION VALUE="2004">2004</OPTION>
					<OPTION VALUE="2003">2003</OPTION>
					<OPTION VALUE="2002">2002</OPTION>
					<OPTION VALUE="2001">2001</OPTION>
					<OPTION VALUE="2000">2000</OPTION>
					<OPTION VALUE="1999">1999</OPTION>
					<OPTION VALUE="1998">1998</OPTION>
					<OPTION VALUE="1997">1997</OPTION>
					<OPTION VALUE="1996">1996</OPTION>
					<OPTION VALUE="1995">1995</OPTION>
					<OPTION VALUE="1994">1994</OPTION>
					<OPTION VALUE="1993">1993</OPTION>
					<OPTION VALUE="1992">1992</OPTION>
					<OPTION VALUE="1991">1991</OPTION>
					<OPTION VALUE="1990">1990</OPTION>
					<OPTION VALUE="1989">1989</OPTION>
					<OPTION VALUE="1988">1988</OPTION>
					<OPTION VALUE="1987">1987</OPTION>
					<OPTION VALUE="1986">1986</OPTION>
					<OPTION VALUE="1985">1985</OPTION>
					<OPTION VALUE="1984">1984</OPTION>
					<OPTION VALUE="1983">1983</OPTION>

				</SELECT> -->

				<!--  <INPUT TYPE=TEXT NAME="joinyyyy" SIZE=4 class="plain">  </FONT></FONT></FONT></P> </td>
                                </tr>
                                <tr >
                                        <td><span class=caption>Leaving Date</span></td>
                                        <td>
					<P><FONT COLOR="#888888"><FONT FACE="Microsoft Sans Serif, Verdana, Helvetica, Arial">
					<FONT SIZE=1 STYLE="font-size: 8pt">
					<SELECT name=leavingdd class="plain">
					<OPTION VALUE="Day" SELECTED>Day</OPTION>
					<OPTION VALUE="01">01</OPTION>
					<OPTION VALUE="02">02</OPTION>
					<OPTION VALUE="03">03</OPTION>
					<OPTION VALUE="04">04</OPTION>
					<OPTION VALUE="05">05</OPTION>
					<OPTION VALUE="06">06</OPTION>
					<OPTION VALUE="07">07</OPTION>
					<OPTION VALUE="08">08</OPTION>
					<OPTION VALUE="09">09</OPTION>
					<OPTION VALUE="10">10</OPTION>
					<OPTION VALUE="11">11</OPTION>
					<OPTION VALUE="12">12</OPTION>
					<OPTION VALUE="13">13</OPTION>
					<OPTION VALUE="14">14</OPTION>
					<OPTION VALUE="15">15</OPTION>
					<OPTION VALUE="16">16</OPTION>
					<OPTION VALUE="17">17</OPTION>
					<OPTION VALUE="18">18</OPTION>
					<OPTION VALUE="19">19</OPTION>
					<OPTION VALUE="20">20</OPTION>
					<OPTION VALUE="21">21</OPTION>
					<OPTION VALUE="22">22</OPTION>
					<OPTION VALUE="23">23</OPTION>
					<OPTION VALUE="24">24</OPTION>
					<OPTION VALUE="25">25</OPTION>
					<OPTION VALUE="26">26</OPTION>
					<OPTION VALUE="27">27</OPTION>
					<OPTION VALUE="28">28</OPTION>
					<OPTION VALUE="29">29</OPTION>
					<OPTION VALUE="30">30</OPTION>
					<OPTION VALUE="31">31</OPTION>

				</SELECT><SELECT name=leavingmm class="plain">
					<OPTION VALUE="Month" SELECTED>Month</OPTION>
					<OPTION VALUE="January">January</OPTION>
					<OPTION VALUE="February">February</OPTION>
					<OPTION VALUE="March">02</OPTION>
					<OPTION VALUE="April">April</OPTION>
					<OPTION VALUE="May">May</OPTION>
					<OPTION VALUE="June">June</OPTION>
					<OPTION VALUE="July">July</OPTION>
					<OPTION VALUE="August">August</OPTION>
					<OPTION VALUE="September">September</OPTION>
					<OPTION VALUE="October">October</OPTION>
					<OPTION VALUE="November">November</OPTION>
					<OPTION VALUE="December">December</OPTION>
				</SELECT>

                    <SELECT name=leavingyy class="plain">
					<OPTION VALUE="Year" SELECTED>Year</OPTION>
					<OPTION VALUE="2013">2013</OPTION>
					<OPTION VALUE="2012">2012</OPTION>
					<OPTION VALUE="2011">2011</OPTION>
					<OPTION VALUE="2010">2010</OPTION>
					<OPTION VALUE="2009">2009</OPTION>
					<OPTION VALUE="2008">2008</OPTION>
					<OPTION VALUE="2007">2007</OPTION>
					<OPTION VALUE="2006">2006</OPTION>
					<OPTION VALUE="2005">2005</OPTION>
					<OPTION VALUE="2004">2004</OPTION>
					<OPTION VALUE="2003">2003</OPTION>
					<OPTION VALUE="2002">2002</OPTION>
					<OPTION VALUE="2001">2001</OPTION>
					<OPTION VALUE="2000">2000</OPTION>
					<OPTION VALUE="1999">1999</OPTION>
					<OPTION VALUE="1998">1998</OPTION>
					<OPTION VALUE="1997">1997</OPTION>
					<OPTION VALUE="1996">1996</OPTION>
					<OPTION VALUE="1995">1995</OPTION>
					<OPTION VALUE="1994">1994</OPTION>
					<OPTION VALUE="1993">1993</OPTION>
					<OPTION VALUE="1992">1992</OPTION>
					<OPTION VALUE="1991">1991</OPTION>
					<OPTION VALUE="1990">1990</OPTION>
					<OPTION VALUE="1989">1989</OPTION>
					<OPTION VALUE="1988">1988</OPTION>
					<OPTION VALUE="1987">1987</OPTION>
					<OPTION VALUE="1986">1986</OPTION>
					<OPTION VALUE="1985">1985</OPTION>
					<OPTION VALUE="1984">1984</OPTION>
					<OPTION VALUE="1983">1983</OPTION>

				</SELECT> -->

					<!--  <SELECT name=leavedd class="plain">
					<OPTION VALUE="01" SELECTED>01</OPTION>
					</SELECT>
					<SELECT name=leavemm class="plain">
					<OPTION VALUE="january" SELECTED>January</OPTION>
					</SELECT><INPUT TYPE=TEXT NAME="leaveyy" SIZE=4 class="plain">  </FONT></FONT></FONT></P> </td>
                                </tr> -->
                                <tr >
                                        <td><span class=caption>Address</span></td>
                                        <td><textarea id=address name=address class="plain"></textarea>  </td>
                                </tr>
                                <tr >
                                        <td><span class=caption>State</span></td>
                                        <td><input type=textbox id=state name=state class="plain">  </td>
                                </tr>
								<tr >
                                        <td><span class=caption>Country</span></td>
                                        <td><INPUT  type="text" size="20" maxlength="50" id=country name=country class="plain"> </td>
                                </tr>
                                <!-- <tr >
                                        <td><span class=caption>Country</span></td>
                                        <td> <select name=country class="plain"><option value="none"> Select </option><option value="india"> INDIA </option><option value="Malaysia"> Malaysia </option></select></td>
                                </tr> -->
                                <tr >
                                        <td><span class=caption>Phone</span></td>
                                        <td><input type=textbox id=phone name=phone class="plain">  </td>
                                </tr>
                                <tr >
                                        <td><span class=caption>Fax </span></td>
                                        <td><input type=textbox id=fax name=fax class="plain">  <span class=caption> (Optional) </span></td>
                                </tr>
                                <tr >
                                        <td><span class=caption>E Mail</span></td>
                                        <td><input type=textbox id=email name=email class="plain">  </td>
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
                        Copy Right All Right Reserved 2012.
                </TD>
        </TR>

</TABLE>
</form>
</BODY>
</HTML>
