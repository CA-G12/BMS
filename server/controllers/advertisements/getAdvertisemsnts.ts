import {
  Request, Response, NextFunction,
} from 'express';
import { AdvertisementModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = await AdvertisementModel.findAll({ limit: 3 });

    res.json({ data });
  } catch (err) {
    next(err);
  }
};
