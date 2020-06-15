<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
// Create table
mysql_select_db("inventorymgmt",$con);
$sql = "CREATE TABLE IF NOT EXISTS `customer_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` varchar(20) NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `customer_type` varchar(25) NOT NULL,
  `customer_detail` varchar(100) NOT NULL,
  `website` varchar(50) NOT NULL,
  `created_by` varchar(25) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(1) NOT NULL,
  PRIMARY KEY (`id`)
)";
// Execute query
mysql_query($sql,$con);

mysql_close($con);
?>