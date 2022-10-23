import { Router } from 'express';

import {
  getAnnouncments, postAnnouncments, getAnnouncmentsById, putAnnouncments, deleteAnnouncements,
} from '../controllers';

const router = Router();

router.get('/', getAnnouncments);
router.post('/', postAnnouncments);
router.delete('/:id', deleteAnnouncements);
router.get('/:id', getAnnouncmentsById);
router.put('/:id', putAnnouncments);

export default router;
