import { Router } from 'express';
import { getAdvertisements } from '../controllers';

const router = Router();

router.get('/', getAdvertisements);

export default router;
