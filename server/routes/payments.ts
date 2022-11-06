import { Router } from 'express';
import { allUserPayments } from '../controllers';

const router = Router();

router.get('/:userId', allUserPayments);

export default router;
