import { Router } from 'express';

import {
  getAnnouncement, postAnnouncement, getAnnouncementById, putAnnouncement, deleteAnnouncement,
} from '../controllers';
import { InferRequestPayload } from '../interfaces/InferUserPayload';
import { Authorize } from '../middleware';

const router = Router();
router.use((req, _, next) => Authorize(req as InferRequestPayload, _, next, 'admin'));
router.get('/', getAnnouncement);
router.post('/', postAnnouncement);
router.delete('/:id', deleteAnnouncement);
router.get('/:id', getAnnouncementById);
router.put('/:id', putAnnouncement);

export default router;
