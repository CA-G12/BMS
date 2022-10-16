import {
  Request, Response, NextFunction,
} from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const serverError: any = (err:any, req:Request, res:Response, next:NextFunction) => {
  if (!err.status) {
    res.status(500).json({ message: 'Server Error!' });
  } else {
    res.status(err.status).json({ message: err.message });
  }
};

const clientError: any = (req:Request, res:Response) => {
  res.status(404).json({ message: 'not found' });
};

export { serverError, clientError };
