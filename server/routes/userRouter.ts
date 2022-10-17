/* eslint-disable import/no-import-module-exports */
import { Router } from 'express';
import { getAdvertisements } from '../controllers/user';

const userRouter = Router();

userRouter.get('api/v1/advertisements/', getAdvertisements);
module.exports = userRouter;
