-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 02, 2013 at 12:34 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `inventorymgmt`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch_info`
--

CREATE TABLE IF NOT EXISTS `branch_info` (
  `pk_branch_id` varchar(50) NOT NULL,
  `fk_company_id` varchar(50) NOT NULL,
  `branch_name` varchar(50) NOT NULL,
  `branch_poc` varchar(50) NOT NULL,
  `branch_detail` varchar(200) NOT NULL,
  `website` varchar(100) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL,
  `last_updated_datetime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` varchar(1) NOT NULL,
  PRIMARY KEY (`pk_branch_id`),
  KEY `FK_branch_info_company_info` (`fk_company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch_info`
--

INSERT INTO `branch_info` (`pk_branch_id`, `fk_company_id`, `branch_name`, `branch_poc`, `branch_detail`, `website`, `created_by`, `created_date`, `last_updated_by`, `last_updated_datetime`, `status`) VALUES
('11', '1', 'jhkjh', 'kjhk', '', '', '', '2013-02-19 00:21:28', '', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- Table structure for table `company_info`
--

CREATE TABLE IF NOT EXISTS `company_info` (
  `pk_company_id` varchar(50) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `company_type` varchar(25) NOT NULL,
  `company_detail` varchar(100) NOT NULL,
  `website` varchar(50) NOT NULL,
  `created_by` varchar(25) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL,
  `last_updated_datetime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` varchar(1) NOT NULL,
  PRIMARY KEY (`pk_company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company_info`
--

INSERT INTO `company_info` (`pk_company_id`, `company_name`, `company_type`, `company_detail`, `website`, `created_by`, `created_date`, `last_updated_by`, `last_updated_datetime`, `status`) VALUES
('1', 'JUSTIN', 'HOARDING', 'oiyy', 'iuyiu', 'yiu', '2013-02-19 00:19:49', 'nmn', '0000-00-00 00:00:00', '1');

-- --------------------------------------------------------

--
-- Table structure for table `customer_info`
--

CREATE TABLE IF NOT EXISTS `customer_info` (
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=789793 ;

--
-- Dumping data for table `customer_info`
--

INSERT INTO `customer_info` (`id`, `customer_id`, `customer_name`, `customer_type`, `customer_detail`, `website`, `created_by`, `created_date`, `status`) VALUES
(789789, '797987', 'andrew', '89798', '7897 gahgsdhags', 'and@email.com', '89798', '2013-02-18 10:30:00', '1'),
(789790, '78', 'uyiuyui', 'uyuy', 'uyu as', 'and@email.com', 'uyu', '2013-02-18 10:30:00', '1'),
(789791, '2222222wwww', 'wwwwwwwwwwww', '98798', '7987  asdasdasdas ', 'andrew_india@yahoo.com', '98798', '2013-10-02 00:00:00', '1'),
(789792, 'ffdsd', 'sdds', 'gfdsd', 'fdfds', 'fdfd@ddd.df', 'dxfgdgf', '2013-12-13 00:00:00', '1');

-- --------------------------------------------------------

--
-- Table structure for table `employee_info`
--

CREATE TABLE IF NOT EXISTS `employee_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` varchar(20) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `dob` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `join_date` varchar(50) NOT NULL,
  `leave_date` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `fax` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `employee_info`
--

INSERT INTO `employee_info` (`id`, `employee_id`, `first_name`, `last_name`, `dob`, `designation`, `join_date`, `leave_date`, `address`, `state`, `country`, `phone`, `fax`, `email`) VALUES
(1, 'uoiuoi', 'uoiu', 'oiuoi', '02/02/2012', 'uoiu', '02/02/2012', '02/02/2012', 'iouoi', 'uoiu', 'www', '0123456789', '0123456789', 'andrew_india@yahoo.com'),
(2, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, 'fdfd', 'fdsfd', 'fd', '09/09/2013', 'fsd', '09/09/2013', '09/09/2013', 'dcsasacsacsac sa sa sa sa', 'dww', 'dws', '9393939393', '3333333333', 'fd@ddd.dd'),
(4, '7687687', 'jjhghjgjhghjg', 'oqiuweoiqu', '02/02/2012', '6876', '02/02/2013', '02/02/2013', '78687', '6876', '87687', '9444410865', '8980808080', 'andrew@yahoo.com');

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE IF NOT EXISTS `inventory` (
  `pk_inventory_id` int(50) NOT NULL AUTO_INCREMENT,
  `fk_product_id` varchar(50) NOT NULL,
  `fk_company_id` varchar(50) NOT NULL,
  `fk_branch_id` varchar(50) NOT NULL,
  `customer_id` varchar(20) NOT NULL,
  `supplier_id` varchar(20) NOT NULL,
  `quantity` int(5) NOT NULL,
  `calculation_unit` varchar(4) NOT NULL,
  `io_type` varchar(1) NOT NULL,
  `created_by` varchar(25) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL,
  `last_updated_datetime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` varchar(1) NOT NULL,
  PRIMARY KEY (`pk_inventory_id`),
  KEY `FK_inventory_product_info` (`fk_product_id`),
  KEY `FK_inventory_company_info` (`fk_company_id`),
  KEY `FK_inventory_branch_info` (`fk_branch_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`pk_inventory_id`, `fk_product_id`, `fk_company_id`, `fk_branch_id`, `customer_id`, `supplier_id`, `quantity`, `calculation_unit`, `io_type`, `created_by`, `created_date`, `last_updated_by`, `last_updated_datetime`, `status`) VALUES
