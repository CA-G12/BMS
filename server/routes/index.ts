import { Router } from 'express';
import AuthRouter from './auth';
import adsRouter from './adsRouter';
import flatRouter from './flatRouter';
import { addContact } from '../controllers';
import flatsUsersRouter from './flatsUsersRouter';

const router = Router();

router.use('/auth', AuthRouter);
router.route('/contact').post(addContact);
router.use('/advertisements', adsRouter);
router.use('/flats', flatRouter);
router.use('/flatsUsers', flatsUsersRouter);

export default router;
