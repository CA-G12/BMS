import { Request, Response, NextFunction } from 'express';
import { ServiceModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = await ServiceModel.findAll();
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
