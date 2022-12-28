CREATE DATABASE  IF NOT EXISTS `farm-ecommerce`;
USE `farm-ecommerce`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: farm-ecommerce
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116'),(2,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116'),(3,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116'),(4,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116'),(5,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116'),(6,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116'),(7,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116'),(8,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116'),(9,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116'),(10,'Forest Grove','United States','Oregon','41870 NW Lippert Ln','97116');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` smallint unsigned NOT NULL,
  `code` varchar(2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'BR','Brazil'),(2,'CA','Canada'),(3,'DE','Germany'),(4,'IN','India'),(5,'TR','Turkey'),(6,'US','United States');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Peter','Chapman','pchapman@easystreet.net'),(2,'Peter','Chapman','pchapman@easystreet.net'),(3,'Peter','Chapman','pchapman@easystreet.net'),(4,'Peter','Chapman','pchapman@easystreet.net'),(5,'Peter','Chapman','pchapman@easystreet.net'),(6,'Peter','Chapman','pchapman@easystreet.net'),(7,'Peter','Chapman','pchapman@easystreet.net'),(8,'Peter','Chapman','pchapman@easystreet.net'),(9,'Peter','Chapman','pchapman@easystreet.net'),(10,'Peter','Chapman','pchapman@easystreet.net');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `unit_price` decimal(19,2) DEFAULT NULL,
  `order_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  `product_name` varchar(32) DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `K_order_id` (`order_id`),
  KEY `FK_product_id` (`product_id`),
  CONSTRAINT `FK_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FK_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_tracking_number` varchar(255) DEFAULT NULL,
  `total_price` decimal(19,2) DEFAULT NULL,
  `total_quantity` int DEFAULT NULL,
  `billing_address_id` bigint DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `shipping_address_id` bigint DEFAULT NULL,
  `status` varchar(128) DEFAULT NULL,
  `date_created` datetime(6) DEFAULT NULL,
  `last_updated` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_billing_address_id` (`billing_address_id`),
  UNIQUE KEY `UK_shipping_address_id` (`shipping_address_id`),
  KEY `K_customer_id` (`customer_id`),
  CONSTRAINT `FK_billing_address_id` FOREIGN KEY (`billing_address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `FK_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  CONSTRAINT `FK_shipping_address_id` FOREIGN KEY (`shipping_address_id`) REFERENCES `address` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'690813',8.44,1,NULL,1,1,NULL,'2022-10-05 12:28:09.227000','2022-10-05 12:28:09.227000'),(2,'379405',8.44,1,NULL,2,2,NULL,'2022-10-06 13:01:16.367000','2022-10-06 13:01:16.367000'),(3,'230636',36.84,4,NULL,3,3,NULL,'2022-11-18 02:45:28.765000','2022-11-18 02:45:28.765000'),(4,'723597',45.84,5,NULL,4,4,NULL,'2022-11-26 14:23:50.000000','2022-11-26 14:23:50.000000'),(5,'214128',27.84,3,NULL,5,5,NULL,'2022-11-26 14:30:36.451000','2022-11-26 14:30:36.451000'),(6,'110932',36.00,4,NULL,6,6,NULL,'2022-11-28 01:36:44.362000','2022-11-28 01:36:44.362000'),(7,'265064',31.20,3,NULL,7,7,NULL,'2022-11-28 01:44:12.658000','2022-11-28 01:44:12.658000'),(8,'845593',18.00,2,NULL,8,8,NULL,'2022-11-28 02:18:53.296000','2022-11-28 02:18:53.296000'),(9,'201121',20.80,2,NULL,9,9,NULL,'2022-11-28 02:19:36.252000','2022-11-28 02:19:36.252000'),(10,'498677',16.89,2,NULL,10,10,NULL,'2022-11-28 02:22:22.496000','2022-11-28 02:22:22.496000');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produce`
--

DROP TABLE IF EXISTS `produce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produce` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `unit_pounds` decimal(10,4) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT '1.00',
  `units_in_stock` int DEFAULT NULL,
  `date_created` datetime(6) DEFAULT NULL,
  `last_updated` datetime(6) DEFAULT NULL,
  `produce_category_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produce_category` (`produce_category_id`),
  CONSTRAINT `fk_produce_category` FOREIGN KEY (`produce_category_id`) REFERENCES `produce_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produce`
--

LOCK TABLES `produce` WRITE;
/*!40000 ALTER TABLE `produce` DISABLE KEYS */;
INSERT INTO `produce` VALUES (1,'GROUND-1005','Ground Lamb','1 lb.',1.0000,'assets/products/lamb/ground.jpg',9.00,88,'2022-08-05 19:29:43.000000','2022-11-28 02:18:53.301000',51),(2,'DHOP-1000','Loin Chops','Two per package/Approx. 0.65 lbs.',0.6500,'assets/products/lamb/chop.jpg',12.99,93,'2022-08-05 19:29:43.000000','2022-11-28 02:22:22.499000',51),(3,'Rack-1007','Rib Chops','Two per package/Approx. 0.65 lbs.',0.6500,'assets/products/lamb/ribchop.jpg',16.00,92,'2022-08-05 19:29:43.000000','2022-11-28 02:19:36.253000',51),(4,'SHOULDERBONELESS-1001','Shoulder - Boneless','Approx. 6 lbs.',6.0000,'assets/products/lamb/shoulder-boneless.jpg',16.00,100,'2022-08-05 19:29:43.000000',NULL,51),(5,'SHOULDERBONEIN-1002','Whole Leg of Lamb - Bone in','Center cut. Approx. 7 lbs.',7.0000,'assets/products/lamb/leg.jpg',18.00,100,'2022-08-05 19:29:43.000000',NULL,51),(6,'LEG-1003','Whole Leg of Lamb - Boneless','Center cut. Approx. 6 lbs.',9.0000,'assets/products/lamb/leg.jpg',1.00,100,'2022-08-05 19:29:43.000000',NULL,51),(7,'LEG-1004','Stew meat / Kebobs','1 lb.',1.0000,'assets/products/lamb/kebob.jpg',9.00,100,'2022-08-05 19:29:43.000000',NULL,51),(8,'Kebab-1006','Shank','1 lb.',8.0000,'assets/images/products/books/kebab.png',9.00,100,'2022-08-05 19:29:43.000000',NULL,51);
/*!40000 ALTER TABLE `produce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produce_category`
--

DROP TABLE IF EXISTS `produce_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produce_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produce_category`
--

LOCK TABLES `produce_category` WRITE;
/*!40000 ALTER TABLE `produce_category` DISABLE KEYS */;
INSERT INTO `produce_category` VALUES (51,'Lamb'),(52,'Canned Goods'),(53,'Produce');
/*!40000 ALTER TABLE `produce_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `unit_price` decimal(13,2) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `active` bit(1) DEFAULT b'1',
  `units_in_stock` int DEFAULT NULL,
  `date_created` datetime(6) DEFAULT NULL,
  `last_updated` datetime(6) DEFAULT NULL,
  `product_category_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_category` (`product_category_id`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`product_category_id`) REFERENCES `product_category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Hats','Hats','Basebal Cap - Blue',17.99,'assets/products/hats/blue-hat.jpg',_binary '',96,'2022-03-17 16:34:25.000000','2022-08-15 03:20:21.884000',1),(2,'Hats','Hats','Basebal Cap - Khaki',17.99,'assets/products/hats/blue-hat.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,1),(3,'Hats','Hats','Basebal Cap - White',17.99,'assets/products/hats/blue-hat.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,1),(4,'Shirts','Shirts','T-shirt - Blue',17.99,'assets/products/tshirts/tshirt-blue.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,2),(5,'Shirts','Shirts','T-shirt - Gray',17.99,'assets/products/tshirts/tshirt-gray.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,2),(6,'Shirts','Shirts','T-shirt - White',17.99,'assets/products/tshirts/tshirt-blue.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,2),(7,'Shirts','Shirts','T-shirt - Pink',17.99,'assets/products/tshirts/tshirt-gray.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,2),(8,'Hoodies','SweatShirts','Hoody - Green',17.99,'assets/products/tshirts/tshirt-gray.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,3),(9,'Hoodies','SweatShirts','Sweatshirt - Green',17.99,'assets/products/tshirts/tshirt-gray.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,3),(10,'Hoodies','SweatShirts','Hoodies - Gray',17.99,'assets/products/tshirts/tshirt-gray.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,3),(11,'Hoodies','SweatShirts','Sweatshirt - Gray',17.99,'assets/products/tshirts/tshirt-gray.jpg',_binary '',100,'2022-03-17 16:34:25.000000',NULL,3),(12,'Stickers','Stickers','Stickers',17.99,'assets/images/products/stickers/apple-blossom.png',_binary '',100,'2022-03-17 16:34:25.000000',NULL,4),(13,'Stickers','Stickers','Stickers',17.99,'assets/images/products/stickers/apple-blossom2.png',_binary '',100,'2022-03-17 16:34:25.000000',NULL,4),(14,'Stickers','Stickers','Stickers',17.99,'assets/images/products/stickers/apple-blossom.png',_binary '',100,'2022-03-17 16:34:25.000000',NULL,4),(15,'Stickers','Stickers','Stickers',17.99,'assets/images/products/stickers/apple-blossom2.png',_binary '',100,'2022-03-17 16:34:25.000000',NULL,4);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,'Hats'),(2,'Shirts'),(3,'SweatShirts'),(4,'Stickers');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country_id` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_country` (`country_id`),
  CONSTRAINT `fk_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'Acre',1),(2,'Alagoas',1),(3,'Amapá',1),(4,'Amazonas',1),(5,'Bahia',1),(6,'Ceará',1),(7,'Distrito Federal',1),(8,'Espírito Santo',1),(9,'Goiás',1),(10,'Maranhão',1),(11,'Mato Grosso do Sul',1),(12,'Mato Grosso',1),(13,'Minas Gerais',1),(14,'Paraná',1),(15,'Paraíba',1),(16,'Pará',1),(17,'Pernambuco',1),(18,'Piaui',1),(19,'Rio de Janeiro',1),(20,'Rio Grande do Norte',1),(21,'Rio Grande do Sul',1),(22,'Rondônia',1),(23,'Roraima',1),(24,'Santa Catarina',1),(25,'Sergipe',1),(26,'São Paulo',1),(27,'Tocantins',1),(28,'Alberta',2),(29,'British Columbia',2),(30,'Manitoba',2),(31,'New Brunswick',2),(32,'Newfoundland and Labrador',2),(33,'Northwest Territories',2),(34,'Nova Scotia',2),(35,'Nunavut',2),(36,'Ontario',2),(37,'Prince Edward Island',2),(38,'Quebec',2),(39,'Saskatchewan',2),(40,'Yukon',2),(41,'Baden-Württemberg',3),(42,'Bavaria',3),(43,'Berlin',3),(44,'Brandenburg',3),(45,'Bremen',3),(46,'Hamburg',3),(47,'Hesse',3),(48,'Lower Saxony',3),(49,'Mecklenburg-Vorpommern',3),(50,'North Rhine-Westphalia',3),(51,'Rhineland-Palatinate',3),(52,'Saarland',3),(53,'Saxony',3),(54,'Saxony-Anhalt',3),(55,'Schleswig-Holstein',3),(56,'Thuringia',3),(57,'Andhra Pradesh',4),(58,'Arunachal Pradesh',4),(59,'Assam',4),(60,'Bihar',4),(61,'Chhattisgarh',4),(62,'Goa',4),(63,'Gujarat',4),(64,'Haryana',4),(65,'Himachal Pradesh',4),(66,'Jammu & Kashmir',4),(67,'Jharkhand',4),(68,'Karnataka',4),(69,'Kerala',4),(70,'Madhya Pradesh',4),(71,'Maharashtra',4),(72,'Manipur',4),(73,'Meghalaya',4),(74,'Mizoram',4),(75,'Nagaland',4),(76,'Odisha',4),(77,'Punjab',4),(78,'Rajasthan',4),(79,'Sikkim',4),(80,'Tamil Nadu',4),(81,'Telangana',4),(82,'Tripura',4),(83,'Uttar Pradesh',4),(84,'Uttarakhand',4),(85,'West Bengal',4),(86,'Andaman and Nicobar Islands',4),(87,'Chandigarh',4),(88,'Dadra and Nagar Haveli',4),(89,'Daman & Diu',4),(90,'Lakshadweep',4),(91,'Puducherry',4),(92,'The Government of NCT of Delhi',4),(93,'Alabama',6),(94,'Alaska',6),(95,'Arizona',6),(96,'Arkansas',6),(97,'California',6),(98,'Colorado',6),(99,'Connecticut',6),(100,'Delaware',6),(101,'District Of Columbia',6),(102,'Florida',6),(103,'Georgia',6),(104,'Hawaii',6),(105,'Idaho',6),(106,'Illinois',6),(107,'Indiana',6),(108,'Iowa',6),(109,'Kansas',6),(110,'Kentucky',6),(111,'Louisiana',6),(112,'Maine',6),(113,'Maryland',6),(114,'Massachusetts',6),(115,'Michigan',6),(116,'Minnesota',6),(117,'Mississippi',6),(118,'Missouri',6),(119,'Montana',6),(120,'Nebraska',6),(121,'Nevada',6),(122,'New Hampshire',6),(123,'New Jersey',6),(124,'New Mexico',6),(125,'New York',6),(126,'North Carolina',6),(127,'North Dakota',6),(128,'Ohio',6),(129,'Oklahoma',6),(130,'Oregon',6),(131,'Pennsylvania',6),(132,'Rhode Island',6),(133,'South Carolina',6),(134,'South Dakota',6),(135,'Tennessee',6),(136,'Texas',6),(137,'Utah',6),(138,'Vermont',6),(139,'Virginia',6),(140,'Washington',6),(141,'West Virginia',6),(142,'Wisconsin',6),(143,'Wyoming',6),(144,'Adıyaman',5),(145,'Afyonkarahisar',5),(146,'Ağrı',5),(147,'Aksaray',5),(148,'Amasya',5),(149,'Ankara',5),(150,'Antalya',5),(151,'Ardahan',5),(152,'Artvin',5),(153,'Aydın',5),(154,'Balıkesir',5),(155,'Bartın',5),(156,'Batman',5),(157,'Bayburt',5),(158,'Bilecik',5),(159,'Bingöl',5),(160,'Bitlis',5),(161,'Bolu',5),(162,'Burdur',5),(163,'Bursa',5),(164,'Çanakkale',5),(165,'Çankırı',5),(166,'Çorum',5),(167,'Denizli',5),(168,'Diyarbakır',5),(169,'Düzce',5),(170,'Edirne',5),(171,'Elazığ',5),(172,'Erzincan',5),(173,'Erzurum',5),(174,'Eskişehir',5),(175,'Gaziantep',5),(176,'Giresun',5),(177,'Gümüşhane',5),(178,'Hakkâri',5),(179,'Hatay',5),(180,'Iğdır',5),(181,'Isparta',5),(182,'İstanbul',5),(183,'İzmir',5),(184,'Kahramanmaraş',5),(185,'Karabük',5),(186,'Karaman',5),(187,'Kars',5),(188,'Kastamonu',5),(189,'Kayseri',5),(190,'Kırıkkale',5),(191,'Kırklareli',5),(192,'Kırşehir',5),(193,'Kilis',5),(194,'Kocaeli',5),(195,'Konya',5),(196,'Kütahya',5),(197,'Malatya',5),(198,'Manisa',5),(199,'Mardin',5),(200,'Mersin',5),(201,'Muğla',5),(202,'Muş',5),(203,'Nevşehir',5),(204,'Niğde',5),(205,'Ordu',5),(206,'Osmaniye',5),(207,'Rize',5),(208,'Sakarya',5),(209,'Samsun',5),(210,'Siirt',5),(211,'Sinop',5),(212,'Sivas',5),(213,'Şanlıurfa',5),(214,'Şırnak',5),(215,'Tekirdağ',5),(216,'Tokat',5),(217,'Trabzon',5),(218,'Tunceli',5),(219,'Uşak',5),(220,'Van',5),(221,'Yalova',5),(222,'Yozgat',5),(223,'Zonguldak',5);
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-04 19:27:00
