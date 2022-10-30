import { Router } from 'express';
import { addUser } from '../controllers';

const router = Router();

router.post('/adduser', addUser);

export default router;
