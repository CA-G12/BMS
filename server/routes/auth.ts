import { Router } from 'express';
import { login, logout } from '../controllers';
import { Authenticate } from '../middleware';
import getUserData from '../middleware/getUserData';

const router = Router();

router.post('/login', login);
router.get('/logout', logout);
router.get('/userdata', Authenticate, getUserData);

export default router;
