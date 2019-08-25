import { Router } from 'express';
import { game } from '../controllers';

const router = Router();

router.get('/:id', (req, res) => {
  game.getGame(req, res);
});

router.put('/:id', (req, res) => {
  game.upsertGame(req, res);
});

router.delete('/:id', (req, res) => {
  game.deleteGame(req, res);
});

router.get('/', (req, res) => {
  game.getAllGames(req, res);
});

router.get('/status/:id', (req, res) => {
  game.getGameStatus(req, res);
});

export default router;
