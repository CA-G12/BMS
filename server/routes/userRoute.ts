import { Router } from 'express';
import {
  addUser, getUsers, profile,
} from '../controllers';
import { updateUser } from '../controllers/users';

const router = Router();

router.post('/adduser', addUser);
router.get('/profile', profile);
router.get('/:page', getUsers);
router.put('/profile', updateUser);

export default router;
