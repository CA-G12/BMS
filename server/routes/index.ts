import { Router } from 'express';
import AuthRouter from './auth';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';
import billRouter from './billRoute';
import announcementsRouter from './announcementsRouter';
import serviceRouter from './serviceRouter';
import contactRouter from './contactRouter';
import complaintRoute from './complaintRoute';
import userRouter from './userRoute';
import billUser from './billUser';

const router = Router();
router.use('/auth', AuthRouter);
router.use('/contacts', contactRouter);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);
router.use('/bills', billRouter);
router.use('/announcements', announcementsRouter);
router.use('/user', userRouter);
router.use('/services', serviceRouter);
router.use('/billUser', billUser);
router.use('/complaints', complaintRoute);

export default router;
