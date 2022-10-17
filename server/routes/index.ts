/* eslint-disable import/no-import-module-exports */
import { Router } from 'express';
import { getFlats } from '../controllers';

const userRouter = Router();

userRouter.get('/flats', getFlats);

export default userRouter;
