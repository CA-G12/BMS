import { Request, Response, NextFunction } from 'express';
import { FlatModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const data = await FlatModel.findAll();
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
