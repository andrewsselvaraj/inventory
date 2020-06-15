<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// Create database
//if (mysql_query("CREATE DATABASE inventorymgmt",$con))
  //{
  //echo "Database created";
  //}
//else
  //{
  //echo "Error creating database: " . mysql_error();
  //}

// Create table
mysql_select_db("inventorymgmt",$con);
$sql = "CREATE TABLE supplier
(
supplierid varchar(10),
suppliername varchar(20),
productid varchar(20),
productname varchar(20),
datesupplied varchar(20),
address varchar(100),
state varchar(10),
country varchar(15),
phone varchar(15)

)";

// Execute query
mysql_query($sql,$con);

mysql_close($con);
?>