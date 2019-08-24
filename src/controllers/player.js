import connection from '../config';

const db = connection;

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

const getPlayer = (req, res) => {
  const query = `SELECT * FROM player WHERE player_id = ${req.id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

export { getAllPlayers, getPlayer };
