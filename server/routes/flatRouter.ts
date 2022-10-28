import { Router } from 'express';
import { getFlats, getFlatsUsers, flatById } from '../controllers/index';

const router = Router();

router.get('/', getFlats);
router.get('/users', getFlatsUsers);
router.get('/:id', flatById);

export default router;
