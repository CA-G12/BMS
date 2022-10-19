import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { env: { SECRET_KEY } } = process;

export default (token: string): Promise <{ id: number, role: string }> => (
  new Promise((resolve, reject) => {
    verify(token, SECRET_KEY, (err: Error, match: { id: number, role: string }) => {
      if (err) return reject(err);
      return resolve(match);
    });
  }));
