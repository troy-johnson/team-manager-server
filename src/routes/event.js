import { Router } from 'express';
import { event } from '../controllers';

const router = Router();

router.get('/:id', (req, res) => {
  event.getEvent(req, res);
});

router.get('/', (req, res) => {
  event.getAllEvents(req, res);
});

export default router;
