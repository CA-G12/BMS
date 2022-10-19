import { Router } from 'express';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';
import { addContact } from '../controllers';
import signUpRouter from './AddUserRouter';

const router = Router();

router.route('/contact').post(addContact);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);
router.use('/signUp', signUpRouter);

export default router;
