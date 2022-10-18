import { Router } from 'express';
import AuthRouter from './auth';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);

export default router;
