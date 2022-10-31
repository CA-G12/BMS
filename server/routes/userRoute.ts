import { Router } from 'express';
import { addUser, getUsers } from '../controllers';

const router = Router();

router.post('/adduser', addUser);
router.get('/:page', getUsers);

export default router;
