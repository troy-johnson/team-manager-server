import connection from '../config';

const db = connection;

const getPlayer = (req, res) => {
  const query = `SELECT * FROM player WHERE player_id = ${req.params.player_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const getAllPlayers = (_req, res) => {
  const query = 'SELECT * FROM player';
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const getPlayerTeams = (req, res) => {
  const query = `
  SELECT 
    team.team_id,
    team.team_logo,
    team.team_name,
    team.team_sport,
    team.team_primary_color,
    team.team_secondary_color
  FROM player
    LEFT JOIN player_to_team
        on player.player_id = player_to_team.player_id
    LEFT JOIN team
        on team.team_id = player_to_team.team_id
  WHERE player.player_id = ${req.params.player_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

export { getPlayer, getAllPlayers, getPlayerTeams };
