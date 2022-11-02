import {
  Request, Response, NextFunction,
} from 'express';
import { FlatModel, UserModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { id } = req.params; // todo: change to be token from req
    const data = await UserModel.findOne({
      raw: true,
      attributes: ['first_name', 'last_name', 'phone_number', 'id', 'email'],
      include: [{
        model: FlatModel,
        attributes: ['flat_number'],
        where: { id },
      }],

    });
    res.json({ data });
  } catch (err) {
    res.json({ msg: 'error' });
    next(err);
  }
};

// interface IProfileData {
//   id: number;
//   flat_number: number;
// }