USE team_manager;

CREATE TABLE IF NOT EXISTS user (
  user_id char(36) NOT NULL,
  user_first_name varchar(40) DEFAULT NULL,
  user_last_name varchar(40) DEFAULT NULL,
  user_full_name varchar(80) DEFAULT NULL,
  user_phone_number varchar(30) DEFAULT NULL,
  user_email_address varchar(40) NOT NULL,
  UNIQUE (user_email_address),
  PRIMARY KEY (user_id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS player (
  player_id char(36) NOT NULL,
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
  PRIMARY KEY (player_id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS team (
  team_id char(36) NOT NULL,
  team_logo text(128) DEFAULT NULL,
  team_name varchar(80) NOT NULL,
  team_sport varchar(40) NOT NULL,
  team_primary_color varchar(20) DEFAULT NULL,
  team_secondary_color varchar(20) DEFAULT NULL,
  PRIMARY KEY (team_id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS game (
  game_id char(36) NOT NULL,
  location_name varchar(80) NOT NULL,
  location_address varchar(80) DEFAULT NULL,
  game_start_date datetime NOT NULL,
  game_end_date datetime NOT NULL,
  away_team varchar(40) NOT NULL,
  away_team_goals int DEFAULT 0,
  home_team varchar(40) NOT NULL,
  home_team_goals int DEFAULT 0,
  PRIMARY KEY (game_id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS event (
  event_id char(36) NOT NULL,
  event_type varchar(40) NOT NULL,
  event_start_date datetime NOT NULL,
  event_end_date datetime NOT NULL,
  event_organizer varchar(40) NOT NULL,
  PRIMARY KEY (event_id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS user_to_player (
  user_to_player_id varchar(36) NOT NULL,
  user_id varchar(36) NOT NULL,
  player_id varchar(36) NOT NULL,
  relationship_type varchar(40) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(user_id),
  FOREIGN KEY (player_id) REFERENCES player(player_id),
  PRIMARY KEY (user_to_player_id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS player_to_team (
  player_to_team_id char(36) NOT NULL,
  player_id char(36) NOT NULL,
  team_id char(36) NOT NULL,
  player_role varchar(40) DEFAULT NULL,
  primary_position varchar(40) DEFAULT NULL,
  secondary_position varchar(40) DEFAULT NULL,
  FOREIGN KEY (player_id) REFERENCES player(player_id),
  FOREIGN KEY (team_id) REFERENCES team(team_id),
  PRIMARY KEY (player_to_team_id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS team_to_game (
  team_to_game_id char(36) NOT NULL,
  home_team_id char(36) NOT NULL,
  away_team_id char(36) NOT NULL,
  game_id char(36) NOT NULL,
  FOREIGN KEY (home_team_id) REFERENCES team(team_id),
  FOREIGN KEY (away_team_id) REFERENCES team(team_id),
  FOREIGN KEY (game_id) REFERENCES game(game_id),
  PRIMARY KEY (team_to_game_id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS player_to_game (
  player_to_game_id char(36) NOT NULL,
  player_id char(36) NOT NULL,
  game_id char(36) NOT NULL,
  player_status varchar(40) DEFAULT NULL,
  FOREIGN KEY (player_id) REFERENCES player(player_id),
  FOREIGN KEY (game_id) REFERENCES game(game_id),
  PRIMARY KEY (player_to_game_id)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS game_to_event (
  game_to_event_id char(36) NOT NULL,
  game_id char(36) NOT NULL,
  event_id char(36) NOT NULL,
  FOREIGN KEY (game_id) REFERENCES game(game_id),
  FOREIGN KEY (event_id) REFERENCES event(event_id),
  PRIMARY KEY (game_to_event_id)
) ENGINE=INNODB;