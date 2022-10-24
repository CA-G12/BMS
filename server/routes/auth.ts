import { Router } from 'express';
import { login, signUp } from '../controllers/Auth';

const router = Router();

router.post('/login', login);
router.post('/signUP', signUp);

export default router;
