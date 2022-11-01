import { Request, Response, NextFunction } from 'express';
import { ComplaintsModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = await ComplaintsModel.findAll();
    res.json({ data });
  } catch (error) {
    next(error);
  }
};
