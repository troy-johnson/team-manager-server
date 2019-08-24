import { Router } from 'express';
import { player } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  player.getAllPlayers(req, res);
});

export default router;
