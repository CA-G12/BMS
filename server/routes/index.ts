import { Router } from 'express';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';
import servicesRouter from './servicesRouter';
import { addContact } from '../controllers';

const router = Router();

router.route('/contact').post(addContact);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);
router.use('/services', servicesRouter);

export default router;
