import { Router } from 'express';
import { getUsersBills } from '../controllers';

const router = Router();

router.get('/:UserId', getUsersBills);

export default router;
