/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { NextFunction, Response } from 'express';
import { WhereOptions } from 'sequelize';
import { InferRequestPayload } from '../../interfaces/InferUserPayload';
import { BillModel, FlatModel, UserModel } from '../../models';

export default async (req:InferRequestPayload, res:Response, next:NextFunction) => {
  try {
    const { id } = req.user;
    console.log(`User Id: ${id}`);

    const { flat_number, is_open } = req.query;
    const billOpenOrClosed :WhereOptions<any> = {};
    if (is_open) {
      billOpenOrClosed.is_open = is_open;
    }
    const flastExistsOrNOt :WhereOptions<any> = {};
    if (flat_number) {
      flastExistsOrNOt.flat_number = flat_number;
    }
    const data = await UserModel.findAll({
      raw: true,
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
      where: { id },
      attributes: [],

    });
    if (data) {
      res.json({ data });
    } else {
      res.json({ message: 'There is no bill that have this flat id' });
    }
  } catch (err) {
    console.log(err);

    next(err);
  }
};
