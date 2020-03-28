/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 8.0.16 : Database - data_test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`data_test` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `data_test`;

/*Table structure for table `1_2_behavior` */

DROP TABLE IF EXISTS `1_2_behavior`;

CREATE TABLE `1_2_behavior` (
  `date_d` int(11) DEFAULT NULL,
  `class1_id` int(11) DEFAULT NULL,
  `behavior_type` varchar(10) DEFAULT NULL,
  `count_m` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `2_4_behavior` */

DROP TABLE IF EXISTS `2_4_behavior`;

CREATE TABLE `2_4_behavior` (
  `class1_id` int(11) DEFAULT NULL,
  `age` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `2_5_behavior` */

DROP TABLE IF EXISTS `2_5_behavior`;

CREATE TABLE `2_5_behavior` (
  `item_id` int(11) DEFAULT NULL,
  `behavior_type` varchar(10) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `class1_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `2_6_behavior` */

DROP TABLE IF EXISTS `2_6_behavior`;

CREATE TABLE `2_6_behavior` (
  `price` int(11) DEFAULT NULL,
  `peo_kind` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `behavior` */

DROP TABLE IF EXISTS `behavior`;

CREATE TABLE `behavior` (
  `item_id` int(11) DEFAULT NULL,
  `behavior_type` varchar(10) DEFAULT NULL,
  `date_d` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `item` */

DROP TABLE IF EXISTS `item`;

CREATE TABLE `item` (
  `item_id` int(11) DEFAULT NULL,
  `class1_id` int(11) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(11) DEFAULT NULL,
  `gender` varchar(5) DEFAULT NULL,
  `income` int(11) DEFAULT NULL,
  `province_id` int(11) DEFAULT NULL,
  `age` varchar(10) DEFAULT NULL,
  `stage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `temp_2_1` */

DROP TABLE IF EXISTS `temp_2_1`;

/*!50001 DROP VIEW IF EXISTS `temp_2_1` */;
/*!50001 DROP TABLE IF EXISTS `temp_2_1` */;

/*!50001 CREATE TABLE  `temp_2_1`(
 `date_d` int(11) ,
 `user_id` int(11) ,
 `k_num` bigint(21) 
)*/;

/*View structure for view temp_2_1 */

/*!50001 DROP TABLE IF EXISTS `temp_2_1` */;
/*!50001 DROP VIEW IF EXISTS `temp_2_1` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`caishulin`@`%` SQL SECURITY DEFINER VIEW `temp_2_1` AS select `bh`.`date_d` AS `date_d`,`bh`.`user_id` AS `user_id`,count(0) AS `k_num` from `behavior` `bh` group by `bh`.`date_d`,`bh`.`user_id` */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
