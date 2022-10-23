/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Request, Response, NextFunction } from 'express';
import { AnnouncementModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const { title, start_date, end_date } = await req.body;
    const data = await AnnouncementModel.update({ title, start_date, end_date }, { where: { id }, returning: true });
    res.json({ data: data[1] });
  } catch (err) {
    next(err);
  }
};
