import connection from '../config';

const db = connection;

const getGame = (req, res) => {
  const query = `SELECT * FROM game WHERE game_id = ${req.params.game_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const upsertGame = (req, res) => {
  // TODO: Write query to upsert game
  const query = `SELECT * FROM game WHERE game_id = ${req.params.game_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const deleteGame = (req, res) => {
  // TODO: Write query to delete game
  const query = `SELECT * FROM game WHERE game_id = ${req.params.game_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const getAllGames = (_req, res) => {
  const query = 'SELECT * FROM game';
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const getGameStatus = (req, res) => {
  // TODO: Write query to get game info (teams, location, roster status)
  const query = `SELECT * FROM game WHERE game_id = ${req.params.game_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

export {
  getGame,
  upsertGame,
  deleteGame,
  getAllGames,
  getGameStatus
};
