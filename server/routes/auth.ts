import { Router } from 'express';
import { login, logout } from '../controllers';
import { GetUserData } from '../middleware';

const router = Router();

router.post('/login', login);
router.get('/logout', logout);
router.get('/userdata', GetUserData);

export default router;
