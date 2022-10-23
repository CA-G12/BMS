import { Router } from 'express';
import login from '../controllers/Auth/login';

const router = Router();

router.post('/login', login);

export default router;