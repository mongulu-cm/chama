-- MySQL dump 10.13  Distrib 5.7.44, for Linux (x86_64)
--
-- Host: localhost    Database: aci
-- ------------------------------------------------------
-- Server version	5.7.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actu`
--

DROP TABLE IF EXISTS `actu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contenu` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `publish_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `image_affiche` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actu`
--

LOCK TABLES `actu` WRITE;
/*!40000 ALTER TABLE `actu` DISABLE KEYS */;
INSERT INTO `actu` VALUES (1,' 1ère édition des Rencontres de géopolitique critique ','     La première édition des rencontres géopolitiques et critiques tenue à Grenoble du 16 au 19 mars 2016 sous le thèse de « l’Afrique et le postcolonial » a été un autre moment de déploiement de l’ACI sollicitée par les organisateurs en tant que association partenaire. Évènement scientifique majeure sur la géopolitique africaine par les thématiques abordées,   l’ACI s’est sentie naturellement concernée et a mobilisé ses adhérents de participer activement aux présentations et échanges animées par des scientifiques à travers le monde. Entre autres activités ayant connu une participation active des membres de l’ACI : une table ronde sous le thème « Périphériques des Etats et dynamiques transfrontalières : perspectives de développement » où ont été tour à tour discutées les questions de « la frontière comme solution du vivre ensemble » et « la frontière comme danger sécuritaire ». des échanges ayant permis aux membres de l’Association de mieux comprendre, à partir des exemples concrets, les paradoxes qui traversent les notions de frontière en Afrique avec d’une part des familles séparées par les frontières, des personnes se sentant plus proche d’un pays que celui auquel le découpage frontalier les a fait appartenir, ou encore la porosité  des frontières favorables à l’insécurité et à l’émergence des rébellions.','2016-04-24 00:00:00','event1/1.jpeg'),(20,'La 8e édition de la semaine culturelle africaine (SECA 8)','Le SECA a entre autres objectifs de renforcer la coopération entre les associations africaines de l’Isère et de partager avec le public grenoblois les atours culturels africains. Cinq (5) grandes activités ont structuré l’édition 2016 : la dégustation, les galas culturels (1 et 2), la conférence – débat, le tournoi de football et la soirée dansante\r\n\r\nLa 8e édition de la semaine culturelle africaine organisée à Grenoble du 21 au 26 mars 2016 a connu une forte implication de l’Association. Implication manifestée par l’engagement des membres de l’ACI à divers niveaux de responsabilités du collectif des associations africaines et étudiantes de l’Isère, organisateur de l’évènement. Entre autres, l’élection du secrétaire général de l’ACI a poste de trésorier du comité organisateur, mais aussi la désignation du président de l’ACI et d’autres membres à tête de diverses commissions.\r\n\r\nPar ailleurs, la communication sur les 5 grands axes de l’évènement a été fortement relayée par l’ACI à travers ses réseaux de communication fortement visités : facebook, mails. L’ACI a également contribué à la confection des flyers pour la SECA.','2016-03-21 00:00:00','event2/1.jpg'),(21,'Après-midi BH (Beignets-haricot)  avec les employés de la SARL TDMI à Pont de Claix','La SARL TDMI est une entreprise de droit français opérant dans le secteur des BTP. Elle soutient régulièrement l’ACI par un don en espèce (voir bilan financier) octroyé à l’association chaque année. Afin de manifester sa reconnaissance pour cette responsabilité sociale de la SARL TDMI, l’ACI a organisé, avec l’accord de ses dirigeants, un après-midi BH au siège de l’entreprise, au 54 Cours Saint André, 38800 Pont de Claix. L’activité a eu lieu le 26 février 2016 et a mobilisé de nombreux membres de l’ACI.  Cela a été un moment d’échanger avec la quasi-totalité des travailleurs de l’entreprise sur leurs activités et sur celles de l’association autour du célèbre plat camerounais. Un moment de détente fortement apprécié par les travailleurs et les dirigeants de l’entreprise. Expérience à renouveler au regard des retours positifs.','2016-02-26 00:00:00','/event4/1.jpg'),(22,'Le fête nationale du Cameroun','       La fête nationale de la réunification du Cameroun se célèbre le 20 mai de chaque année. Pour la 44e édition qui a eu lieu en 2016, l’Association des Camerounais de l’Isère n’a pas voulu être reste. C’est pourquoi malgré ses moyens limités, et malgré le fait que nombre de ses adhérents, majoritairement étudiants se trouvaient or du département pour des raisons de stages académiques entre autres, elle s’est accordé un moment pour participer à cette célébration. Ainsi, entre 18h et 20h le 20 mai 2016, les Camerounais de l’Isère et sympathisants se sont retrouvés à la maison des associations de Grenoble pour un moment d’échange très riche.  Lors de ce moment très apprécié, les participants y ont émis l’idée que les Camerounais de France puissent se réunir pour initier des projets sociaux et économiques à destination du Cameroun afin de mieux contribuer ainsi au développement du pays. L’échange s’est achevé par un cocktail avec comme menu principal, le beignet – haricot, désormais considéré comme l’identité culinaire de l’ACI.','2016-03-20 00:00:00','event3/1.jpg'),(23,'Co-organisation d’une conférence sur le militantisme en milieu universitaire avec l’association NTODEM','NTDODEM se définit comme une association française œuvrant dans la solidarité au Cameroun. L’association dirigée par Janine Vincens entretient avec l’ACI des relations depuis plusieurs années. Des relations qui se traduisent par l’organisation commune de manifestations visant à faire connaître le Cameroun,  à collecter des dons et par la mise à disposition des bénévoles au service de TDMI pour le tri des dons à destination du Cameroun.\r\nUn exemple de ces activités est la conférence initié par NTODEM et co-organisée par les deux associations à la salle de réunion de la Résidence Ouest, 107 rue des Taillées, 38400 Saint Martin d’Hères,  le 19 avril 2016. La conférence présentée par Cindy Morillas et modérée par Janine Vincens a porté sur les carrières militantes et les conséquences bibliographiques du militantisme étudiant en situation autoritaire. Et s’est appuyé sur le cas du Cameroun post-indépendant.  Une réflexion issue des travaux de thèse soutenue par la conférencière en 2015 à Sciences Po Bordeaux sous le thème « Individualisation versus Démocratisation ? Conditions et formes du militantisme étudiant en situation autoritaire (Cameroun, 1962-2014) ». Grâce à la communication faite à travers les réseaux sociaux par l’ACI, la conférence a eu un grand écho su sein de la communauté camerounaise de Grenoble.\r\n','2016-04-19 00:00:00','event5/4.jpg'),(24,'Participation active à la semaine culturelle de l’association des Étudiants et stagiaires sénégalais de Grenoble (AESSG)','Bien que l’amitié entre l’ACI et l’AESSG ne soit pas formalisé par une convention de partenariat, l’ACI a pris une part très active lors de la semaine culturelle organisée par l’association sénégalaise à Grenoble du 26 au 28 mai 2016. Entre autres formes d’implication : le relai sur la page facebook très suivi de l’ACI de la communication sur ledit évènement et la participation au tournoi de football.','2016-05-26 00:00:00','event7/1.jpg'),(25,'Célébration de la fête nationale du Cameroun avec l’association des Camerounais de Clermont-Ferrand','                    Inscrite dans la perspective d’une dynamique partenariale avec toutes les associations camerounaises de la région Auvergne-Rhône Alpes, l’ACI a trouvé dans l’invitation à elle adressée par l’Association Camerounaise des Étudiants et Anciens Étudiants de Clermont-Ferrand (ACEAC) une opportunité de poursuivre ces objectifs. C’est la raison pour laquelle elle s’est grandement mobilisée pour répondre à cette invitation de l’ACEAC à l’occasion de la célébration de la fête nationale du Cameroun (20 mai). Ainsi, une forte délégation de l’ACI a fait le déplacement du 21 mai 2016 à Clermont-Ferrand où l’association sœur n’a pas lésiné sur les moyens pour les accueillir. Entre autres activités à l’ordre du jour : Match de football, moment d’échange autour d’un repas, Soirée en boîte. Il convient de noter que le match de football s’est soldé par la victoire de l’ACI sur hôte par un score de 4-3. \r\nAu regard du succès de cet évènement, l’ACI envisage un retour d’ascenseur dans un avenir proche.','2016-03-16 00:00:00','event6/2.jpg'),(26,'Arbre de Noel - 2015 ','L\'enjeu a été de créer un moment de rencontre, d\'échange, de partage et de convivialité entre les camerounais du département de l\'Isère afin d\'achever l\'année en beauté. L\'événement a bénéficié d\'une forte collaboration et d\'une organisation en rangs serrés des membres de l\'ACI et des camerounais de l’agglomération grenobloise.\r\n\r\nL\'arbre de Noël a mobilisé plus de 35 personnes. Le public était majoritairement constitué des camerounais de Grenoble. Nous soulignons aussi la présence\r\nde deux membres l\'association-partenaire N\'todem, à savoir: Janine Vincent et Didier Deplanke. Des amis de la communauté togolaise de Grenoble ont aussi pris part à cette fête.','2015-12-20 00:00:00','event8/1.jpg'),(27,'Assemblée Générale - 05/02/2016','Le compte rendu de cette assemblée générale est disponible: <a href=\"https://docs.google.com/uc?id=0BxMoQfjUQmWjdGJ4X1E4cGVZSXRqNzlhTjJpYWVFc1RVS004&export=download\"> ici</a>\r\n','2016-02-05 00:00:00','event3/1.jpg'),(28,'Assemblée générale - 15/01/2016',' Vous retrouverez les infos sur l\'assemblée générale : <a href=\"https://docs.google.com/uc?id=0BxMoQfjUQmWjbDBXSUtaT0FjRTQ/export?format=download\"> ici </a>','2016-01-15 00:00:00','event3/1.jpg'),(29,'Assemblée générale - 04/03/2016','Le compte rendu de cette assemblée générale est disponible : <a href =\"https://docs.google.com/uc?id=0BxMoQfjUQmWjN0tIaVNMZ3VrQ1U&export=download\">ici</a>','2016-03-04 00:00:00','event9/1.jpg'),(30,'Assemblée générale - 10/06/2016','Le compte rendu de cette assemblée générale est disponible : <a href=\"https://docs.google.com/uc?id=0BxMoQfjUQmWjeS1FbTZweHpsVG8&export=download\"> ici</a>','2016-06-10 00:00:00','event3/1.jpg'),(31,'Assemblée générale élective - novembre 2015','Vous retrouverez le rapport de l\'assemblée élective :  <a href=\"https://docs.google.com/uc?id=0B6WHo9GQT7JdLWhZZV9pdU5scTQ&export=download\"> ici </a>','2015-11-18 00:00:00','event3/1.jpg'),(32,'Assemblée générale - 15/04/2016','Le compte rendu de cette assemblée générale est disponible ici: https://docs.google.com/uc?id=0BxMoQfjUQmWjM0VPbDlDcU9sOW51U2JHLWhGYkdqX19sSGZr&export=download','2016-04-15 00:00:00','event10/1.jpg'),(33,'Activités estivales - juillet 2016','L\'ACI organise pendant la période estivales des sorties aux parcs de l\'Isère, des pique-niques , des matchs de football etc ...','2016-07-01 00:00:00','event11/1.jpg'),(34,'Activités estivales - août 2016','L\'ACI organise pendant la période estivales des sorties aux parcs de l\'Isère, des pique-niques , des matchs de football etc...','2016-08-01 00:00:00','event11/1.jpg'),(35,'Assemblée générale - 10/03/2017','Le compte rendu de cette assemblée générale est disponible : <a href =\"https://docs.google.com/uc?id=0B6WHo9GQT7JdVjhxVkFZb3B4alU&export=download\">ici</a>','2017-03-10 00:00:00','event12/2.jpeg'),(36,'Tournoi de football (Vainqueur :) ) - 11/03/2017','L\'ACI a participé à un tournoi organisé de football par Isereanybody ( asssociation des jeunes de la paroisse Saint Joseph à Grenoble). Le tournoi constitué de 6 équipes a été remporté par les camerounais :) .','2017-03-11 00:00:00','event13/1.jpg'),(37,'La 9e édition de la semaine culturelle africaine (SECA 9)- mars 2016','Le SECA a entre autres objectifs de renforcer la coopération entre les associations africaines de l’Isère et de partager avec le public grenoblois les atouts culturels africains. Cinq (5) grandes activités ont structurées l’édition 2017 : l\'exposition/dégustation, la conférence débat sur le thème \"Le diplôme français: Opportunités et perspectives pour l\'étudiant africain\",le concours d\'éloquence sur le thème de \"Bonne gouvernance\",le tournoi de football et les soirées culturelles & dansantes.\r\n\r\nLa 9e édition de la semaine culturelle africaine organisée à Grenoble du 20 au 25 mars 2017 a connu une forte implication de l’Association. Implication manifestée cette année notamment par l’organisation de la conférence débat mais aussi la mobilisation pour les différents événements. Nous regrettons néanmoins la sortie prématurée de l\'association au premier tournoi de la compétition de football cependant l\'esprit d\'équipe a prévalu et les résultats seront meilleurs aux prochaines éditions.\r\n\r\nEnfin, la communication sur les 5 grands axes de l’évènement a été fortement relayée par l’ACI à travers ses réseaux de communication fortement visités : facebook, mails. L’ACI a également contribué à la confection des flyers pour la SECA.','2017-03-20 00:00:00','event14/8.jpg'),(38,'Arbre de Noel - 2016 ','L’évènement a réuni une soixantaine de personnes comme prévu  . Le public était majoritairement constitué des camerounais de Grenoble. Des amis de la communauté togolaise, ivoirienne et tchadienne de Grenoble ont aussi pris part à cette fête.\r\n\r\nLa soirée a commencé par un mot du président et du président d’honneur et s’est poursuivi par la dégustation. Il y avait au menu des beignets haricot, des pilis et enfin du riz sauce d’arachide avec du poulet. Force est de constater que les BH ainsi que les pilis ont eu un franc succès car ils ont été intégralement consommés ce qui n’est pas le cas du riz + sauce d’arachide dont il resté une grosse part.\r\n\r\nPendant la dégustation, quelques minutes ont été prises afin de distribuer les cadeaux aux enfants présents. Certains parents étant déjà partis à ce moment-là, la responsabilité de remettre les cadeaux a été confiée aux proches des parents.\r\n\r\nLa dernière activité réalisée au cours de la soirée était 1 Quizz avec à la clé un chèque de 10 EUR. Les questions portaient principalement sur l’origine de l’association, son fonctionnement et son bureau actuel. Le quizz a été très apprécié par les participants, il a notamment mis en exergue les opinions tranchés des adhérents sur la question du plus grand buveur de l’Association.\r\n','2016-12-17 00:00:00','event15/6.jpg'),(39,'Semaine Culturelle Camerounaise - 19 au 20 mai 2017 ','\r\n19 mai : Conférence-débat sur le campus de l\'université de Grenobles-Alpes sur le thème : \"Intégration nationale et cohésion sociale\"\r\n\r\n<br/>\r\n\r\n20 mai : Gala d\'excellence au Chamois d\'Or ','2017-05-20 00:00:00','event16/1.jpg'),(40,'Fête des tuiles - 10 juin 2017 ','La fête des tuiles est  1 événement majeur de la ville de Grenoble, nous avons eu beaucoup de passages sur nos stands ce qui a  été une opportunité de parler du Cameroun. Nous pouvons aussi nous réjouir de la présence de la communauté présence qui n’a pas manqué à l’appel.','2017-06-10 00:00:00','event17/1.jpg');
/*!40000 ALTER TABLE `actu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actu_id` int(11) NOT NULL,
  `image_album` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_39986E43F77EEF58` (`actu_id`),
  CONSTRAINT `FK_39986E43F77EEF58` FOREIGN KEY (`actu_id`) REFERENCES `actu` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (3,1,'event1/3.jpeg'),(4,1,'event1/4.jpeg'),(5,1,'event1/5.jpg'),(124,1,'event1/1.jpeg'),(125,1,'event1/2.jpeg'),(126,20,'event2/1.jpg'),(127,20,'event2/2.jpg'),(128,20,'event2/3.jpg'),(129,20,'event2/4.jpg'),(130,20,'event2/5.jpg'),(131,20,'event2/6.jpg'),(132,20,'event2/7.jpg'),(133,20,'event2/8.jpg'),(134,21,'event4/1.jpg'),(135,21,'event4/2.jpg'),(136,21,'event4/3.jpg'),(137,21,'event4/4.jpg'),(138,21,'event4/5.jpg'),(139,21,'event4/6.jpg'),(140,22,'event3/1.jpg'),(141,22,'event3/2.jpg'),(142,22,'event3/3.jpg'),(143,22,'event3/4.jpg'),(144,22,'event3/5.jpg'),(145,22,'event3/6.jpg'),(146,22,'event4/7.jpg'),(147,23,'event5/1.jpg'),(148,23,'event5/2.jpg'),(149,23,'event5/3.jpg'),(150,23,'event5/4.jpg'),(151,23,'event5/5.jpg'),(152,23,'event5/6.jpg'),(153,25,'event6/1.jpg'),(154,25,'event6/2.jpg'),(155,25,'event6/3.jpg'),(156,25,'event6/4.jpg'),(157,25,'event6/5.jpg'),(158,25,'event6/6.jpg'),(159,25,'event6/7.jpg'),(160,25,'event6/8.jpg'),(161,25,'event6/9.jpg'),(162,24,'event7/1.jpg'),(163,24,'event7/2.jpg'),(164,24,'event7/3.jpg'),(165,26,'event8/1.jpg'),(166,26,'event8/2.jpg'),(167,26,'event8/3.jpg'),(168,26,'event8/4.jpg'),(169,26,'event8/5.jpg'),(170,26,'event8/6.jpg'),(171,26,'event8/7.jpg'),(172,26,'event8/8.jpg'),(173,26,'event8/9.jpg'),(174,29,'event9/1.jpg'),(175,29,'event9/2.jpg'),(176,29,'event9/3.jpg'),(177,29,'event9/4.jpg'),(178,32,'event10/1.jpg'),(179,32,'event10/2.jpg'),(180,32,'event10/3.jpg'),(181,32,'event10/4.jpg'),(182,33,'event11/1.jpg'),(183,33,'event11/2.jpg'),(184,33,'event11/3.jpg'),(185,34,'event11/1.jpg'),(186,34,'event11/2.jpg'),(187,34,'event11/3.jpg'),(188,35,'event12/2.jpeg'),(189,35,'event12/3.jpeg'),(190,35,'event12/4.jpeg'),(191,35,'event12/5.jpeg'),(192,35,'event12/6.jpeg'),(193,35,'event12/7.jpeg'),(194,36,'event13/1.jpg'),(195,36,'event13/2.jpg'),(196,36,'event13/3.jpg'),(199,37,'/event14/1.jpg'),(200,37,'/event14/2.jpg'),(201,37,'/event14/3.jpg'),(202,37,'/event14/4.jpg'),(203,37,'/event14/5.jpg'),(204,37,'/event14/6.jpg'),(205,37,'/event14/7.jpg'),(206,37,'/event14/8.jpg'),(207,37,'/event14/9.jpg'),(208,37,'/event14/10.jpg'),(209,37,'/event14/11.jpg'),(210,37,'/event14/12.jpg'),(211,37,'/event14/13.jpg'),(212,38,'/event15/1.jpg'),(213,38,'/event15/2.jpg'),(214,38,'/event15/3.jpg'),(215,38,'/event15/4.jpg'),(216,38,'/event15/5.jpg'),(217,38,'/event15/6.jpg'),(218,38,'/event15/7.jpg'),(219,38,'/event15/8.jpg'),(220,39,'/event16/1.jpg'),(221,39,'/event16/2.jpg'),(222,39,'/event16/3.jpg'),(223,39,'/event16/4.jpg'),(224,39,'/event16/5.jpg'),(225,39,'/event16/6.jpg'),(226,39,'/event16/7.jpg'),(227,39,'/event16/8.jpg'),(228,40,'/event17/1.jpg'),(229,40,'/event17/2.jpg'),(230,40,'/event17/3.jpg'),(231,40,'/event17/4.jpg'),(232,40,'/event17/5.jpg');
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctrine_migration_versions`
--

LOCK TABLES `doctrine_migration_versions` WRITE;
/*!40000 ALTER TABLE `doctrine_migration_versions` DISABLE KEYS */;
INSERT INTO `doctrine_migration_versions` VALUES ('DoctrineMigrations\\Version20231216162228','2024-01-07 22:47:17',155),('DoctrineMigrations\\Version20231217221729','2024-01-07 22:47:17',32),('DoctrineMigrations\\Version20231217225243','2024-01-07 22:47:18',32);
/*!40000 ALTER TABLE `doctrine_migration_versions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roles` json NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_70E4FA78F85E0677` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `available_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `delivered_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  KEY `IDX_75EA56E016BA31DB` (`delivered_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messenger_messages`
--

LOCK TABLES `messenger_messages` WRITE;
/*!40000 ALTER TABLE `messenger_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messenger_messages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-20 12:43:13
