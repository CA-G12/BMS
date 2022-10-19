import { Router } from 'express';
import { signUp } from '../controllers';

const router = Router();

router.post('/', signUp);

export default router;
