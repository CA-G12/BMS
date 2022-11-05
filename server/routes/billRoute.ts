import { Router } from 'express';
import { getAllBills, sendBillMessage } from '../controllers';

const router = Router();

router.get('/', getAllBills);
router.get('/sendmessage/:billID', sendBillMessage);

export default router;
