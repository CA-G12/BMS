import {
  Request, Response, NextFunction,
} from 'express';
import { CustomError } from '../../helpers';
import { FlatModel, UserModel } from '../../models';

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const limitNum = 2;
    const { page } = req.query;
    const total = await FlatModel.count({ include: [{ model: UserModel }] });
    if ((+page) <= 0) {
      throw new CustomError(400, 'bad request');
    }
    const offsetNum = (+(page) - 1) * limitNum;
    const queryResult : IQueryResult[] = await FlatModel.findAll({
      raw: true,
      attributes: ['id', 'flat_number'],
      include: [{
        model: UserModel,
        attributes: ['first_name', 'last_name', 'phone_number', 'id', 'email'],
      }],
      offset: offsetNum,
      limit: limitNum,
    });

    const result: FlatUsers[] = queryResult.map((x) => ({

      id: x.id,
      flat_number: x.flat_number,
      full_name: `${x['User.first_name']} ${x['User.first_name']}`,
      phone_number: x['User.phone_number'],

    }));
    res.json({ result, total });
  } catch (err) {
    next(err);
  }
};

interface FlatUsers {
  id: number;
  full_name: string;
  flat_number: number;
  phone_number: string;
}
interface IQueryResult {
  id: number;
  flat_number: number;
  // 'User.first_name': string;
  // 'User.last_name': string;
  // 'User.phone_number': string;
  // 'User.id': number;
  // 'User.email': string;
}
