<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// Create database
if (mysql_query("CREATE DATABASE inventorymgmt1",$con))
  {
  echo "Database created";
  }
else
  {
  echo "Error creating database: " . mysql_error();
  }

// Create table
mysql_select_db("inventorymgmt1",$con);
$sql = "CREATE TABLE employee1
(
employeeid varchar(10),
firstname varchar(20),
lastname varchar(20),
dob varchar(20),
designation varchar(20),
joindate varchar(20),
leavingdate varchar(20),
address varchar(100),
state varchar(10),
country varchar(15),
phone varchar(15),
fax varchar(18),
email varchar(20)
edit varchar(10),
delete varchar(10)
)";

// Execute query
mysql_query($sql,$con);

mysql_close($con);
?>