import { Router } from 'express';
import { signUp } from '../controllers';

const router = Router();

router.get('/', signUp);

export default router;
