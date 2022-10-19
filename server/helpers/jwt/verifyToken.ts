import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUserPayload } from '../../interfaces/IUserPayload';

dotenv.config();

const { env: { SECRET_KEY } } = process;

export default (token: string): Promise <IUserPayload> => (
  new Promise((resolve, reject) => {
    verify(token, SECRET_KEY, (err: Error, match: IUserPayload) => {
      if (err) return reject(err);
      return resolve(match);
    });
  }));
