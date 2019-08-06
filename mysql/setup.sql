DROP TABLE IF EXISTS `player`;

CREATE TABLE `player` (
  `PlayerId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(40) DEFAULT NULL,
  `LastName` varchar(40) DEFAULT NULL,
  `FullName` varchar(80) DEFAULT NULL,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `Email` varchar(40) NOT NULL DEFAULT '',
  `EmergencyContactPhoneNumber` varchar(20) DEFAULT NULL,
  `EmergencyContactFirstName` varchar(40) DEFAULT NULL,
  `EmergencyContactLastName` varchar(40) DEFAULT NULL,
  `EmergencyContactFullName` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`PlayerId`),
  UNIQUE KEY `Email` (`Email`),
  UNIQUE KEY `PhoneNumber` (`PhoneNumber`)
)