USE team_manager;

CREATE TABLE IF NOT EXISTS player (
  player_guid char(36) NOT NULL,
  first_name varchar(40) DEFAULT NULL,
  last_name varchar(40) DEFAULT NULL,
  full_name varchar(40) DEFAULT NULL,
  phone_number varchar(20) DEFAULT NULL,
  email_address varchar(40) NOT NULL,
  emergency_contact_first_name varchar(40) DEFAULT NULL,
  emergency_contact_last_name varchar(40) DEFAULT NULL,
  emergency_contact_full_name varchar(80) DEFAULT NULL,
  emergency_contact_phone_number varchar(20) DEFAULT NULL,
  emergency_contact_email_address varchar(20) DEFAULT NULL,
  PRIMARY KEY (player_guid)
  UNIQUE KEY (email_address)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS team (
  team_guid char(36) NOT NULL,
  team_logo text(128) DEFAULT NULL,
  PRIMARY KEY (team_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS event (
  event_guid char(36) NOT NULL,
  PRIMARY KEY (event_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS player_to_team (
  player_to_team_guid char(36) NOT NULL,
  player_guid char(36) NOT NULL,
  team_guid char(36) NOT NULL,
  player_role varchar(40) DEFAULT NULL,
  primary_position varchar(40) DEFAULT NULL,
  secondary_position varchar(40) DEFAULT NULL,
  PRIMARY KEY (player_to_team_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS team_to_event (
  team_to_event_guid char(36) NOT NULL,
  team_guid char(36) NOT NULL,
  event_guid char(36) NOT NULL,
  PRIMARY KEY (team_to_event_guid)
) ENGINE=INNODB;