import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Event works!!'));

export default router;
