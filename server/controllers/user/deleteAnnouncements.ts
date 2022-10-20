/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response, NextFunction } from 'express';
import { AnnouncementModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { announcementsId } = req.params;
    const convertId:number = +(announcementsId);
    if (Number.isNaN(convertId)) {
      res.send('Announcement Id must be a number');
    } else if (convertId < 1) {
      res.send('Announcement Id must be greater than 0');
    }

    const data = await AnnouncementModel.destroy({ where: { id: announcementsId } });
    if (!data) {
      res.send('There is no item have this id');
    } else {
      res.send('Announcement Deleted Successfully');
    }
  } catch (err) {
    next(err);
  }
};
