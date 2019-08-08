USE team_manager;

CREATE TABLE IF NOT EXISTS user (
  user_guid char(36) NOT NULL,
  user_first_name varchar(40) DEFAULT NULL,
  user_last_name varchar(40) DEFAULT NULL,
  user_full_name varchar(80) DEFAULT NULL,
  user_phone_number varchar(30) DEFAULT NULL,
  user_email_address varchar(40) NOT NULL,
  UNIQUE (user_email_address),
  PRIMARY KEY (user_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS player (
  player_guid char(36) NOT NULL,
  player_first_name varchar(40) DEFAULT NULL,
  player_last_name varchar(40) DEFAULT NULL,
  player_full_name varchar(40) DEFAULT NULL,
  player_phone_number varchar(30) DEFAULT NULL,
  player_email_address varchar(40) NOT NULL,
  emergency_contact_first_name varchar(40) DEFAULT NULL,
  emergency_contact_last_name varchar(40) DEFAULT NULL,
  emergency_contact_full_name varchar(80) DEFAULT NULL,
  emergency_contact_phone_number varchar(30) DEFAULT NULL,
  emergency_contact_email_address varchar(20) DEFAULT NULL,
  UNIQUE (player_email_address),
  UNIQUE (emergency_contact_email_address),
  PRIMARY KEY (player_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS team (
  team_guid char(36) NOT NULL,
  team_logo text(128) DEFAULT NULL,
  team_name varchar(80) NOT NULL,
  team_sport varchar(40) NOT NULL,
  team_primary_color varchar(20) DEFAULT NULL,
  team_secondary_color varchar(20) DEFAULT NULL,
  PRIMARY KEY (team_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS event (
  event_guid char(36) NOT NULL,
  event_type varchar(40) NOT NULL,
  location_name varchar(80) NOT NULL,
  location_address varchar(80) DEFAULT NULL,
  event_start_date datetime NOT NULL,
  event_end_date datetime NOT NULL,
  away_team varchar(40) NOT NULL,
  home_team varchar(40) NOT NULL,
  PRIMARY KEY (event_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS user_to_player (
  user_to_player_guid varchar(36) NOT NULL,
  user_guid varchar(36) NOT NULL,
  player_guid varchar(36) NOT NULL,
  relationship_type varchar(40) NOT NULL,
  FOREIGN KEY (user_guid) REFERENCES user(user_guid),
  FOREIGN KEY (player_guid) REFERENCES player(player_guid),
  PRIMARY KEY (user_to_player_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS player_to_team (
  player_to_team_guid char(36) NOT NULL,
  player_guid char(36) NOT NULL,
  team_guid char(36) NOT NULL,
  player_role varchar(40) DEFAULT NULL,
  primary_position varchar(40) DEFAULT NULL,
  secondary_position varchar(40) DEFAULT NULL,
  FOREIGN KEY (player_guid) REFERENCES player(player_guid),
  FOREIGN KEY (team_guid) REFERENCES team(team_guid),
  PRIMARY KEY (player_to_team_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS team_to_event (
  team_to_event_guid char(36) NOT NULL,
  home_team_guid char(36) NOT NULL,
  away_team_guid char(36) NOT NULL,
  event_guid char(36) NOT NULL,
  FOREIGN KEY (home_team_guid) REFERENCES team(team_guid),
  FOREIGN KEY (away_team_guid) REFERENCES team(team_guid),
  FOREIGN KEY (event_guid) REFERENCES event(event_guid),
  PRIMARY KEY (team_to_event_guid)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS player_to_event (
  player_to_event_guid char(36) NOT NULL,
  player_guid char(36) NOT NULL,
  event_guid char(36) NOT NULL,
  player_status varchar(40) DEFAULT NULL,
  FOREIGN KEY (player_guid) REFERENCES player(player_guid),
  FOREIGN KEY (event_guid) REFERENCES event(event_guid),
  PRIMARY KEY (player_to_event_guid)
) ENGINE=INNODB;