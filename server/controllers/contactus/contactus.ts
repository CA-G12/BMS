import { RequestHandler } from 'express';
import { ContactUsModel } from '../../models';
import contactSchema from '../../validation';
import CustomError from '../../helpers';

const addContact: RequestHandler = async (req, res, next) => {
  /*
 get data from form +
 validation +
 query +
 add data +
 get result +
 return result as response +
 */

  try {
    const {
      name, email, phone, subject, description,
    } = req.body;

    const validationResult = await contactSchema.validate(
      {
        name, email, phone, subject, description,
      },
      { abortEarly: false },
    );
    console.log('Validation Result: ', validationResult);
    if (!validationResult) {
      // TODO: Validate Inputs Result
    }

    const cerateResult = await ContactUsModel.create(req.body);
    console.log('Create Data Result: ', cerateResult);

    if (!cerateResult) {
      // TODO: Validate Create Data Result
    }
    return res.status(201).json({ message: 'Add Contact is Successfully', status: 201 });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(new CustomError(400, error.errors[0]));
    }
    return next(error);
  }
};

export default addContact;
