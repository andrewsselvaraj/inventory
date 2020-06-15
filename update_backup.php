<?php session_start(); ?>

 

<html>
<head>
<title>www.efreelearn.com</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

</head>
<?php

$conn = mysql_connect("localhost","root","") or die("Unable to connect");
mysql_select_db("inventorymgmt");
if( !(mysql_select_db("inventorymgmt")))
{
 die("Unable to open database");
}
?>

 <table width="557" cellpadding="3" cellspacing="0" align="center" border="1" bordercolor="#d6cfb5"> 

 <?php
  
 
$supplier_id = "";
if(isset($_POST['supplier_id'])){
$supplier_id = $_POST['supplier_id'];
}
//$supplier_id = $_POST["supplier_id"];
       //$supplier_name = $_POST["supplier_name"];
	  // $supplier_type = $_POST["supplier_type"];
	   //$supplier_detail = $_POST["supplier_detail"];
	   //$website = $_POST["website"];
	   //$created_by = $_POST["created_by"];
	   //$created_date = $_POST["created_date"];
	   //$status = $_POST["status"];
       $sql = "select * from supplier_info where supplier_id='$supplier_id'";
       $result = mysql_query($sql, $conn) or die("Error in query: ".mysql_error());
       $rows = mysql_num_rows($result) ;      
       
       //while($row=mysql_fetch_array($result))
       //{
       //$main_id = $_POST["id"];
	   
       while ($row= mysql_fetch_array($result)) { 
$id = $row['id']; //use a ' instead of " 
$supplier_id = $row['supplier_id']; //use a ' instead of " 
$supplier_name = $row['supplier_name'];
$supplier_type = $row['supplier_type'];//use a ' instead of "
$supplier_detail = $row['supplier_detail'];
$website = $row['website'];
$created_by = $row['created_by'];
$created_date = $row['created_date'];
$status = $row['status'];
} //close this here.

?>


       <!-- $query = "SELECT column FROM table"; 
$result = mysql_query($query, $conn) or die("Error in query: ".mysql_error()); 
$rows = mysql_num_rows($result); 
$row = mysql_fetch_assoc($result); // or $row = mysql_fetch_array($result)
  -->
       
       <form name='pd' action='addToCart.php' method='post'>
       <tr><td colspan=3>id<input type=text name='id' value="<? php echo $rows['id'];?>">
	   <tr><td colspan=3>supplier_id<input type=text name=supplier_id value="<? php echo $rows['supplier_id'];?>">
	   <tr><td colspan=3>supplier_name<input type=text name=supplier_name value="<? php echo $rows['supplier_name'];?>">
	   <tr><td colspan=3>supplier_type<input type=text name=supplier_type value="<? php echo $rows['supplier_type'];?>">
	   <tr><td colspan=3>supplier_detail<input type=text name=supplier_detail value="<? php echo $rows['supplier_detail'];?>">
	   <tr><td colspan=3>website<input type=text name=website value="<? php echo $rows['website'];?>">
	   <tr><td colspan=3>created_by<input type=text name=created_by value="<? php echo $rows['created_by'];?>">
	   <tr><td colspan=3>created_date<input type=text name=created_date value="<? php echo $rows['created_date'];?>">
	   <tr><td colspan=3>status<input type=text name=status value="<? php echo $rows['status'];?>">
       
       <input type=submit></td></tr></form>
        
       
       

 </table>                                                                
</body>

</html>