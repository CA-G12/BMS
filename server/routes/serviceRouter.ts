import { Router } from 'express';
import { getServices, postServices, updateServices } from '../controllers';

const router = Router();

router.get('/', getServices);
router.post('/', postServices);
router.put('/', updateServices);

export default router;
