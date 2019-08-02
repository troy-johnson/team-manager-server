import express from 'express';
import cors from 'cors';
import routes from './routes';

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

const app = express();
const router = express.Router();

app.use(cors());

app.use('/', router);
app.use('/game', routes.game);
app.use('/player', routes.player);
app.use('/season', routes.season);

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${port}`);
});


export default app;
