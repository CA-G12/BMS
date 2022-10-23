import { Router } from 'express';
import AuthRouter from './auth';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';
import announcmentsRouter from './announcmentsRouter';
import { addContact } from '../controllers';

const router = Router();

router.use('/auth', AuthRouter);
router.route('/contact').post(addContact);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);
router.use('/announcments', announcmentsRouter);

export default router;
