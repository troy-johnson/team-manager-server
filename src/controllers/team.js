import connection from '../config';

const db = connection;

const getTeam = (req, res) => {
  const query = `SELECT * FROM team WHERE team_id = ${req.params.team_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const getAllTeams = (_req, res) => {
  const query = 'SELECT * FROM team';
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

export { getTeam, getAllTeams };
