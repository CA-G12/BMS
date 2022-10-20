import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcrypt';
import { UserModel } from '../../models';
import { SignUpSchema } from '../../validation';
import CustomError from '../../helpers';
import { GenerateToken } from '../../middleware';

const signUp = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const {
      firstName, lastName, phoneNumber, email, password,
    } = req.body;
    await SignUpSchema.validateSync({
      firstName, lastName, phoneNumber, email, password,
    });
    // const users = await UserModel.findAll({ limit: 3 });
    const user = await UserModel.count({ where: { phone_number: phoneNumber } });
    if (user) {
      throw new CustomError(
        409,
        '  الرقم مستخدم حاليا',
      );
    }
    const hashedPassword = await hash(password, 10);
    console.log('hashedPassword: ', hashedPassword);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id, role} = await UserModel.create({
      first_name: firstName, last_name: lastName, email, phone_number: phoneNumber, hashed_password: hashedPassword,
    });
    GenerateToken({ id, role }, res, next);
  } catch (err) {
    console.log(err);
    
    if (err.name === 'ValidationError') {
      next(new CustomError(400, err.message));
    } else {
      next(err);
    }
  }
};

export default signUp;
