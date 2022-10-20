import { Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { CustomError, signToken, verifyToken } from '../helpers';
import { IUserPayload, IRequestPayload } from '../interfaces/IUserPayload';

dotenv.config();

const GenerateToken = async (payload: IUserPayload, res: Response, next: NextFunction) => {
  try {
    const token = await signToken(payload);
    res.cookie('token', token).json({ message: 'Logged in Successfully' });
  } catch (err) {
    next(err);
  }
};

const Authenticate = async (req: IRequestPayload, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;
    const user: IUserPayload = await verifyToken(token);
    req.user = {
      role: user.role,
      id: user.id,
    };
    next();
  } catch (err) {
    next(err);
  }
};

const Authorize = (req: IRequestPayload, res: Response, next: NextFunction, user_role: string) => {
  try {
    if (!req.user) {
      throw new CustomError(
        401,
        'You are not Authorized',
      );
    } else {
      const { role } = req.user;
      if (!user_role || role === user_role) {
        next();
      } else {
        throw new CustomError(
          401,
          'You are not Authorized',
        );
      }
    }
  } catch (err) {
    next(err);
  }
};

export {
  GenerateToken, Authenticate, Authorize,
};
