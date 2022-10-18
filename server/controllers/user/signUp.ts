// import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcrypt';
import { UserModel } from '../../models';
import { SignUpSchema } from '../../validation';
import CustomError from '../../helpers';
import {GenerateToken} from '../../middleware'

const signUp = async (req, res, next) => {
  try {
    const {
      firstName, lastName, phoneNumber, email, password,
    } = req.body;
    await SignUpSchema.validate({
      firstName, lastName, phoneNumber, email, password,
    });
    const user = await UserModel.findOne({ where: { phone_number: phoneNumber } });

    if (user) {
      throw new CustomError(
        409,
        '  الرقم مستخدم حاليا',
      );
      const hashedPassword = await hash(password, 10);
      const cerateResult = await UserModel.create(req.body, hashed_password: hashedPassword);
      GenerateToken({name: firstName, phone_number: phoneNumber}, res, next)
      }
  } catch (err) {
    next(err);
  }
};

export default signUp;
