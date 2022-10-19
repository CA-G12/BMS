/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response, NextFunction } from 'express';
import { ServiceModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {
      id, name, price, is_fixed, description,
    } = req.body;
    const data = await ServiceModel.update({
      name, price, is_fixed, description,
    }, {
      where: { id },
      returning: true,
    });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
