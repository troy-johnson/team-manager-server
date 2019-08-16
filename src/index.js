/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.log('err', err);
  }

  console.log('connectd as id ', connection.threadId);
});

const app = express();
const router = express.Router();

app.use(cors());

app.use('/', router);
app.use('/player', routes.player);
app.use('/team', routes.team);
app.use('/event', routes.event);

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${port}`);
});

export default app;
