-- MySQL dump 10.13  Distrib 8.3.0, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: coderhub
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avatar`
--

DROP TABLE IF EXISTS `avatar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avatar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `mimetype` varchar(30) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filename` (`filename`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatar`
--

LOCK TABLES `avatar` WRITE;
/*!40000 ALTER TABLE `avatar` DISABLE KEYS */;
INSERT INTO `avatar` VALUES (1,'7b9abed5b8f1322562d79065cffa3629','image/png',7151,22,'2024-04-15 06:45:15','2024-04-15 06:45:15'),(2,'1713167593881-PixPin_2024-04-15_11-07-45.png.png','image/png',7151,22,'2024-04-15 07:53:13','2024-04-15 07:53:13'),(3,'1713168795320-PixPin_2024-04-15_11-07-45.png.png','image/png',7151,22,'2024-04-15 08:13:15','2024-04-15 08:13:15'),(4,'1713169005009-PixPin_2024-04-15_11-07-45.png.png','image/png',7151,22,'2024-04-15 08:16:45','2024-04-15 08:16:45'),(5,'1713169058522-PixPin_2024-04-15_11-07-45.png.png','image/png',7151,22,'2024-04-15 08:17:38','2024-04-15 08:17:38');
/*!40000 ALTER TABLE `avatar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `moment_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `comment_id` bigint DEFAULT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'6666牛逼',1,22,NULL,'2024-04-13 22:40:00','2024-04-13 22:40:00'),(2,'6666666',1,22,1,'2024-04-13 22:56:00','2024-04-13 22:56:00'),(3,'666666677',1,22,1,'2024-04-13 22:56:00','2024-04-13 22:56:00'),(4,'666666677',1,22,1,'2024-04-13 22:56:00','2024-04-13 22:56:00'),(5,'666666677',1,22,1,'2024-04-13 22:57:00','2024-04-13 22:57:00'),(6,'6666牛逼',2,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00'),(7,'6666牛逼',2,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00'),(8,'6666牛逼',2,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00'),(9,'6666牛逼',2,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00'),(10,'6666牛逼',5,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00'),(11,'6666牛逼',5,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00'),(12,'6666牛逼',5,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00'),(13,'6666牛逼',5,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00'),(14,'6666牛逼',5,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00'),(15,'6666牛逼',5,22,NULL,'2024-04-13 23:14:00','2024-04-13 23:14:00');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) NOT NULL,
  `mimetype` varchar(30) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `moment_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filename` (`filename`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `label` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
INSERT INTO `label` VALUES (41,'篮球','2024-04-15 02:14:35','2024-04-15 02:14:35'),(42,'唱歌','2024-04-15 02:14:35','2024-04-15 02:14:35'),(43,'rap','2024-04-15 02:14:35','2024-04-15 02:14:35'),(44,'5555','2024-04-15 02:14:35','2024-04-15 02:14:35');
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moment`
--

DROP TABLE IF EXISTS `moment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `user_id` bigint NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moment`
--

LOCK TABLES `moment` WRITE;
/*!40000 ALTER TABLE `moment` DISABLE KEYS */;
INSERT INTO `moment` VALUES (1,'6666',22,'2024-04-13 11:48:00','2024-04-13 17:05:00'),(2,'基尼太没',22,'2024-04-13 11:49:00','2024-04-13 11:49:00'),(3,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(4,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(5,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(6,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(7,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(8,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(9,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(10,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(11,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(13,'基尼太没',22,'2024-04-13 11:58:00','2024-04-13 11:58:00'),(14,'基尼太没',22,'2024-04-13 11:59:00','2024-04-13 11:59:00'),(15,'基尼太没',22,'2024-04-13 16:57:00','2024-04-13 16:57:00'),(16,'基尼太没',22,'2024-04-13 23:14:00','2024-04-13 23:14:00');
/*!40000 ALTER TABLE `moment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moment_label`
--

DROP TABLE IF EXISTS `moment_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moment_label` (
  `moment_id` int NOT NULL,
  `label_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`,`label_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moment_label`
--

LOCK TABLES `moment_label` WRITE;
/*!40000 ALTER TABLE `moment_label` DISABLE KEYS */;
INSERT INTO `moment_label` VALUES (6,41,'2024-04-15 02:14:35','2024-04-15 02:14:35'),(6,42,'2024-04-15 02:14:35','2024-04-15 02:14:35'),(6,43,'2024-04-15 02:14:35','2024-04-15 02:14:35'),(6,44,'2024-04-15 02:14:35','2024-04-15 02:14:35');
/*!40000 ALTER TABLE `moment_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `avatar_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (22,'admin','e10adc3949ba59abbe56e057f20f883e','2024-04-11 23:27:00','2024-04-11 23:27:00','http://localhost:8000/1713169058522-PixPin_2024-04-15_11-07-45.png.png'),(23,'admin666','e10adc3949ba59abbe56e057f20f883e','2024-04-13 16:31:00','2024-04-13 16:31:00',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-15 22:29:13
