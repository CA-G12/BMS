import {
  Request, Response, NextFunction,
} from 'express';
import bcrypt from 'bcrypt';
import { loginValidation } from '../../validation';
import { UserModel } from '../../models';
import { CustomError } from '../../helpers';
import { GenerateToken } from '../../middleware';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { phoneNumber, password } = await loginValidation.validate(req.body, {
      abortEarly: false,
    });
    const user = await UserModel.findOne({ where: { phone_number: phoneNumber } });

    if (!user) {
      throw new CustomError(
        400,
        'المستخدم غير موجود',
      );
    }
    const {
      role, id,
    } = user;
    const comparePasswordResult = await bcrypt.compare(password, user.hashed_password);
    if (!comparePasswordResult) {
      throw new CustomError(
        400,
        'كلمة المرور خاطئة',
      );
    }
    GenerateToken({
      phoneNumber, id, role,
    }, res, next);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    next(err);
  }
};

export default login;
