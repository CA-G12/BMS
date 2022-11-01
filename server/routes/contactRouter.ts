import { Router } from 'express';
import { addContact, getContact } from '../controllers';

const router = Router();

router.get('/', getContact);
router.post('/', addContact);

export default router;
