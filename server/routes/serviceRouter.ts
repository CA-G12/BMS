import { Router } from 'express';
import { getServices } from '../controllers';

const router = Router();

router.get('/', getServices);

export default router;
