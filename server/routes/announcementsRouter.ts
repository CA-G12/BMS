import { Router } from 'express';
import { deleteAnnouncements } from '../controllers';

const router = Router();

router.delete('/:announcementsId', deleteAnnouncements);

export default router;
