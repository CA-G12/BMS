import { Router } from 'express';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';
import { addContact } from '../controllers';

const router = Router();

router.route('/contact').post(addContact);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);

export default router;
