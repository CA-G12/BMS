import { Router } from 'express';
import { getAllBills } from '../controllers';

const router = Router();

router.get('/:UserId', getAllBills);

export default router;
