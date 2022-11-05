import { Router } from 'express';

import {
  getAnnouncement, postAnnouncement, getAnnouncementById, putAnnouncement, deleteAnnouncement,
} from '../controllers';

const router = Router();

router.get('/', getAnnouncement);
router.post('/', postAnnouncement);
router.delete('/:id', deleteAnnouncement);
router.get('/:id', getAnnouncementById);
router.put('/:id', putAnnouncement);

export default router;
