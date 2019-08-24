import { Router } from 'express';
import { user } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
  user.getAllUsers(req, res);
});

export default router;
