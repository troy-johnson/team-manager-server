import { Router } from 'express';
import { player } from '../controllers';

const router = Router();

router.get('/:id', (req, res) => {
  player.getPlayer(req, res);
});

router.get('/', (req, res) => {
  player.getAllPlayers(req, res);
});

router.get('/teams/:id', (req, res) => {
  player.getPlayerTeams(req, res);
});

export default router;
