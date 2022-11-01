import { Router } from 'express';

import {
  addComplaints, deleteSingleComplaint, getAllComplaints, getSingleComplaint,
} from '../controllers';

const router = Router();

router.get('/', getAllComplaints);
router.post('/', addComplaints);
router.delete('/:id', deleteSingleComplaint);
router.get('/:id', getSingleComplaint);

export default router;
