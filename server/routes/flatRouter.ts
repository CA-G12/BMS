import { Router } from 'express';
import { getFlats } from '../controllers/index';

const router = Router();

router.get('/', getFlats);

export default router;
