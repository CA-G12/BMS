import { Router } from 'express';
import { addUser, getUsers } from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();
router.use((req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'));

router.post('/adduser', addUser);
router.get('/:page', getUsers);

export default router;
