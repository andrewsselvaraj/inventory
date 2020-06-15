<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// Create table
mysql_select_db("inventorymgmt",$con);
$sql = "CREATE TABLE IF NOT EXISTS `product_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` varchar(20) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `dob` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `designation` varchar(50) NOT NULL,
  `join_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `leave_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `address` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phone` int(15) NOT NULL,
  `fax` int(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`))";
// Execute query
mysql_query($sql,$con);
echo ("Employee table created");
mysql_close($con);
?>