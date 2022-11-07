import { Router } from 'express';
import { getUsersBills } from '../controllers';

const router = Router();

router.get('/', getUsersBills);

export default router;
