-- phpMyAdmin SQL Dump
-- version 2.11.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 25, 2015 at 03:24 AM
-- Server version: 5.1.57
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `a6212477_medical`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `appointment_id` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `doctor_id` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `user_id` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `doctor_id` (`doctor_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `appointment`
--


-- --------------------------------------------------------

--
-- Table structure for table `appointment_detail`
--

CREATE TABLE `appointment_detail` (
  `appointment_id` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `status` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `speciality` varchar(30) COLLATE latin1_general_ci DEFAULT NULL,
  `prioriy` varchar(10) COLLATE latin1_general_ci DEFAULT NULL,
  KEY `appointment_id` (`appointment_id`),
  KEY `speciality` (`speciality`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `appointment_detail`
--


-- --------------------------------------------------------

--
-- Table structure for table `client_login`
--

CREATE TABLE `client_login` (
  `user_id` varchar(30) COLLATE latin1_general_ci DEFAULT NULL,
  `pwd` varchar(30) COLLATE latin1_general_ci DEFAULT NULL,
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `client_login`
--


-- --------------------------------------------------------

--
-- Table structure for table `client_master`
--

CREATE TABLE `client_master` (
  `client_id` varchar(10) COLLATE latin1_general_ci NOT NULL,
  `name` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `address` varchar(40) COLLATE latin1_general_ci NOT NULL,
  `ph` int(10) NOT NULL,
  `email` varchar(40) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `client_master`
--


-- --------------------------------------------------------

--
-- Table structure for table `doctor_login`
--

CREATE TABLE `doctor_login` (
  `doctor_id` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `pwd` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  KEY `doctor_id` (`doctor_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `doctor_login`
--


-- --------------------------------------------------------

--
-- Table structure for table `doctor_master`
--

CREATE TABLE `doctor_master` (
  `doctor_id` varchar(10) COLLATE latin1_general_ci NOT NULL,
  `name` varchar(20) COLLATE latin1_general_ci NOT NULL,
  `address` varchar(40) COLLATE latin1_general_ci NOT NULL,
  `ph` int(10) NOT NULL,
  `email` varchar(40) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`doctor_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `doctor_master`
--


-- --------------------------------------------------------

--
-- Table structure for table `specialist`
--

CREATE TABLE `specialist` (
  `doctor_id` varchar(20) COLLATE latin1_general_ci DEFAULT NULL,
  `speciality` varchar(30) COLLATE latin1_general_ci DEFAULT NULL,
  KEY `doctor_id` (`doctor_id`),
  KEY `speciality` (`speciality`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `specialist`
--


-- --------------------------------------------------------

--
-- Table structure for table `speciality`
--

CREATE TABLE `speciality` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`name`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=1 ;

--
-- Dumping data for table `speciality`
--

