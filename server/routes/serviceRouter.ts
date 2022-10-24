import { Router } from 'express';
import { getServices, postServices } from '../controllers';

const router = Router();

router.get('/', getServices);
router.post('/', postServices);

export default router;
