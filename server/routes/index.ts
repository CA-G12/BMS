import { Router } from 'express';
import AuthRouter from './auth';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';
import announcementsRouter from './announcementsRouter';
import serviceRouter from './serviceRouter';
import { addContact, addUser } from '../controllers';

const router = Router();

router.use('/auth', AuthRouter);
router.route('/contact').post(addContact);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);
router.use('/announcements', announcementsRouter);
router.use('/services', serviceRouter);
router.use('/user', addUser);

export default router;
