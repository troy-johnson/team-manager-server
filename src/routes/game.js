import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Game works!'));

export default router;
