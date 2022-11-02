/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { NextFunction, Request, Response } from 'express';
import { WhereOptions } from 'sequelize';
import { BillModel, FlatModel, UserModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { UserId } = req.params;
    const { flat_number, is_open } = req.query;
    if (!(Number(UserId) > 0)) {
      return res.json({ message: 'Flat Id of Bill must be a number and greater then 0' });
    }
    const billOpenOrClosed :WhereOptions<any> = {};
    if (is_open) {
      billOpenOrClosed.is_open = is_open;
    }
    const flastExistsOrNOt :WhereOptions<any> = {};
    if (flat_number) {
      flastExistsOrNOt.flat_number = flat_number;
    }
    const data = await UserModel.findAll({
      include: [{
        model: FlatModel,
        attributes: ['flat_number'],
        where: flastExistsOrNOt,
        include: [{
          model: BillModel,
          attributes: ['is_open', 'total_price', 'services'],
          where: billOpenOrClosed,
          required: false,
        }],
      }],
      where: { id: UserId },
      attributes: ['id'],

    });
    if (data) {
      res.json({ data: data[0].Flats });
    } else {
      res.json({ message: 'There is no bill that have this flat id' });
    }
  } catch (err) {
    next(err);
  }
};
