import { Router } from 'express';
import {
  addUser, getUsers, profile,
} from '../controllers';
import { updateUser } from '../controllers/users';

const router = Router();

router.post('/adduser', addUser);
router.get('/:page', getUsers);
router.get('/profile/:id', profile);
router.put('/profile/:id', updateUser);


export default router;
