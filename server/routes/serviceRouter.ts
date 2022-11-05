import { Router } from 'express';
import {
  getServices, postServices, updateServices, getServiceById,
} from '../controllers';

const router = Router();

router.get('/', getServices);
router.post('/', postServices);
router.put('/:id', updateServices);
router.get('/:id', getServiceById);

export default router;
