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
$sql = "CREATE TABLE product
(
product_id varchar(10),
product_name varchar(20),
product_detail varchar(20),
model varchar(20),
material_type varchar(20),
quantity varchar(100),
calculation_unit varchar(10),
current_rate varchar(15),
created_by varchar(15),
created_date varchar(15),
status varchar(50)
)";

// Execute query
mysql_query($sql,$con);

mysql_close($con);
?>