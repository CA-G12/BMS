import { Router } from 'express';
import { getFlats, getFlatsUsers } from '../controllers/index';

const router = Router();

router.get('/', getFlats);
router.get('/users', getFlatsUsers);

export default router;
