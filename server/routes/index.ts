import { Router } from 'express';
import AuthRouter from './auth';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';
import announcementsRouter from './announcementsRouter';
import serviceRouter from './serviceRouter';
import ddContact from '../controllers';
import compliantRoute from './compliantRoute';
import userRouter from './userRoute';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/contacts', addContact);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);
router.use('/announcements', announcementsRouter);
router.use('/user', userRouter);
router.use('/services', serviceRouter);

router.use('/complaints', compliantRoute);

export default router;
