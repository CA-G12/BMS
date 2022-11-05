import { Router } from 'express';
import { getAllBills } from '../controllers';

const router = Router();

router.get('/', getAllBills);

export default router;