(35, '1231', '1', '11', '-', 'qqqqq', 2, '', 'I', 'created_by', '2013-10-02 16:22:32', '', '0000-00-00 00:00:00', '1'),
(36, '1231', '1', '11', '-', '787ss', 111, '', 'I', 'created_by', '2013-10-02 16:25:42', '', '0000-00-00 00:00:00', '1'),
(40, 'GENS', '1', '11', '797987', '', 9, '', 'O', 'created_by', '2013-12-12 00:00:00', '', '0000-00-00 00:00:00', '1'),
(41, '1231', '1', '11', '-', 'qqqqq', 9999, '', 'I', 'created_by', '2013-10-02 16:42:36', '', '0000-00-00 00:00:00', '1'),
(42, '1231', '1', '11', '797987', '', 9, '', 'O', 'created_by', '2013-12-12 00:00:00', '', '0000-00-00 00:00:00', '1'),
(43, '1231', '1', '11', '797987', '', 88, '', 'O', 'created_by', '2013-12-12 00:00:00', '', '0000-00-00 00:00:00', '1'),
(44, '1231', '1', '11', '797987', '', 88, '', 'O', 'created_by', '2013-12-12 00:00:00', '', '0000-00-00 00:00:00', '1'),
(45, '1231', '1', '11', '797987', '', 9, '', 'O', 'created_by', '2013-12-12 00:00:00', '', '0000-00-00 00:00:00', '1'),
(46, '1231', '1', '11', '', '797987', 33, '', 'O', 'created_by', '2013-12-12 00:00:00', '', '0000-00-00 00:00:00', '1'),
(47, '1231', '1', '11', '', '797987', 33, '', 'O', 'created_by', '2013-12-12 00:00:00', '', '0000-00-00 00:00:00', '1'),
(48, '1231', '1', '11', '797987', '-', 33, '', 'O', 'created_by', '2013-12-12 00:00:00', '', '0000-00-00 00:00:00', '1');

-- --------------------------------------------------------

--
-- Table structure for table `product_info`
--

