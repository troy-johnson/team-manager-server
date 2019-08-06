DROP TABLE IF EXISTS `player`;
DROP TABLE IF EXISTS `team`;
DROP TABLE IF EXISTS `event`;
DROP TABLE IF EXISTS `player_to_team`;
DROP TABLE IF EXISTS `team_to_event`;

CREATE TABLE `player` (
  `player_guid` char(36) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(40) DEFAULT NULL,
  `last_name` varchar(40) DEFAULT NULL,
  `full_name` varchar(80) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email_address` varchar(40) NOT NULL DEFAULT '',
  `emergency_contact_first_name` varchar(40) DEFAULT NULL,
  `emergency_contact_last_name` varchar(40) DEFAULT NULL,
  `emergency_contact_full_name` varchar(80) DEFAULT NULL,
  `emergency_contact_phone_number` varchar(20) DEFAULT NULL,
  `emergency_contact_email_address` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`player_guid`),
  UNIQUE KEY `email_address` (`email_address`),
  UNIQUE KEY `phone_number` (`phone_number`)
)

CREATE TABLE `team` (
  `team_guid` char(36) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`team_guid`),
)

CREATE TABLE `event` (
  `event_guid` char(36) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`event_guid`),
)

CREATE TABLE `player_to_team` (
  `player_to_team_guid` char(36) unsigned NOT NULL AUTO_INCREMENT,
  `player_guid` char(36) unsigned NOT NULL,
  `team_guid` char(36) unsigned NOT NULL,
  PRIMARY KEY (`player_to_team_guid`),
)

CREATE TABLE `team_to_event` (
  `team_to_event_guid` char(36) unsigned NOT NULL AUTO_INCREMENT,
  `team_guid` char(36) unsigned NOT NULL,
  `event_guid` char(36) unsigned NOT NULL,
  PRIMARY KEY (`team_to_event_guid`),
)