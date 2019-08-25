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

const getUserPlayers = (req, res) => {
  const query = `
  SELECT 
    user.user_full_name,
    player.player_full_name,
    user.user_email_address,
    player.player_email_address
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

export { getUser, getAllUsers, getUserPlayers };
