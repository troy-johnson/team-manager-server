import connection from '../config';

const db = connection;

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

const getUser = (req, res) => {
  const query = `SELECT * FROM user WHERE user_id = ${req.id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

export { getAllUsers, getUser };
