import { Router } from 'express';
import { availableFlats, getFlats, getFlatsUsers } from '../controllers/index';

const router = Router();

router.get('/', getFlats);
router.get('/available', availableFlats);
router.get('/users', getFlatsUsers);

export default router;
