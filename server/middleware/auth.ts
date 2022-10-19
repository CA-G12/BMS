import {
  Request, Response, NextFunction,
} from 'express';
import dotenv from 'dotenv';
import { CustomError, signToken, verifyToken } from '../helpers';

dotenv.config();

interface IPayload {
  id: number;
  role: string;
  phoneNumber: string
}

interface MyRequest extends Request {
  user: {
    role: string;
    id: number
  }
}

const GenerateToken = async (payload: IPayload, res: Response, next: NextFunction) => {
  try {
    const token = await signToken(payload);
    res.cookie('token', token).json({ message: 'Logged in Successfully' });
  } catch (err) {
    next(err);
  }
};

const Authenticate = async (req: MyRequest, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;
    const user: { id: number, role: string } = await verifyToken(token);
    req.user = {
      role: user.role,
      id: user.id,
    };
    next();
  } catch (err) {
    next(err);
  }
};

const Authorize = (req: MyRequest, res: Response, next: NextFunction, user_role: string) => {
  try {
    if (!req.user) {
      throw new CustomError(
        401,
        'المستخدم غير موثق',
      );
    } else {
      const { role } = req.user;
      if (!user_role || role === user_role) {
        next();
      } else {
        throw new CustomError(
          403,
          'المستخدم غير مصرح بالدخول لهذه الصفحة',
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
