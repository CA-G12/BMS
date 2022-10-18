import { Router } from 'express';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';

const router = Router();

router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);
router.use('/signUp', flatRouter);

export default router;
