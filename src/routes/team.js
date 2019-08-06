import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Team works!'));

export default router;
