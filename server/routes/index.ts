import { Router } from 'express';
import AuthRouter from './auth';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';
import announcementsRouter from './announcementsRouter';
import serviceRouter from './serviceRouter';
import { addContact } from '../controllers';
import getUserData from '../middleware/getUserData';
import { Authenticate } from '../middleware';

const router = Router();
router.use('/auth', AuthRouter);
router.use('/user', Authenticate, getUserData);
router.route('/contact').post(addContact);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);
router.use('/announcements', announcementsRouter);
router.use('/services', serviceRouter);

export default router;
