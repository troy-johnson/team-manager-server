/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';

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

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${port}`);
});

export default app;
