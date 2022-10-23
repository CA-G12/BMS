import { Request, Response, NextFunction } from 'express';
import { AnnouncementModel } from '../../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params;
    const convertId:number = +(id);
    if (Number.isNaN(convertId)) {
      res.json({ msg: 'Announcement Id must be a number' });
    } else if (convertId < 1) {
      res.json({ msg: 'Announcement Id must be greater than 0' });
    }

    const data = await AnnouncementModel.findOne({ where: { id: convertId } });

    if (data) {
      res.json({ data });
    } else {
      res.json({ msg: 'There is no announcement that have this id' });
    }
  } catch (err) {
    next(err);
  }
};
