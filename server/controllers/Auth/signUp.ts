import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcrypt';
import { signUpSchema } from '../../validation';
import { UserModel } from '../../models';
import { CustomError } from '../../helpers';
import { GenerateToken } from '../../middleware';

const signUp = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const {
      firstName, lastName, phoneNumber, email, password,
    } = req.body;
    await signUpSchema.validateSync({
      firstName, lastName, phoneNumber, email, password,
    }, { abortEarly: false });
    // const users = await UserModel.findAll({ limit: 3 });
    const user = await UserModel.count({ where: { phone_number: phoneNumber } });
    if (user) {
      throw new CustomError(
        400,
        'Phone Number Already Exist',
      );
    }
    const hashedPassword = await hash(password, 10);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, role } = await UserModel.create({
      // eslint-disable-next-line max-len
      first_name: firstName, last_name: lastName, email, phone_number: phoneNumber, hashed_password: hashedPassword, role: 'user',
    });
    GenerateToken({
      id, role,
    }, res, next);
  } catch (err) {
    console.log('err: ', err);
    if (err.name === 'ValidationError') {
      return next(new CustomError(400, err.errors));
    }
    next(err);
  }
};

export default signUp;
