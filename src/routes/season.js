import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Season works!'));

export default router;
