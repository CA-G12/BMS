import {
  Request, Response,
} from 'express';

const serverError: any = (err:any, req:Request, res:Response) => {
  if (!err.status) {
    res.status(500).json({ message: 'Internal Server Error!' });
  } else {
    res.status(err.status).json({ message: err.message });
  }
};

const clientError: any = (req:Request, res:Response) => {
  res.status(404).json({ message: 'Not Found' });
};

export { serverError, clientError };
