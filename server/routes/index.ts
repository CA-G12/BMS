import { Router } from 'express';
import addContact from '../controllers';

const router = Router();

router.route('/contact').post(addContact);

export default router;
