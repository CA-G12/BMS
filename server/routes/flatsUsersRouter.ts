import { Router } from 'express';
import { getFlatsUsers } from '../controllers/index';

const router = Router();

router.get('/', getFlatsUsers);

export default router;
