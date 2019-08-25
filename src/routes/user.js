import { Router } from 'express';
import { user } from '../controllers';

const router = Router();

router.get('/:id', (req, res) => {
  user.getUser(req, res);
});

router.put('/:id', (req, res) => {
  user.upsertUser(req, res);
});

router.delete('/:id', (req, res) => {
  user.deleteUser(req, res);
});

router.get('/', (req, res) => {
  user.getAllUsers(req, res);
});

router.get('/players/:id', (req, res) => {
  user.getUserPlayers(req, res);
});

export default router;
