import { Router } from 'express';
import adsRouter from './adsRouter';
import flat from './flat';

const router = Router();

router.use('/advertisements', adsRouter);
router.use('/flats', flat);

export default router;
