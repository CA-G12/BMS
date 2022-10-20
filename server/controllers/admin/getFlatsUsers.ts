import {
  Request, Response, NextFunction,
} from 'express';
import { FlatModel, UserModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = await FlatModel.findAll({
      include: [{
        model: UserModel,
      }],
    });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
