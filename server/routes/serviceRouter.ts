import { Router } from 'express';
import { updateServices } from '../controllers';

const router = Router();

router.put('/', updateServices);

export default router;
