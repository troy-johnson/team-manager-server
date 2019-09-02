import connection from '../config';

const db = connection;

const getUser = (req, res) => {
  const query = `SELECT * FROM user WHERE user_id = ${req.params.user_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const upsertUser = (req, res) => {
  const query = `INSERT INTO ${req.params.user_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const deleteUser = (req, res) => {
  const query = `INSERT INTO ${req.params.user_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const getAllUsers = (_req, res) => {
  const query = 'SELECT * FROM user';
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const getTeamsFromUser = (req, res) => {
  const query = `
    SELECT
      team.team_id,
      team.team_logo,
      team.team_name,
      team.team_sport
    FROM user
    LEFT JOIN user_to_player
          on user.user_id = user_to_player.user_id
      LEFT JOIN player
          on user_to_player.player_id = player.player_id
      LEFT JOIN player_to_team
        on player.player_id = player_to_team.player_id
      LEFT JOIN team
        on player_to_team.team_id = team.team_id
    WHERE user.user_id = ${req.params.user_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const getUserPlayers = (req, res) => {
  const query = `
  SELECT 
    user.user_full_name,
    player.full_name,
    user.email_address,
    player.email_address
  FROM user
    LEFT JOIN user_to_player
        on user.user_id = user_to_player.user_id
    LEFT JOIN player
        on player.player_id = user_to_player.player_id
  WHERE user.user_id = ${req.params.user_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

export {
  getUser,
  upsertUser,
  deleteUser,
  getAllUsers,
  getUserPlayers,
  getTeamsFromUser
};
