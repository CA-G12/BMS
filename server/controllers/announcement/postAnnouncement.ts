/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response, NextFunction } from 'express';
import { AnnouncementModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { title, start_date, end_date } = await req.body;
    const data = await AnnouncementModel.create({ title, start_date, end_date });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};
