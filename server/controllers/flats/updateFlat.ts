import { Request, Response, NextFunction } from 'express';
import { FlatModel } from '../../models';

export default async (req:Request, res:Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!(Number(id) > 0)) {
      return res.json({ message: 'Flat Id must be a number and greater then 0' });
    }
    const {
      userId,

    } = req.body;
    interface FlatUserModel {
      userId: number;
    }
    const data : FlatUserModel | any = await FlatModel.update({
      UserId: userId,
    }, {
      where: { id },
      returning: true,
    });
    res.json({ data, msg: 'succec' });
  } catch (err) {
    console.log('err: ', err);
    return next(err);
  }
};
