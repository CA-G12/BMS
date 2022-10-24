/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response, NextFunction } from 'express';
import { ServiceModel } from '../../models';
import { CustomError } from '../../helpers';
import { servicesSchema } from '../../validation';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {
      id, name, price, is_fixed, description, is_open,
    } = await servicesSchema.validate(req.body, { abortEarly: false });
    const data = await ServiceModel.update({
      name, price, is_fixed, description, is_open,
    }, {
      where: { id },
      returning: true,
    });
    res.json({ data: data[1] });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    return next(err);
  }
};