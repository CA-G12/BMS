import { Router } from 'express';
import { postServices } from '../controllers';

const router = Router();

router.post('/', postServices);

export default router;
