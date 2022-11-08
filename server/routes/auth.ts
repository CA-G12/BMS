import { Router } from 'express';
import { login, logout } from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize, GetUserData } from '../middleware';

const router = Router();

router.post('/login', login);
router.use((req, _, next) => Authorize(req as InferRequestPayload, _, next, null));
router.get('/logout', logout);
router.get('/userdata', GetUserData);

export default router;