CREATE TABLE IF NOT EXISTS `product_info` (
  `pk_product_id` varchar(50) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_detail` varchar(100) NOT NULL,
  `model` varchar(50) NOT NULL,
  `material_type` varchar(50) NOT NULL,
  `quantity` int(5) NOT NULL,
  `calculation_unit` varchar(4) NOT NULL,
  `current_rate` decimal(8,0) NOT NULL,
  `created_by` varchar(25) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL,
  `last_updated_datetime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` varchar(1) NOT NULL,
  PRIMARY KEY (`pk_product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_info`
--

INSERT INTO `product_info` (`pk_product_id`, `product_name`, `product_detail`, `model`, `material_type`, `quantity`, `calculation_unit`, `current_rate`, `created_by`, `created_date`, `last_updated_by`, `last_updated_datetime`, `status`) VALUES
('1231', 'yutuyt', 'tuyt', 'yutyu', 'tuyt', 0, 'tuyt', '0', 'andrew', '2013-10-02 00:00:00', '', '0000-00-00 00:00:00', '1'),
('2222', 'ananannan', '8098', '09809', 'qqq', 808, '0980', '809809', 'aaaa', '2013-02-18 10:30:00', '', '0000-00-00 00:00:00', '1'),
('8798', 'jhkjh', 'khkj', 'hkjh', 'kjhkj', 3, 'hkjh', '1221', 'kjhkj', '2013-02-18 20:59:00', 'kjh', '2013-02-18 20:59:03', '1'),
('8980809', 'ananannan', '8098', '09809', 'qqq', 808, '0980', '809809', 'aaaa', '2013-02-18 10:30:00', '', '0000-00-00 00:00:00', '1'),
('dsfsd', 'fff', 'ff', 'ff', 'reeeee', 0, 'ff', '313', 'ffeeee', '2013-02-24 00:00:00', '', '0000-00-00 00:00:00', 'a'),
('GEN', 'GENERATOR', 'iuyiuyiuy', 'AA', 'AAA', 12, 'NO', '678', 'iuyiu', '2013-02-18 10:30:00', '', '0000-00-00 00:00:00', '1'),
('GENS', 'GENERATOR', 'andrews', 'AA', 'AAA', 12, 'NO', '678', 'iuyiu', '2013-02-18 10:30:00', '', '0000-00-00 00:00:00', '1');

-- --------------------------------------------------------

--
-- Table structure for table `product_supplier`
--

CREATE TABLE IF NOT EXISTS `product_supplier` (
  `pk_product_supplier_id` varchar(101) NOT NULL,
  `fk_product_id` varchar(50) NOT NULL,
  `fk_supplier_id` varchar(50) NOT NULL,
  `created_by` varchar(25) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL,
  `last_updated_datetime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` varchar(1) NOT NULL,
  PRIMARY KEY (`pk_product_supplier_id`),
  KEY `FK_product_supplier_product_info` (`fk_product_id`),
  KEY `FK_product_supplier_supplier_info` (`fk_supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_supplier`
--


-- --------------------------------------------------------

--
-- Table structure for table `supplier_info`
--

CREATE TABLE IF NOT EXISTS `supplier_info` (
  `pk_supplier_id` varchar(50) NOT NULL,
  `supplier_name` varchar(50) NOT NULL,
  `supplier_type` varchar(25) NOT NULL,
  `supplier_detail` varchar(100) NOT NULL,
  `website` varchar(50) NOT NULL,
  `created_by` varchar(25) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_updated_by` varchar(50) NOT NULL,
  `last_updated_datetime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` varchar(1) NOT NULL,
  PRIMARY KEY (`pk_supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier_info`
--

INSERT INTO `supplier_info` (`pk_supplier_id`, `supplier_name`, `supplier_type`, `supplier_detail`, `website`, `created_by`, `created_date`, `last_updated_by`, `last_updated_datetime`, `status`) VALUES
('787ss', 'Jeriakka', '879', 'oiuoiuoiuoiu ', 'and@email.com', '987', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '1'),
('qqqqq', 'wqe werwe', 'st', 'sd  sadfsdf sdfsd', 'andre@yahoo.om', 'sdfs', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '1'),
('Shirky', 'iuyiu', 'yiuyiu', 'yiuyiu ', 'and@email.com', 'asda', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '1');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `branch_info`
--
ALTER TABLE `branch_info`
  ADD CONSTRAINT `FK_branch_info_company_info` FOREIGN KEY (`fk_company_id`) REFERENCES `company_info` (`pk_company_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `FK_inventory_branch_info` FOREIGN KEY (`fk_branch_id`) REFERENCES `branch_info` (`pk_branch_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_inventory_company_info` FOREIGN KEY (`fk_company_id`) REFERENCES `company_info` (`pk_company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_inventory_product_info` FOREIGN KEY (`fk_product_id`) REFERENCES `product_info` (`pk_product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product_supplier`
--
ALTER TABLE `product_supplier`
  ADD CONSTRAINT `FK_product_supplier_product_info` FOREIGN KEY (`fk_product_id`) REFERENCES `product_info` (`pk_product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_product_supplier_supplier_info` FOREIGN KEY (`fk_supplier_id`) REFERENCES `supplier_info` (`pk_supplier_id`) ON DELETE CASCADE ON UPDATE CASCADE;
