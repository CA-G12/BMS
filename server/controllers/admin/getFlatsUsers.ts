import {
  Request, Response, NextFunction,
} from 'express';
import { CustomError } from '../../helpers';
import { FlatModel, UserModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const limitNum = 2;
    const { pageNum } = req.query;
    if ((+pageNum) <= 0) {
      throw new CustomError(400, 'bad request');
    }
    const offsetNum = (+(pageNum) - 1) * limitNum;
    const data = await FlatModel.findAll({
      include: [{
        model: UserModel,
      }],
      offset: offsetNum,
      limit: limitNum,
    });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
