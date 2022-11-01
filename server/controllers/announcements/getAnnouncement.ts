import { Request, Response, NextFunction } from 'express';

import { AnnouncementModel } from '../../models';
import Advertisement from '../../models/Advertisement';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const advertisements = await Advertisement.findAll();
    const announcements = await AnnouncementModel.findAll();

    const advs : UserAdvs[] = advertisements.map((x) => ({
      id: Number(`1${x.id}`),
      title: x.title,
      startDate: x.start_date,
      endDate: x.end_date,
      isPublic: false,
    }));
    const anns : UserAdvs[] = announcements.map((x) => ({
      id: Number(`2${x.id}`),
      title: x.title,
      startDate: x.start_date,
      endDate: x.end_date,
      isPublic: true,
    }));

    const data : UserAdvs[] = [...advs, ...anns];

    res.json({ data });
  } catch (err) {
    next(err);
  }
};

interface UserAdvs {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  isPublic: boolean;
}
