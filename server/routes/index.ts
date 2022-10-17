/* eslint-disable import/no-import-module-exports */
import { Router } from 'express';
import { getAdvertisements } from '../controllers/user';

const router = Router();
router.use(getAdvertisements);

export default router;

