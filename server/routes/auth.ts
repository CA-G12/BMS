import { Router } from 'express';
import { login } from '../controllers';
import { Authenticate } from '../middleware';
import getUserData from '../middleware/getUserData';

const router = Router();

router.post('/login', login);
router.get('/userdata', Authenticate, getUserData);

export default router;
