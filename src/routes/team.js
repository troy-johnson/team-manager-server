import { Router } from 'express';
import { team } from '../controllers';

const router = Router();

router.get('/:id', (req, res) => {
  team.getTeam(req, res);
});

router.get('/', (req, res) => {
  team.getAllTeams(req, res);
});

export default router;
