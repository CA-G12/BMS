import { Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { CustomError, signToken, verifyToken } from '../helpers';
import { InferUserPayload, InferRequestPayload } from '../interfaces/InferUserPayload';

dotenv.config();

const GenerateToken = async (payload: InferUserPayload, res: Response, next: NextFunction) => {
  try {
    const token = await signToken(payload);
    res.cookie('token', token).json({ message: 'Logged in Successfully', role: payload.role });
  } catch (err) {
    next(err);
  }
};

const Authenticate = async (req: InferRequestPayload, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new CustomError(
        400,
        'Your are not authorize',
      );
    }
    const user: InferUserPayload = await verifyToken(token);
    req.user = {
      role: user.role,
      id: user.id,
    };
    next();
  } catch (err) {
    next(err);
  }
};

const Authorize = (req: InferRequestPayload, res: Response, next: NextFunction, user_role: string) => {
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
