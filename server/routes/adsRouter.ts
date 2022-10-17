import { Router } from 'express';
import { getAdvertisements } from '../controllers/user';

const router = Router();

router.get('/', getAdvertisements);

export default router;
