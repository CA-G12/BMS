/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response, NextFunction } from 'express';
import { ServiceModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {
      name, price, is_fixed, description, is_open,
    } = await req.body;
    const data = await ServiceModel.create({
      name, price, is_fixed, description, is_open,
    });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
