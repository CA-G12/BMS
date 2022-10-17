import { Router } from 'express';
import adsRouter from './adsRouter';

const router = Router();

router.use('/advertisements', adsRouter);

export default router;
