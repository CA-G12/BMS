import { Router } from 'express';
import {
  getFlats, getFlatsUsers, flatById, updateFlat, availableFlats,
} from '../controllers/index';

const router = Router();

router.get('/', getFlats);
router.get('/available', availableFlats);
router.get('/users', getFlatsUsers);
router.get('/:id', flatById);
router.put('/:id', updateFlat);

export default router;
