import mysql from 'mysql';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

const query = (...args) => new Promise((resolve, reject) => {
  connection.query(...args, (err, result) => {
    if (err) {
      return reject(err);
    }

    return resolve(result);
  });
});

export const connect = () => connection.connect((err) => {
  if (err) throw err;
});

const publicAPI = {
  query,
};

export default publicAPI;
