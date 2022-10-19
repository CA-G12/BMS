/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Request, Response, NextFunction } from 'express';
import { AnnouncementModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { announcementsId } = req.params;
    await AnnouncementModel.destroy({ where: { announcementsId } });
    res.send('Announcement Deleted Successfully');
  } catch (err) {
    next(err);
  }
};
