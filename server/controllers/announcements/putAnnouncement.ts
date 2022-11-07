import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../helpers';
import { AnnouncementModel } from '../../models';
import { announcementSchema } from '../../validation';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const { title, start_date, end_date } = await announcementSchema.validate(req.body, { abortEarly: false });
    const data = await AnnouncementModel.update({ title, start_date, end_date }, { where: { id }, returning: true });
    res.json({ data: data[1] });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    return next(err);
  }
};
