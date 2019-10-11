/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';

import db from './config';

dotenv.config();

const port = 3000;

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

app.use('/', router);
app.use('/user', routes.user);
app.use('/player', routes.player);
app.use('/team', routes.team);
app.use('/event', routes.event);

export const startServer = () => app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${port}`);
});

if (require.main === module) {
  const server = startServer();
  const shutdown = () => {
    server.close();
    db.end();
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

export default app;
