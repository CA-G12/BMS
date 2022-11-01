/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../helpers';
import { AnnouncementModel } from '../../models';
import Advertisement from '../../models/Advertisement';
import { announcementSchema } from '../../validation';
// import { AnnouncementModel } from '../../models';
// import { announcementSchema } from '../../validation';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { type } = req.params;
    const { description } = req.body;
    if (type === 'internal') {
      const {
        title, startDate, endDate,
      } = await announcementSchema.validate(req.body, { abortEarly: false });
      const data = await AnnouncementModel.create({
        title, start_date: startDate, end_date: endDate,
      });
      res.json({ data });
    } else if (type === 'external') {
      const {
        title, startDate, endDate,
      } = await announcementSchema.validate(req.body, { abortEarly: false });
      const data = await Advertisement.create({
        title, image: 'none', start_date: startDate, description, end_date: endDate,
      });
      res.json({ data });
    } else {
      throw new Error('');
    }
  } catch (err) {
    console.log(err);

    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    return next(err);
  }
};
