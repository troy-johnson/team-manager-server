import connection from '../config';

const db = connection;

const getEvent = (req, res) => {
  const query = `SELECT * FROM event WHERE event_id = ${req.params.event_id}`;
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

const getAllEvents = (_req, res) => {
  const query = 'SELECT * FROM event';
  db.query(query, (err, result) => {
    if (err) {
      res.status(403).send({ statusCode: 403, error: err });
    } else {
      res.status(200).send({ result });
    }
  });
};

export { getEvent, getAllEvents };
