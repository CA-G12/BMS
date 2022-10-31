import { NextFunction, Request, Response } from 'express';
import { BillModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { FlatId } = req.params;

    if (!(Number(FlatId) > 0)) {
      return res.json({ message: 'Flat Id of Bill must be a number and greater then 0' });
    }

    const data = await BillModel.findAll({ where: { FlatId, is_open: true } });
    if (data) {
      res.json({ data });
    } else {
      res.json({ message: 'There is no bill that have this flat id' });
    }
  } catch (err) {
    next(err);
  }
};
