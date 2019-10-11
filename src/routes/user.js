import { Router } from 'express';
import { user } from '../controllers';

const router = Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  user.getUser(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: `user with id ${id} not found`
        });
      }

      return res.json(result);
    });
});

router.put('/:id', (req, res) => {
  const data = {
    userID: req.body.userID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
  };
  user.insertUser(data)
    .then(() => res.status(201).end());
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  user.deleteUser(id)
    .then(() => res.status(204).end());
});

router.get('/', (_req, res) => {
  user.getAllUsers()
    .then((users) => res.json(users));
});

router.get('/:id/players', (req, res) => {
  const { id } = req.params;
  user.getUserPlayers(id)
    .then((players) => res.json(players));
});

router.get('/:id/teams', (req, res) => {
  const { id } = req.params;
  user.getTeamsFromUser(id)
    .then((teams) => res.json(teams));
});

export default router;
