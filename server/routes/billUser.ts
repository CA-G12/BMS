import { Router } from 'express';
import { getNotPaidBill, getPaidBill } from '../controllers';

const router = Router();
router.get('/notPaid/:FlatId', getNotPaidBill);
router.get('/paid/:FlatId', getPaidBill);
export default router;
